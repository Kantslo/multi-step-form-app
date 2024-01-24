import PlanForm from "./components/PlanForm";
import UserForm from "./components/UserForm";
import useMultiStepForm from "./components/useMultiStepForm"

function App() {

  const { step, isFirstStep, isLastStep, nextStep, prevStep } = useMultiStepForm([
    <UserForm />,
    <PlanForm />
  ]);

  return (
    <>
      <div>
          {step}
          <div>
            {!isFirstStep && <button type="button" onClick={prevStep}>Go Back</button>}
            <button type="submit" onClick={nextStep}>{isLastStep ? "Confirm" : "Next Step"}</button>
          </div>
      </div>
    </>
  )
}

export default App
