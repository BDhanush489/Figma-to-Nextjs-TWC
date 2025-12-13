"use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// type Question = {
//   id: number;
//   question: string;
//   options: string[];
//   correctIndex: number; // still single correct — multi-select is allowed but correctness is still single-answer
// };

// const QUESTIONS: Question[] = [
//   {
//     id: 1,
//     question: "What sound does a cat make?",
//     options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
//     correctIndex: 1,
//   },
//   {
//     id: 2,
//     question: "What would you probably find in your fridge?",
//     options: ["Shoes", "Ice Cream", "Books"],
//     correctIndex: 1,
//   },
//   {
//     id: 3,
//     question: "What color are bananas?",
//     options: ["Blue", "Yellow", "Red"],
//     correctIndex: 1,
//   },
//   {
//     id: 4,
//     question: "How many stars are in the sky?",
//     options: ["Two", "Infinite", "One Hundred"],
//     correctIndex: 1,
//   },
// ];

// export default function Quiz() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [isFinished, setIsFinished] = useState(false);

//   // CHANGE: answers now stores arrays for multi-select
//   const [answers, setAnswers] = useState<number[][]>(
//     new Array(QUESTIONS.length).fill(0).map(() => [])
//   );

//   // CHANGE: selectedOption is now an array
//   const [selectedOption, setSelectedOption] = useState<number[]>([]);

//   const [displayPercentage, setDisplayPercentage] = useState(0);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [animatingToScore, setAnimatingToScore] = useState(false);

//   const currentQuestion = QUESTIONS[currentIndex];
//   const totalQuestions = QUESTIONS.length;
//   const percentage = Math.round((score / totalQuestions) * 100);

//   // Animate percentage counter when finished
//   useEffect(() => {
//     if (isFinished) {
//       setDisplayPercentage(0);
//       setShowConfetti(false);

//       const duration = 2000;
//       const steps = 60;
//       const increment = percentage / steps;
//       const stepDuration = duration / steps;

//       let current = 0;
//       const timer = setInterval(() => {
//         current += increment;
//         if (current >= percentage) {
//           setDisplayPercentage(percentage);
//           setShowConfetti(true);
//           clearInterval(timer);
//         } else {
//           setDisplayPercentage(Math.round(current));
//         }
//       }, stepDuration);

//       return () => clearInterval(timer);
//     }
//   }, [isFinished, percentage]);

//   // ✔ Restore selection when navigating back
//   useEffect(() => {
//     setSelectedOption(answers[currentIndex] || []);
//   }, [currentIndex, answers]);

//   // ✔ ALWAYS compute score correctly from answers
//   useEffect(() => {
//     let newScore = 0;

//     QUESTIONS.forEach((q, i) => {
//       const correct = q.correctIndex;
//       const selected = answers[i];

//       // multi-select allowed, but correct if user selected only the right index
//       if (selected.length === 1 && selected[0] === correct) {
//         newScore++;
//       }
//     });

//     setScore(newScore);
//   }, [answers]); // recompute score every time answers change

//   // ---------- FIXED handleNext ----------
//   const handleNext = () => {
//     if (selectedOption.length === 0) return; // require at least one selection

//     const newAnswers = [...answers];
//     newAnswers[currentIndex] = [...selectedOption]; // save selections
//     setAnswers(newAnswers);

//     // move to next
//     if (currentIndex < totalQuestions - 1) {
//       setCurrentIndex((prev) => prev + 1);
//       setSelectedOption([]); // reset selection for next question
//     } else {
//       setAnimatingToScore(true);
//       setTimeout(() => {
//         setIsFinished(true);
//         setAnimatingToScore(false);
//       }, 1200);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   const handleRestart = () => {
//     setCurrentIndex(0);
//     setSelectedOption([]);
//     setScore(0);
//     setIsFinished(false);
//     setAnswers(new Array(QUESTIONS.length).fill(0).map(() => []));
//     setDisplayPercentage(0);
//     setShowConfetti(false);
//   };


