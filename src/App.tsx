import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import useMultiStepForm from "./components/useMultiStepForm"



function App() {
  const { steps, currentStepIndex, step } = useMultiStepForm([
    <StepOne />,
    <StepTwo />
  ]);

  return (
    <>
      <div>
          {step}
      </div>
    </>
  )
}

export default App
