/**
 * Detects fetch/response aborts across browsers, undici, and Turbopack bundles.
 * `instanceof DOMException` can fail across realms; duck-type name/message/cause.
 */

const ABORT_MESSAGE_MARKERS = [
  "signal is aborted",
  "the user aborted a request",
  "the operation was aborted",
  "user aborted",
  "aborted without reason",
] as const;

function messageLooksLikeAbort(msg: string): boolean {
  const m = msg.toLowerCase();
  return ABORT_MESSAGE_MARKERS.some((marker) => m.includes(marker));
}

function peelCause(error: unknown, depth: number): boolean {
  if (depth <= 0 || error == null || typeof error !== "object") return false;
  if (!("cause" in error)) return false;
  return isFetchAbortError((error as { cause: unknown }).cause, depth - 1);
}

/**
 * @param error - Value from fetch catch or promise rejection
 * @param depth - Max cause chain depth
 */
export function isFetchAbortError(error: unknown, depth = 3): boolean {
  if (error == null) return false;

  if (typeof error === "string") {
    return messageLooksLikeAbort(error);
  }

  if (typeof error === "object") {
    const name = "name" in error ? String((error as { name: unknown }).name) : "";
    if (name === "AbortError") return true;

    const message =
      "message" in error && typeof (error as { message: unknown }).message === "string"
        ? (error as { message: string }).message
        : "";
    if (messageLooksLikeAbort(message)) return true;
  }

  return peelCause(error, depth);
}