//   if (isFinished) {
//     return (
//       <div className="min-h-screen flex items-center justify-center p-4 bg-[#F4FDFF] relative overflow-hidden">

//         {/* Cloud decoration */}
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-10 left-10 w-32 h-16 bg-white rounded-full blur-xl"></div>
//           <div className="absolute top-40 right-20 w-40 h-20 bg-white rounded-full blur-xl"></div>
//           <div className="absolute bottom-20 left-1/4 w-48 h-24 bg-white rounded-full blur-xl"></div>
//         </div>

//         {/* Confetti Animation */}
//         {showConfetti && (
//           <div className="absolute inset-0 pointer-events-none overflow-hidden">
//             {[...Array(50)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute animate-confetti"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   top: '-10%',
//                   animationDelay: `${Math.random() * 3}s`,
//                   animationDuration: `${3 + Math.random() * 2}s`,
//                 }}
//               >
//                 <div
//                   className="w-3 h-3 rounded-sm"
//                   style={{
//                     backgroundColor: ['#3CABDA', '#15313D', '#60a5fa', '#fbbf24', '#f87171'][
//                       Math.floor(Math.random() * 5)
//                     ],
//                     transform: `rotate(${Math.random() * 360}deg)`,
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         )}

//         <div
//           className="relative bg-transparent rounded-[40px] px-6 py-42 max-w-6xl w-full text-center transform transition-all duration-500"
//           style={{
//             animation: 'popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
//           }}>
//           <button className="mb-10 rounded-[10px] bg-transparent px-5 py-2 text-xs font-medium text-slate-700 shadow-md hover:shadow-lg transition-shadow">
//             Keep Learning!
//           </button>

//           <p className="text-xl md:text-4xl mb-4" style={{
//             fontFamily: 'DM Serif Display, serif',
//             background: 'linear-gradient(135deg, #15313D 0%, #3CABDA 100%)',
//             WebkitBackgroundClip: 'text',
//             fontStyle: "italic",
//             WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text'
//           }}>
//             Your Final score is
//           </p>

//           <div className="flex items-center justify-center gap-2 mb-14">
//             <span
//               className="text-7xl md:text-8xl font-bold transition-all duration-300"
//               style={{
//                 fontFamily: 'DM Serif Display, serif',
//                 background: 'linear-gradient(135deg, #15313D 0%, #3CABDA 100%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//                 transform: showConfetti ? 'scale(1.1)' : 'scale(1)',
//               }}
//             >
//               {displayPercentage}
//             </span>
//             <span
//               className="text-4xl md:text-5xl"
//               style={{
//                 fontFamily: 'DM Serif Display, serif',
//                 color: '#3CABDA'
//               }}
//             >
//               %
//             </span>
//           </div>

//           <button
//             onClick={handleRestart}
//             className="rounded-[10px] px-8 py-2.5 text-sm text-black font-medium shadow-xl hover:shadow-xl transition-all hover:scale-105"
//             style={{
//               background: 'linear-gradient(90deg, #C6E9F7 0%, #E5F8FF 100%)'
//             }}
//           >
//             Start Again
//           </button>
//         </div>

//         <style jsx>{`
//           @keyframes confetti {
//             0% {
//               transform: translateY(-10vh) rotate(0deg);
//               opacity: 1;
//             }
//             100% {
//               transform: translateY(100vh) rotate(720deg);
//               opacity: 0;
//             }
//           }

//           @keyframes popIn {
//             0% {
//               transform: scale(0.8);
//               opacity: 0;
//             }
//             50% {
//               transform: scale(1.05);
//             }
//             100% {
//               transform: scale(1);
//               opacity: 1;
//             }
//           }

//           .animate-confetti {
//             animation: confetti linear forwards;
//           }
//         `}</style>
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.2 }}
//       className="min-h-screen flex items-center justify-center p-4 bg-[linear-gradient(135deg,#BECFEE_0%,#71C6E2_50%,#D9F4FA_75%,#BECFEE_100%)] relative overflow-hidden">

