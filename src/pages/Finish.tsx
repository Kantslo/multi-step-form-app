import { Link } from "react-router-dom";

import usePageNumStore from "../store/page-num-store";
import SidebarMobile from "../components/SidebarMobile";

const Finish = () => {
  const { setPage } = usePageNumStore();

  return (
    <>
      <SidebarMobile />
      <section className="flex flex-col font-ubuntu bg-white px-6 py-8 max-w-[21.44rem] rounded-[0.625rem] mx-auto mb-6 -mt-[4.375rem]">
        <div className="flex flex-col">
          <h2 className="text-[1.5rem] text-[#022959] font-bold">
            Finishing up
          </h2>
          <p className="text-[#9699AA] leading-[1.56rem] text-[1rem]">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <div className="bg-[#F8F9FF] rounded-[8px] flex flex-col p-4 mt-[22px]">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[14px] text-[#022959] font-medium">
                Arcade (Monthly)
              </span>
              <Link
                onClick={() => setPage(2)}
                to="/plan"
                className="text-[14px] text-[#9699AA] leading-[20px] underline">
                Change
              </Link>
            </div>
            <span className="text-[#022959] text-[14px] font-bold leading-[20px]">
              $9/mo
            </span>
          </div>
          <span className="block w-full h-px bg-[#9699AA] px-4 opacity-20 my-3"></span>
          <div className="flex flex-row justify-between">
            <span className="text-[#9699AA] text-[14px] leading-[20px]">
              Online service
            </span>
            <span className="text-[#022959] text-[14px] leading-[20px]">
              +$1/mo
            </span>
          </div>
          <div className="flex flex-row justify-between mt-3">
            <span className="text-[#9699AA] text-[14px] leading-[20px]">
              Larger storage
            </span>
            <span className="text-[#022959] text-[14px] leading-[20px]">
              +$2/mo
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-between px-4 mt-6">
          <span className="text-[#9699AA] text-[14px] leading-[20px]">
            Total (per month)
          </span>
          <span className="text-[16px] text-[#483EFF] leading-[20px] font-bold">
            +$12/mo
          </span>
        </div>
      </section>
    </>
  );
};

export default Finish;
