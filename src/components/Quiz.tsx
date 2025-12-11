
import { useEffect, useState } from "react";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctIndex: 1,
  },
  {
    id: 2,
    question: "What would you probably find in your fridge?",
    options: ["Shoes", "Ice Cream", "Books"],
    correctIndex: 1,
  },
  {
    id: 3,
    question: "What color are bananas?",
    options: ["Blue", "Yellow", "Red"],
    correctIndex: 1,
  },
  {
    id: 4,
    question: "How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred"],
    correctIndex: 1,
  },
];

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(QUESTIONS.length).fill(null)
  );

  const currentQuestion = QUESTIONS[currentIndex];
  const totalQuestions = QUESTIONS.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  useEffect(() => {
    setSelectedOption(answers[currentIndex]);
  }, [currentIndex, answers]);

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers];
    newAnswers[currentIndex] = selectedOption;
    setAnswers(newAnswers);

    if (selectedOption === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
    setAnswers(new Array(QUESTIONS.length).fill(null));
  };

  if (isFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-sky-200 via-blue-200 to-sky-300 relative overflow-hidden">
        {/* Cloud decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-16 bg-white rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-40 h-20 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-48 h-24 bg-white rounded-full blur-xl"></div>
        </div>

        <div className="relative bg-gradient-to-br from-sky-100/90 to-blue-100/90 backdrop-blur-md rounded-[40px] shadow-2xl px-8 py-16 max-w-2xl w-full text-center">
          <button className="mb-8 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-slate-700 shadow-md hover:shadow-lg transition-shadow">
            Keep Learning!
          </button>

          <p className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'DM Serif Display, serif', color: '#15313D' }}>
            Your Final score is
          </p>

          <div className="flex items-center justify-center gap-3 mb-12">
            <span 
              className="text-8xl md:text-9xl font-bold"
              style={{ 
                fontFamily: 'DM Serif Display, serif',
                background: 'linear-gradient(135deg, #15313D 0%, #3CABDA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {percentage}
            </span>
            <span 
              className="text-5xl md:text-6xl"
              style={{ 
                fontFamily: 'DM Serif Display, serif',
                color: '#3CABDA'
              }}
            >
              %
            </span>
          </div>

          <button
            onClick={handleRestart}
            className="rounded-full px-10 py-3 text-white font-medium shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #3CABDA 0%, #15313D 100%)'
            }}
          >
            Start Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-sky-200 via-blue-200 to-sky-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 bg-white rounded-3xl p-6 shadow-xl max-w-[200px] hidden lg:block">
        <div className="relative">
          <div className="bg-sky-100 rounded-2xl px-4 py-2 mb-4 inline-block">
            <p className="text-slate-800 font-medium text-sm">Best of Luck !</p>
          </div>
          <div className="w-24 h-24 mx-auto">
            <svg viewBox="0 0 100 120" className="w-full h-full">
              <ellipse cx="50" cy="100" rx="35" ry="15" fill="#ffc0cb" opacity="0.3"/>
              <circle cx="50" cy="60" r="30" fill="#fff" stroke="#ffc0cb" strokeWidth="2"/>
              <circle cx="35" cy="45" r="12" fill="#ffc0cb" opacity="0.6"/>
              <circle cx="65" cy="45" r="12" fill="#ffc0cb" opacity="0.6"/>
              <circle cx="50" cy="70" r="18" fill="#ffc0cb" opacity="0.8"/>
              <circle cx="42" cy="62" r="6" fill="#ffc0cb"/>
              <circle cx="58" cy="62" r="6" fill="#ffc0cb"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="relative bg-white/90 backdrop-blur-md rounded-[40px] shadow-2xl px-6 md:px-16 py-12 md:py-16 max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-5xl md:text-7xl lg:text-[90px] leading-tight mb-4"
            style={{
              fontFamily: 'DM Serif Display, serif',
              background: 'linear-gradient(135deg, #15313D 0%, #3CABDA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Test Your Knowledge
          </h1>
          <p className="text-slate-600 text-sm md:text-base">
            Answer all questions to see your results
          </p>
        </div>

        {/* Progress bars */}
        <div className="flex gap-2 mb-8 justify-center max-w-2xl mx-auto">
          {QUESTIONS.map((_, idx) => (
            <div
              key={idx}
              className="h-1.5 rounded-full flex-1 transition-all duration-300"
              style={{
                background: idx <= currentIndex
                  ? 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)'
                  : '#e2e8f0'
              }}
            />
          ))}
        </div>

        {/* Question box */}
        <div 
          className="rounded-[32px] px-6 md:px-12 py-6 md:py-8 mb-8 text-center"
          style={{ backgroundColor: 'rgba(60, 171, 218, 0.15)' }}
        >
          <p 
            className="text-lg md:text-xl font-medium"
            style={{ color: '#15313D' }}
          >
            {currentIndex + 1}. {currentQuestion.question}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-8 max-w-2xl mx-auto">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === index;
            return (
              <button
                key={option}
                onClick={() => setSelectedOption(index)}
                className="w-full rounded-[28px] px-6 md:px-10 py-4 md:py-5 text-base md:text-lg text-left transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: isSelected 
                    ? 'rgba(60, 171, 218, 0.2)'
                    : 'rgba(255, 255, 255, 0.8)',
                  border: isSelected 
                    ? '2px solid #3CABDA'
                    : '2px solid rgba(226, 232, 240, 0.5)',
                  color: '#1e293b',
                  boxShadow: isSelected 
                    ? '0 4px 12px rgba(60, 171, 218, 0.3)'
                    : '0 2px 8px rgba(0, 0, 0, 0.05)'
                }}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-end gap-3 max-w-2xl mx-auto">
          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-sky-100 hover:bg-sky-200 shadow-md flex items-center justify-center text-slate-700 text-xl transition-all hover:scale-110"
              aria-label="Previous question"
            >
              ←
            </button>
          )}

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className="rounded-full px-8 py-3 text-white font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 enabled:hover:shadow-xl"
            style={{
              background: selectedOption !== null
                ? 'linear-gradient(135deg, #3CABDA 0%, #15313D 100%)'
                : '#cbd5e1'
            }}
          >
            {currentIndex === totalQuestions - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}