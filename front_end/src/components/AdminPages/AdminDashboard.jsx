import DashboardNav from "../DashboardNav";
import Sidebar from "../Sidebar";
import backgroundImage from "../../assets/bg.jpg"; 

const AdminDashboard = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <DashboardNav link={"/admin/profile"} />
      <div className="flex w-full h-full">
        <div className="w-[25%] max-w-[300px] h-full">
          <Sidebar />
        </div>
        <div className="z-10 flex flex-col w-full h-full p-2">
          <div className="flex items-center justify-end w-full h-12 px-3 text-white">
            <span className="font-semibold">Admin / Dashboard</span>
          </div>

          <div className="flex justify-center w-full h-16 mt-10">
            <div className="w-[70%] border bg-zinc-900 border-zinc-900 rounded-sm flex justify-center items-center">
              <h2 className="font-semibold text-[26px] text-white">
                Welcome Administrator !!!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
