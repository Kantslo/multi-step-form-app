import { useNavigate } from "react-router-dom";

import usePageNumStore from "../store/page-num-store";
import SidebarMobile from "../components/SidebarMobile";
import NextStep from "../components/NextStep";
import PrevStep from "../components/PrevStep";

const AddonForm = () => {
  const { setPage } = usePageNumStore();
  const navigate = useNavigate();

  const prevStepHandler = () => {
    setPage(2);
    navigate("/plan");
  };

  const nextStepHandler = () => {
    setPage(4);
    navigate("/finish");
  };
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <div>
        <SidebarMobile />
        <section className="flex flex-col font-ubuntu bg-white px-6 py-8 max-w-[21.44rem] rounded-[0.625rem] mx-auto mb-6 -mt-[4.375rem]">
          <div className="flex flex-col">
            <h2 className="text-[1.5rem] text-[#022959] font-bold">
              Pick add-ons
            </h2>
            <p className="text-[#9699AA] leading-[1.56rem] text-[1rem]">
              Add-ons help enhance your gaming experience.
            </p>
          </div>
          <form className="flex flex-col gap-y-3 mt-[1.375rem]">
            <label
              className="flex flex-row items-center justify-between border border-[#D6D9E6] rounded-[0.5rem] px-4 py-3"
              htmlFor="online_service">
              <div className="flex flex-row items-center gap-x-4">
                <input
                  className="h-[1.25rem] w-[1.25rem] rounded-4 border-[#483EFF] bg-[#483EFF] checked:bg-white"
                  id="online_service"
                  name="online_service"
                  type="checkbox"
                />
                <div className="flex flex-col">
                  <span className="text-[0.875rem] font-medium text-[#022959]">
                    Online service
                  </span>
                  <span className="text-[0.75rem] text-[#9699AA]">
                    Access to multiplayer games
                  </span>
                </div>
              </div>
              <span className="text-[0.75rem] leading-[1.25rem] text-[#483EFF]">
                +$1/mo
              </span>
            </label>
            <label
              className="flex flex-row items-center justify-between border border-[#D6D9E6] rounded-[0.5rem] px-4 py-3"
              htmlFor="larger_storage">
              <div className="flex flex-row items-center gap-x-4">
                <input
                  className="h-[20px] w-[20px] rounded-4 border-[#483EFF] bg-[#483EFF] checked:bg-white"
                  id="larger_storage"
                  name="larger_storage"
                  type="checkbox"
                />
                <div className="flex flex-col">
                  <span className="text-[0.875rem] font-medium text-[#022959]">
                    Larger storage
                  </span>
                  <span className="text-[0.75rem] text-[#9699AA]">
                    Extra 1TB of cloud save
                  </span>
                </div>
              </div>
              <span className="text-[0.75rem] leading-[1.25rem] text-[#483EFF]">
                +$2/mo
              </span>
            </label>
            <label
              className="flex flex-row items-center justify-between border border-[#D6D9E6] rounded-[0.5rem] px-4 py-3"
              htmlFor="customizable_profile">
              <div className="flex flex-row items-center gap-x-4">
                <input
                  className="h-[1.25rem] w-[1.25rem] rounded-4 border-[#483EFF] bg-[#483EFF] checked:bg-white"
                  id="customizable_profile"
                  name="customizable_profile"
                  type="checkbox"
                />
                <div className="flex flex-col">
                  <span className="text-[0.875rem] font-medium text-[#022959]">
                    Customizable profile
                  </span>
                  <span className="text-[0.75rem] text-[#9699AA]">
                    Custom theme on your profile
                  </span>
                </div>
              </div>
              <span className="text-[0.75rem] leading-[1.25rem] text-[#483EFF]">
                +$2/mo
              </span>
            </label>
          </form>
        </section>
      </div>
      <div className="flex items-center justify-between w-full h-[4.5rem] px-4 bg-white">
        <PrevStep onClick={() => prevStepHandler()} />
        <NextStep onClick={() => nextStepHandler()} />
      </div>
    </main>
  );
};

export default AddonForm;
