import IconAdvanced from "../components/ui/IconAdvanced";
import IconArcade from "../components/ui/IconArcade";
import IconPro from "../components/ui/IconPro";
import { useState } from "react";


const PlanForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [plan, setPlan] = useState("arcade");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
        <section className="flex flex-col font-ubuntu bg-white px-6 py-8 max-w-[343px] rounded-[10px] mx-auto mb-6 -mt-[70px]">
          <div className="flex flex-col">
            <h2 className="text-[24px] text-[#022959] font-bold">Select your plan</h2>
            <p className="text-[#9699AA] leading-[25px] text-[16px]">You have the option of monthly or yearly billing.</p>
          </div>
          <form className="flex flex-col gap-4 mt-[22px]">
            <label 
              style={{ border: plan === "arcade" ? "1px solid #483EFF" : "", background: plan === "arcade" ? "#F8F9FF" : "" }} 
              className="flex flex-row items-center px-4 py-4 rounded-[8px] border border-[#D6D9E6]">
              <IconArcade />
              <input
                className="invisible"
                onChange={() => setPlan("arcade")}
                checked={plan === "arcade"}
                type="checkbox"
              />
              <div className="flex flex-col">
                <span className="text-[#022959] font-medium text-[16px]">Arcade</span>
                <span className="text-[#9699AA] text-[12px] leading-[20px]">$9/mo</span>
              </div>
            </label>
            <label 
              style={{ border: plan === "advanced" ? "1px solid #483EFF" : "", background: plan === "advanced" ? "#F8F9FF" : "" }} 
              className="flex flex-row items-center px-4 py-4 rounded-[8px] border border-[#D6D9E6]">
              <IconAdvanced />
              <input
                className="invisible"
                onChange={() => setPlan("advanced")}
                checked={plan === "advanced"}
                type="checkbox"
              />
              <div className="flex flex-col">
                <span className="text-[#022959] font-medium text-[16px]">Advanced</span>
                <span className="text-[#9699AA] text-[12px] leading-[20px]">$12/mo</span>
              </div>
            </label>
            <label 
              style={{ border: plan === "pro" ? "1px solid #483EFF" : "", background: plan === "pro" ? "#F8F9FF" : ""}} 
              className="flex flex-row items-center px-4 py-4 rounded-[8px] border border-[#D6D9E6]">
              <IconPro />
              <input
                className="invisible"
                onChange={() => setPlan("pro")}
                checked={plan === "pro"}
                type="checkbox"
              />
              <div className="flex flex-col">
                <span className="text-[#022959] font-medium text-[16px]">Pro</span>
                <span className="text-[#9699AA] text-[12px] leading-[20px]">$15/mo</span>
              </div>
            </label>
            <div className="flex flex-row items-center justify-evenly py-[14px] bg-[#F8F9FF] rounded-[8px] mt-6">
              <span style={{ color: isChecked ? "" : "#022959" }} className="block text-[14px] font-medium text-[#9699AA]">Monthly</span>
              <label className='flex cursor-pointer select-none items-center'>
                <div className='relative'>
                  <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className='sr-only'
                  />
                  <span className='block h-[20px] w-[38px] rounded-full bg-[#022959]'></span>
                  <span style={{ translate: isChecked ? '18px' : ''}} className='absolute left-1 top-1 h-3 w-3 rounded-full bg-white transition'></span>
                </div>
              </label>
              <span style={{ color: isChecked ? "#022959" : "" }} className="block text-[14px] font-medium text-[#9699AA]">Yearly</span>
            </div>
          </form>
        </section>
    </>
  );
};

export default PlanForm;