//       <motion.div
//         initial={{ x: -900, y: 0, opacity: 0 }}
//         animate={
//           animatingToScore
//             ? { y: -900, x: 0, opacity: 0 }
//             : { x: 0, opacity: 1 }
//         }
//         transition={{ duration: 1.2, ease: "easeOut" }}
//         className="relative bg-transparent backdrop-blur-2xl rounded-[50px] shadow-[0_0_60px_20px_rgba(255,255,255,0.15)] px-6 py-6 max-w-6xl w-full border border-white/60"
//         style={{
//           boxShadow: `
//             0 0 80px 30px rgba(190, 207, 238, 0.4),
//             0 0 60px 20px rgba(113, 198, 226, 0.5),
//             0 0 40px 15px rgba(217, 244, 250, 0.4),
//             inset 0 0 60px 10px rgba(255, 255, 255, 0.3)
//           `
//         }}

//       >

//         <motion.div
//           initial={{ y: -900, x: 0, opacity: 0 }}   // start above
//           transition={{ duration: 1.2, ease: "easeIn" }}
//           animate={animatingToScore ? { y: -900, x: 0, opacity: 0 } : { y: 0, opacity: 1 }}
//           className="relative backdrop-blur-md rounded-[42px] px-6 py-6 max-w-6xl w-full bg-[#F4FDFF]" >

//           <div className="absolute bottom-6 left-6 bg-white rounded-3xl p-4 max-w-[180px] hidden lg:block">

//             <div className="relative">
//               <div className="absolute bottom-22 left-[-30] -translate-x-1/2 translate-y-1/2 w-[133.45px] h-[143.45px]">
//                 {/* Replace with your GIF - put it in /public folder as cat-paw.gif */}
//                 <img
//                   src="/Group.png"
//                   alt="Cat paw animation"
//                   className="w-full h-full object-contain"
//                   onError={(e) => {
//                     // Fallback SVG if GIF not found
//                     e.currentTarget.style.display = 'none';
//                     e.currentTarget.nextElementSibling?.classList.remove('hidden');
//                   }}
//                 />

//               </div>

//               <div className="absolute bottom-[17] left-15 -translate-x-1/2 translate-y-1/2 
//                   w-[113.45px] h-[113.45px]">
//                 {/* Replace with your GIF - put it in /public folder as cat-paw.gif */}
//                 <img
//                   src="/cat-paw.gif"
//                   alt="Cat paw animation"
//                   className="w-full h-full object-contain"
//                   onError={(e) => {
//                     // Fallback SVG if GIF not found
//                     e.currentTarget.style.display = 'none';
//                     e.currentTarget.nextElementSibling?.classList.remove('hidden');
//                   }}
//                 />

//               </div>

//             </div>
//           </div>
//           {/* Header */}
//           <div className="text-center mb-8">
//             <h1
//               className="text-4xl md:text-5xl lg:text-6xl leading-tight mt-3 mb-3"
//               style={{
//                 fontFamily: 'DM Serif Display, serif',
//                 background: 'linear-gradient(135deg, #15313D 0%, #3CABDA 100%)',
//                 WebkitBackgroundClip: 'text',
//                 fontStyle: "italic",
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text'
//               }}
//             >
//               Test Your Knowledge
//             </h1>
//             <p className="text-slate-600 text-s  bg-white inline-block px-3 py-2 rounded-[10px]" style={{ fontFamily: '"Manrope", sans-serif' }}>
//               Answer all questions to see your results
//             </p>
//           </div>

//           {/* Progress bars */}
//           <div className="flex gap-2 mb-6 justify-center max-w-xl mx-auto">
//             {QUESTIONS.map((_, idx) => (
//               <div
//                 key={idx}
//                 className="h-1 rounded-full flex-1 transition-all duration-300"
//                 style={{
//                   background: idx <= currentIndex
//                     ? 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)'
//                     : '#e2e8f0'
//                 }}
//               />
//             ))}
//           </div>

