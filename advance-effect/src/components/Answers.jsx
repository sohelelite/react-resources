import { useRef } from "react";

export default function answer(answers, selectedAnswer, answerState, onSelect) {
  const shuffledAnswer = useRef();

  if (!shuffledAnswer.current) {
    shuffledAnswer.current = answers;
    shuffledAnswer.current.answers.sort((a, b) => {
      Math.random() - 0.5;
    });
  }

  return (
    <ul id="answers">
      {shuffledAnswer.current.answers.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              //   disabled={answerState !== "" || answerState !== undefined}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
