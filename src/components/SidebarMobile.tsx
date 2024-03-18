import { Link } from "react-router-dom";

import usePageNumStore from "../store/page-num-store";

const SidebarMobile = () => {
  const { Number, setPage } = usePageNumStore();

  return (
    <>
      <div className="bg-mobileBar bg-no-repeat bg-cover h-[10.75rem]">
        <div className="flex flex-row items-center justify-center gap-4 pt-[2rem]">
          <Link
            style={{
              backgroundColor: Number === 1 ? "#BEE2FD" : "",
              color: Number === 1 ? "#022959" : "",
              border: Number === 1 ? "none" : "",
            }}
            onClick={() => setPage(1)}
            className={`font-[0.875rem] text-white font-bold border border-white rounded-full w-[2.063rem] h-[2.063rem] flex items-center justify-center`}
            to="/user">
            1
          </Link>
          <Link
            style={{
              backgroundColor: Number === 2 ? "#BEE2FD" : "",
              color: Number === 2 ? "#022959" : "",
              border: Number === 2 ? "none" : "",
            }}
            onClick={() => setPage(2)}
            className={`font-[0.875rem] text-white font-bold border border-white rounded-full w-[2.063rem] h-[2.063rem] flex items-center justify-center`}
            to="/plan">
            2
          </Link>
          <Link
            style={{
              backgroundColor: Number === 3 ? "#BEE2FD" : "",
              color: Number === 3 ? "#022959" : "",
              border: Number === 3 ? "none" : "",
            }}
            onClick={() => setPage(3)}
            className={`font-[0.875rem] text-white font-bold border border-white rounded-full w-[2.063rem] h-[2.063rem] flex items-center justify-center`}
            to="/addons">
            3
          </Link>
          <Link
            style={{
              backgroundColor: Number === 4 ? "#BEE2FD" : "",
              color: Number === 4 ? "#022959" : "",
              border: Number === 4 ? "none" : "",
            }}
            onClick={() => setPage(4)}
            className={`font-[0.875rem] text-white font-bold border border-white rounded-full w-[2.063rem] h-[2.063rem] flex items-center justify-center`}
            to="/finish">
            4
          </Link>
        </div>
      </div>
    </>
  );
};

export default SidebarMobile;
