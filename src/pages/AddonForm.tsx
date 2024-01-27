


const AddonForm = () => {

  return (
    <>
      <section className="flex flex-col font-ubuntu bg-white px-6 py-8 max-w-[343px] rounded-[10px] mx-auto mb-6 -mt-[70px]">
        <div className="flex flex-col">
          <h2 className="text-[24px] text-[#022959] font-bold">Pick add-ons</h2>
          <p className="text-[#9699AA] leading-[25px] text-[16px]">Add-ons help enhance your gaming experience.</p>
        </div>
        <form className="flex flex-col gap-y-3 mt-[22px]">
          <label 
            className="flex flex-row items-center justify-between border border-[#D6D9E6] rounded-[8px] px-4 py-3" 
            htmlFor="online_service">
            <div className="flex flex-row gap-x-4 items-center">
              <input 
                className="h-[20px] w-[20px] rounded-4 border-[#483EFF] bg-[#483EFF] checked:bg-white" 
                id="online_service" 
                name="online_service" 
                type="checkbox" 
              />
              <div className="flex flex-col">
                <span className="text-[14px] font-medium text-[#022959]">Online service</span>
                <span className="text-[12px] text-[#9699AA]">Access to multiplayer games</span>
              </div>
            </div>
            <span className="text-[12px] leading-[20px] text-[#483EFF]">+$1/mo</span>
          </label>
          <label 
            className="flex flex-row items-center justify-between border border-[#D6D9E6] rounded-[8px] px-4 py-3" 
            htmlFor="larger_storage">
            <div className="flex flex-row gap-x-4 items-center">
              <input 
                className="h-[20px] w-[20px] rounded-4 border-[#483EFF] bg-[#483EFF] checked:bg-white" 
                id="larger_storage" 
                name="larger_storage" 
                type="checkbox" 
              />
              <div className="flex flex-col">
                <span className="text-[14px] font-medium text-[#022959]">Larger storage</span>
                <span className="text-[12px] text-[#9699AA]">Extra 1TB of cloud save</span>
              </div>
            </div>
            <span className="text-[12px] leading-[20px] text-[#483EFF]">+$2/mo</span>
          </label>
          <label 
            className="flex flex-row items-center justify-between border border-[#D6D9E6] rounded-[8px] px-4 py-3" 
            htmlFor="customizable_profile">
            <div className="flex flex-row gap-x-4 items-center">
              <input 
                className="h-[20px] w-[20px] rounded-4 border-[#483EFF] bg-[#483EFF] checked:bg-white" 
                id="customizable_profile" 
                name="customizable_profile" 
                type="checkbox" 
              />
              <div className="flex flex-col">
                <span className="text-[14px] font-medium text-[#022959]">Customizable profile</span>
                <span className="text-[12px] text-[#9699AA]">Custom theme on your profile</span>
              </div>
            </div>
            <span className="text-[12px] leading-[20px] text-[#483EFF]">+$2/mo</span>
          </label>
        </form>
      </section>
    </>
  )
};

export default AddonForm;