//           {/* Question box */}
//           <div
//             className="rounded-[10px] max-w-xl px-6 py-4 mb-3 text-center justify-center mx-auto"
//             style={{
//               background: 'linear-gradient(90deg, #C6E9F7 0%, #E5F8FF 100%)',
//               border: '1px solid #96E5FF',
//             }}
//           >
//             <p
//               className="text-lg md:text-xl font-semibold"
//               style={{
//                 color: '#15313D',
//                 fontFamily: 'Inter, serif',
//                 fontSize: '15px',
//                 opacity: 1
//               }}
//             >
//               {currentIndex + 1}. {currentQuestion.question}
//             </p>
//           </div>

//           {/* Options */}
//           <div className=" mb-6 max-w-xl mx-auto text-center">
//             {currentQuestion.options.map((option, index) => {
//               const isSelected = selectedOption.includes(index);

//               return (
//                 <button
//                   key={option}

//                   onClick={() => {
//                     setSelectedOption(prev => {
//                       if (prev.includes(index)) {
//                         // unselect
//                         return prev.filter(i => i !== index);
//                       } else {
//                         // select multiple allowed
//                         return [...prev, index];
//                       }
//                     });
//                   }}

//                   className="w-full rounded-[10px] px-6 py-4 mb-3 text-base md:text-lg transition-all duration-200 text-center font-semibold"
//                   style={{
//                     fontFamily: 'Inter, serif',
//                     fontSize: '15px',
//                     background: isSelected
//                       ? 'linear-gradient(90deg, #C6E9F7 0%, #E5F8FF 100%)'
//                       : 'rgba(255, 255, 255, 0.8)',
//                     border: '1px solid #96E5FF',
//                     color: '#1e293b',
//                     cursor: 'pointer'
//                   }}

