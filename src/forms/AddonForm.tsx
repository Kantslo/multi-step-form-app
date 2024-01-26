


const AddonForm = () => {

  return (
    <>
      <section className="flex flex-col justify-center font-ubuntu bg-white px-6 py-8 max-w-[343px] rounded-[10px] mx-auto -mt-[63px] mb-6">
        <div className="flex flex-col">
          <h2 className="text-[24px] text-[#022959] font-bold">Pick add-ons</h2>
          <p className="text-[#9699AA] leading-[25px] text-[16px]">Add-ons help enhance your gaming experience.</p>
        </div>
        <form className="flex flex-col gap-y-3 mt-[22px]">
          <label className="flex flex-row items-center justify-between" htmlFor="">
            <input type="checkbox" />
            <div className="flex flex-col">
              <span>Online service</span>
              <span>Access to multiplayer games</span>
            </div>
            <span>+$1/mo</span>
          </label>
        </form>
      </section>
    </>
  )
};

export default AddonForm;