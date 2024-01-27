import PlanForm from "./pages/PlanForm";
import SidebarMobile from "./components/SidebarMobile";
import UserForm from "./pages/UserForm";
import useMultiStepForm from "./components/useMultiStepForm"
import AddonForm from "./pages/AddonForm";
import Finish from "./pages/Finish";

function App() {
  const { step, isFirstStep, isLastStep, nextStep, prevStep } = useMultiStepForm([
    <UserForm />,
    <PlanForm />,
    <AddonForm />,
    <Finish />
  ]);

  return (
    <>
      <div className="bg-[#EFF5FF] min-h-screen flex flex-col justify-between">
        <div>
          <SidebarMobile />
          {step}
        </div>
          <div style={{ justifyContent: isFirstStep ? 'flex-end' : 'space-between' }} className="flex flex-row items-center bg-white h-[72px] px-4 w-[100%]">
            {!isFirstStep && <button className="bg-[#022959] rounded-[4px] px-4 py-3 text-white" type="button" onClick={prevStep}>Go Back</button>}
            <button className="bg-[#022959] rounded-[4px] px-4 py-3 text-white" type="button" onClick={nextStep}>{isLastStep ? "Confirm" : "Next Step"}</button>
          </div>
      </div>
    </>
  )
}

export default App
