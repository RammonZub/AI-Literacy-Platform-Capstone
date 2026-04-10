/**
 * Notification adapter used by the capstone runtime.
 *
 * No external notification vendors; `notify*` keeps call sites stable and logs in development only.
 */

export interface ErrorAlertPayload {
  event_name: string;
  error_reason?: string;
  page_path?: string;
  timestamp: string;
  session_id?: string;
}

/**
 * Reserved for future external alerting. The capstone deployment keeps this as a
 * development-only log so runtime failures do not depend on external vendors.
 */
export function notifyCriticalError(payload: ErrorAlertPayload): void {
  if (process.env.NODE_ENV === "development") {
    console.warn("[notifications] critical (dev log only; no external channel)", payload);
  }
}

/**
 * Reserved for future external alerting. The capstone deployment keeps this as a
 * development-only log so runtime warnings do not depend on external vendors.
 */
export function notifyWarning(payload: ErrorAlertPayload): void {
  if (process.env.NODE_ENV === "development") {
    console.warn("[notifications] warning (dev log only; no external channel)", payload);
  }
}