//                   onMouseEnter={(e) => {
//                     if (!isSelected) {
//                       e.currentTarget.style.background = 'linear-gradient(90deg, rgba(198,233,247,0.5) 0%, rgba(229,248,255,0.5) 100%)';
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     if (!isSelected) {
//                       e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
//                     }
//                   }}
//                 >
//                   {option}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Navigation */}
//           <div className="flex items-center justify-end gap-2 max-w-xl mx-auto">
//             {currentIndex > -1 && currentIndex < totalQuestions - 1 && (
//               <div className="flex items-center gap-3">
//                 {/* Previous Button */}
//                 {currentIndex > -1 && (
//                   <button
//                     onClick={handlePrevious}
//                     disabled={currentIndex === 0}
//                     aria-label="Previous question"
//                     className={`w-[50px] h-[50px] flex items-center justify-center rounded-[10px] shadow-md transition transform ${currentIndex === 0
//                       ? 'opacity-40 cursor-not-allowed bg-white/20'
//                       : 'bg-[linear-gradient(0deg,#C6E9F7_0%,#E5F8FF_100%)] hover:scale-105'
//                       }`}
//                   >
//                     <img src="/arrow_backward.png" className="text-2xl" alt="arrow" />
//                   </button>
//                 )}


//               </div>

//             )}

//             {/* NEXT or SUBMIT BUTTON */}
//             {currentIndex < totalQuestions - 1 ? (
//               // NORMAL NEXT BUTTON
//               <button
//                 onClick={handleNext}
//                 disabled={selectedOption.length === 0}
//                 className={`
//                     w-[50px] h-[50px]
//                     flex items-center justify-center
//                     rounded-[10px]
//                     transition shadow-md
//                     ${selectedOption.length > 0
//                     ? "bg-[linear-gradient(0deg,#C6E9F7_0%,#E5F8FF_100%)] hover:scale-105"
//                     : "bg-[#E8EDF1] opacity-50 cursor-not-allowed"}`}>

//                 <img src="/arrow_forward.png" className="text-2xl" alt="arrow" />
//               </button>

//             ) : (
//               // FINAL SUBMIT BUTTON
//               <button
//                 onClick={handleNext}
//                 disabled={selectedOption.length === 0}
//                 className={`
//                   px-7 h-[50px]
//                   flex items-center justify-center
//                   rounded-[10px] text-black 
//                   transition shadow-md text-sm
//                   font-semibold
//                   ${selectedOption.length > 0
//                     ? "bg-[linear-gradient(0deg,#C6E9F7_0%,#E5F8FF_100%)]"
//                     : "bg-[#E8EDF1] opacity-50 cursor-not-allowed"}`}
//                 style={{
//                   fontFamily: 'Inter, serif'
//                 }}>
//                 Submit
//               </button>
//             )}

//           </div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number; // still single correct — multi-select is allowed but correctness is still single-answer
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
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // CHANGE: answers now stores arrays for multi-select
  const [answers, setAnswers] = useState<number[][]>(
    new Array(QUESTIONS.length).fill(0).map(() => [])
  );

  // CHANGE: selectedOption is now an array
  const [selectedOption, setSelectedOption] = useState<number[]>([]);

  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [animatingToScore, setAnimatingToScore] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];
  const totalQuestions = QUESTIONS.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  // Animate percentage counter when finished
  useEffect(() => {
    if (isFinished) {
      setDisplayPercentage(0);
      setShowConfetti(false);

      const duration = 2000;
      const steps = 60;
      const increment = percentage / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= percentage) {
          setDisplayPercentage(percentage);
          setShowConfetti(true);
          clearInterval(timer);
        } else {
          setDisplayPercentage(Math.round(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isFinished, percentage]);

  // ✔ Restore selection when navigating back
  useEffect(() => {
    setSelectedOption(answers[currentIndex] || []);
  }, [currentIndex, answers]);

  // ✔ ALWAYS compute score correctly from answers
  useEffect(() => {
    let newScore = 0;

    QUESTIONS.forEach((q, i) => {
      const correct = q.correctIndex;
      const selected = answers[i];

      // multi-select allowed, but correct if user selected only the right index
      if (selected.length === 1 && selected[0] === correct) {
        newScore++;
      }
    });

    setScore(newScore);
  }, [answers]); // recompute score every time answers change

  // ---------- FIXED handleNext ----------
  const handleNext = () => {
    if (selectedOption.length === 0) return; // require at least one selection

    const newAnswers = [...answers];
    newAnswers[currentIndex] = [...selectedOption]; // save selections
    setAnswers(newAnswers);

    // move to next
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption([]); // reset selection for next question
    } else {
      setAnimatingToScore(true);
      setTimeout(() => {
        setIsFinished(true);
        setAnimatingToScore(false);
      }, 1200);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption([]);
    setScore(0);
    setIsFinished(false);
    setAnswers(new Array(QUESTIONS.length).fill(0).map(() => []));
    setDisplayPercentage(0);
    setShowConfetti(false);
  };


  if (isFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[#F4FDFF] relative overflow-hidden">

        {/* Cloud decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-16 bg-white rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-40 h-20 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-48 h-24 bg-white rounded-full blur-xl"></div>
        </div>

        {/* Confetti Animation */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '-10%',
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{
                    backgroundColor: ['#3CABDA', '#15313D', '#60a5fa', '#fbbf24', '#f87171'][
                      Math.floor(Math.random() * 5)
                    ],
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              </div>
            ))}
          </div>
        )}

        <div
          className="relative bg-transparent rounded-[40px] px-6 py-42 max-w-6xl w-full text-center transform transition-all duration-500"
          style={{
            animation: 'popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
          }}>
          <button className="mb-10 rounded-[10px] bg-transparent px-5 py-2 text-xs font-medium text-slate-700 shadow-md hover:shadow-lg transition-shadow">
            Keep Learning!
          </button>

          <p className="text-xl md:text-4xl mb-4" style={{
            fontFamily: 'DM Serif Display, serif',
            background: 'linear-gradient(135deg, #15313D 0%, #3CABDA 100%)',
            WebkitBackgroundClip: 'text',
            fontStyle: "italic",
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Your Final score is
          </p>

          <div className="flex items-center justify-center gap-2 mb-14">
            <span
              className="text-7xl md:text-8xl font-bold transition-all duration-300"
              style={{
                fontFamily: 'DM Serif Display, serif',
                background: 'linear-gradient(135deg, #15313D 0%, #3CABDA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transform: showConfetti ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              {displayPercentage}
            </span>
            <span
              className="text-4xl md:text-5xl"
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
            className="rounded-[10px] px-8 py-2.5 text-sm text-black font-medium shadow-xl hover:shadow-xl transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #C6E9F7 0%, #E5F8FF 100%)'
            }}
          >
            Start Again
          </button>
        </div>

        <style jsx>{`
          @keyframes confetti {
            0% {
              transform: translateY(-10vh) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(720deg);
              opacity: 0;
            }
          }
          
          @keyframes popIn {
            0% {
              transform: scale(0.8);
              opacity: 0;
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          .animate-confetti {
            animation: confetti linear forwards;
          }
        `}</style>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen flex items-center justify-center p-4 bg-[linear-gradient(135deg,#BECFEE_0%,#71C6E2_50%,#D9F4FA_75%,#BECFEE_100%)] relative overflow-hidden">

      <motion.div
        initial={{ x: -900, y: 0, opacity: 0 }}
        animate={
          animatingToScore
            ? { y: -900, x: 0, opacity: 0 }
            : { x: 0, opacity: 1 }
        }
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative bg-transparent backdrop-blur-2xl rounded-[50px] shadow-[0_0_60px_20px_rgba(255,255,255,0.15)] px-6 py-6 max-w-6xl w-full border border-white/60"
        style={{
          boxShadow: `
            0 0 80px 30px rgba(190, 207, 238, 0.4),
            0 0 60px 20px rgba(113, 198, 226, 0.5),
            0 0 40px 15px rgba(217, 244, 250, 0.4),
            inset 0 0 60px 10px rgba(255, 255, 255, 0.3)
          `
        }}

      >

        <motion.div
          initial={{ y: -900, x: 0, opacity: 0 }}   // start above
          transition={{ duration: 1.2, ease: "easeIn" }}
          animate={animatingToScore ? { y: -900, x: 0, opacity: 0 } : { y: 0, opacity: 1 }}
          className="relative backdrop-blur-md rounded-[42px] px-6 py-6 max-w-6xl w-full bg-[#F4FDFF]" >

          <div className="absolute bottom-6 left-6 bg-white rounded-3xl p-4 max-w-[180px] hidden lg:block">

            <div className="relative">
              <div className="absolute bottom-22 left-[-30] -translate-x-1/2 translate-y-1/2 w-[133.45px] h-[143.45px]">
                {/* Replace with your GIF - put it in /public folder as cat-paw.gif */}
                <img
                  src="/Group.png"
                  alt="Cat paw animation"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback SVG if GIF not found
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />

              </div>

              <div className="absolute bottom-[17] left-15 -translate-x-1/2 translate-y-1/2 
                  w-[113.45px] h-[113.45px]">
                {/* Replace with your GIF - put it in /public folder as cat-paw.gif */}
                <img
                  src="/cat-paw.gif"
                  alt="Cat paw animation"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback SVG if GIF not found
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />

              </div>

            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl leading-tight mt-3 mb-3"
              style={{
                fontFamily: 'DM Serif Display, serif',
                background: 'linear-gradient(135deg, #15313D 0%, #3CABDA 100%)',
                WebkitBackgroundClip: 'text',
                fontStyle: "italic",
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Test Your Knowledge
            </h1>
            <p className="text-slate-600 text-s  bg-white inline-block px-3 py-2 rounded-[10px]" style={{ fontFamily: '"Manrope", sans-serif' }}>
              Answer all questions to see your results
            </p>
          </div>

          {/* Progress bars */}
          <div className="flex gap-2 mb-6 justify-center max-w-xl mx-auto">
            {QUESTIONS.map((_, idx) => (
              <div
                key={idx}
                className="h-1 rounded-full flex-1 transition-all duration-300"
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
            className="rounded-[10px] max-w-xl px-6 py-4 mb-3 text-center justify-center mx-auto"
            style={{
              background: 'linear-gradient(90deg, #C6E9F7 0%, #E5F8FF 100%)',
              border: '1px solid #96E5FF',
            }}
          >
            <p
              className="text-lg md:text-xl font-semibold"
              style={{
                color: '#15313D',
                fontFamily: 'Inter, serif',
                fontSize: '15px',
                opacity: 1
              }}
            >
              {currentIndex + 1}. {currentQuestion.question}
            </p>
          </div>

          {/* Options */}
          <div className=" mb-6 max-w-xl mx-auto text-center">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedOption.includes(index);

              return (
                <button
                  key={option}

                  onClick={() => {
                    setSelectedOption(prev => {
                      if (prev.includes(index)) {
                        // unselect
                        return prev.filter(i => i !== index);
                      } else {
                        // select multiple allowed
                        return [...prev, index];
                      }
                    });
                  }}

                  className="w-full rounded-[10px] px-6 py-4 mb-3 text-base md:text-lg transition-all duration-200 text-center font-semibold"
                  style={{
                    fontFamily: 'Inter, serif',
                    fontSize: '15px',
                    background: isSelected
                      ? 'linear-gradient(90deg, #C6E9F7 0%, #E5F8FF 100%)'
                      : 'rgba(255, 255, 255, 0.8)',
                    border: '1px solid #96E5FF',
                    color: '#1e293b',
                    cursor: 'pointer'
                  }}

                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = 'linear-gradient(90deg, rgba(198,233,247,0.5) 0%, rgba(229,248,255,0.5) 100%)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                    }
                  }}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-end gap-2 max-w-xl mx-auto">
            {currentIndex > -1 && currentIndex < totalQuestions - 1 && (
              <div className="flex items-center gap-3">
                {/* Previous Button */}
                {currentIndex > -1 && (
                  <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    aria-label="Previous question"
                    className={`w-[50px] h-[50px] flex items-center justify-center rounded-[10px] shadow-md transition transform ${currentIndex === 0
                      ? 'opacity-40 cursor-not-allowed bg-white/20'
                      : 'bg-[linear-gradient(0deg,#C6E9F7_0%,#E5F8FF_100%)] hover:scale-105'
                      }`}
                  >
                    <img src="/arrow_backward.png" className="text-2xl" alt="arrow" />
                  </button>
                )}

              </div>

            )}

            {/* NEXT or SUBMIT BUTTON */}
            {currentIndex < totalQuestions - 1 ? (
              // NORMAL NEXT BUTTON
              <button
                onClick={handleNext}
                className={`
                    w-[50px] h-[50px]
                    flex items-center justify-center
                    rounded-[10px]
                    transition shadow-md
                    bg-[linear-gradient(0deg,#C6E9F7_0%,#E5F8FF_100%)]
                    hover:scale-105
                   `}>

                <img src="/arrow_forward.png" className="text-2xl" alt="arrow" />
              </button>

            ) : (

              // FINAL SUBMIT BUTTON
              <button
                onClick={handleNext}
                // disabled={selectedOption.length === 0}
                className={`
                  px-7 h-[50px]
                  flex items-center justify-center
                  rounded-[10px] text-black 
                  transition shadow-md text-sm
                  font-semibold
                  bg-[linear-gradient(0deg,#C6E9F7_0%,#E5F8FF_100%)] hover:scale-105
                  `}
                style={{
                  fontFamily: 'Inter, serif'
                }}>
                Submit
              </button>
            )}

          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}