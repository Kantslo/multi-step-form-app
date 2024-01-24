import { ReactElement, useState } from "react";


const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const nextStep = () => {
    setCurrentStepIndex(prev => {
      if (prev >= steps.length - 1) return prev;
      return prev + 1;
    })
  };

  const prevStep = () => {
    setCurrentStepIndex(prev => {
      if (prev <= 0) return prev;
      return prev - 1;
    })
  };

  const goToStep = (step: number) => {
    setCurrentStepIndex(step);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    nextStep,
    prevStep,
    goToStep,
  }
};

export default useMultiStepForm;