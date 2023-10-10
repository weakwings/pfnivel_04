import DashboardNav from "../DashboardNav";
import Sidebar from "../Sidebar";
import backgroundImage from "../../assets/bg.jpg";

const Parameters = () => {
  return (
    <div className="flex flex-col w-screen h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <DashboardNav link={"/admin/profile"} />
      <div className="flex w-full h-full">
        <div className="w-[25%] max-w-[300px] h-full">
          <Sidebar />
        </div>
        <div className="z-10 w-full h-full p-2">
          <div className="flex items-center justify-end w-full h-12 px-3 text-white">
            <span className="font-semibold">Admin / Parameters</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parameters;
