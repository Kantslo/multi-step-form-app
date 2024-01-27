

const UserForm = () => {

  return (
    <>
      <section className="flex flex-col font-ubuntu bg-white px-6 py-8 max-w-[343px] rounded-[10px] mx-auto mb-6 -mt-[70px]">
        <div className="flex flex-col">
          <h2 className="text-[24px] text-[#022959] font-bold">Personal info</h2>
          <p className="text-[#9699AA] leading-[25px] text-[16px]">Please provide your name, email address, and phone number.</p>
        </div>
        <form className="flex flex-col gap-4 mt-[22px]">
          <div className="flex flex-col">
            <label className="text-[12px] text-[#022959]" htmlFor="name">Name</label>
            <input
              className="placeholder:text-[#9699AA] placeholder:font-medium placeholder:text-[15px] border border-[#D6D9E6] rounded-[4px] bg-white px-4 py-[11px]"
              placeholder="e.g. Stephen King"
              autoFocus
              type="text"
              id="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[12px] text-[#022959]" htmlFor="email">Email address</label>
            <input
              className="placeholder:text-[#9699AA] placeholder:font-medium placeholder:text-[15px] border border-[#D6D9E6] rounded-[4px] bg-white px-4 py-[11px]"
              placeholder="e.g. stephenking@lorem.com"
              type="text"
              id="email"
            />
          </div>
          <div className="flex flex-col items">
            <label className="text-[12px] text-[#022959]" htmlFor="phone">Phone</label>
            <input
              className="placeholder:text-[#9699AA] placeholder:font-medium placeholder:text-[15px] border border-[#D6D9E6] rounded-[4px] bg-white px-4 py-[11px]"
              placeholder="e.g. +1 234 567 890"
              type="text"
              id="phone"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default UserForm;
