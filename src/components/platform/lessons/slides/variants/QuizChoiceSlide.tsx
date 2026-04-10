import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Check, X } from "lucide-react";
import React, { memo, useState } from "react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import type { LessonSlide } from "@/types/content";

interface QuizChoiceSlideProps {
  slide: LessonSlide;
}

export default memo(function QuizChoiceSlide({ slide }: QuizChoiceSlideProps) {
  const { content } = slide;
  const { quizData } = content;

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Use the first question if available
  const question = quizData?.questions?.[0];

  if (!question || !question.options) return null;

  const handleSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
  };

  const isCorrect =
    selectedOption !== null && question.options[selectedOption] === question.correctAnswer;

  // Find index of correct answer
  const correctIndex = question.options.findIndex((opt) => opt === question.correctAnswer);

  return (
    <div className="h-full w-full flex flex-col bg-background p-6 justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto w-full"
      >
        <div className="mb-8 text-center">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
            Quick Check
          </span>
          <h2 className="text-2xl font-serif font-bold text-foreground">{question.question}</h2>
        </div>

        <div className="space-y-3">
          {question.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isThisCorrect = idx === correctIndex;

            let borderColor = "border-border";
            let bgColor = "bg-card";

            if (isSubmitted) {
              if (isThisCorrect) {
                borderColor = "border-green-500";
                bgColor = "bg-green-500/10";
              } else if (isSelected && !isThisCorrect) {
                borderColor = "border-red-500";
                bgColor = "bg-red-500/10";
              }
            } else if (isSelected) {
              borderColor = "border-primary";
              bgColor = "bg-primary/5";
            }

            return (
              <motion.button
                key={idx}
                whileTap={!isSubmitted ? { scale: 0.98 } : {}}
                onClick={() => handleSelect(idx)}
                className={cn(
                  "w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between group",
                  borderColor,
                  bgColor,
                  !isSubmitted && "hover:border-primary/50",
                )}
                disabled={isSubmitted}
              >
                <span className="font-medium">{option}</span>
                {isSubmitted && isThisCorrect && <Check className="w-5 h-5 text-green-500" />}
                {isSubmitted && isSelected && !isThisCorrect && (
                  <X className="w-5 h-5 text-red-500" />
                )}
              </motion.button>
            );
          })}
        </div>

        {!isSubmitted ? (
          <div className="mt-8 flex justify-center">
            <Button
              variant="primary"
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className="w-full md:w-auto min-w-[200px]"
            >
              Check Answer
            </Button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className={cn(
              "mt-6 p-4 rounded-xl flex items-start gap-3",
              isCorrect
                ? "bg-green-500/10 text-green-800 dark:text-green-300"
                : "bg-red-500/10 text-red-800 dark:text-red-300",
            )}
          >
            {isCorrect ? (
              <Check className="w-5 h-5 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-bold mb-1">{isCorrect ? "Correct!" : "Not quite."}</p>
              <p className="text-sm opacity-90">{question.explanation}</p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
});
