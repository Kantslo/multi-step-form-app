import PlanForm from "./components/PlanForm";
import SidebarMobile from "./components/SidebarMobile";
import UserForm from "./components/UserForm";
import useMultiStepForm from "./components/useMultiStepForm"

function App() {

  const { step, isFirstStep, isLastStep, nextStep, prevStep } = useMultiStepForm([
    <UserForm />,
    <PlanForm />
  ]);

  return (
    <>
      <div className="bg-[#EFF5FF] min-h-screen flex flex-col">
        <SidebarMobile />
          {step}
          <div style={{ justifyContent: isFirstStep ? 'flex-end' : 'space-between' }} className="flex flex-row items-center bg-white h-[72px] px-4 absolute bottom-0 left-0 w-[100%]">
            {!isFirstStep && <button className="bg-[#022959] rounded-[4px] px-4 py-3 text-white" type="button" onClick={prevStep}>Go Back</button>}
            <button className="bg-[#022959] rounded-[4px] px-4 py-3 text-white" type="button" onClick={nextStep}>{isLastStep ? "Confirm" : "Next Step"}</button>
          </div>
      </div>
    </>
  )
}

export default App
