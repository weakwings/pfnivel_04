import DashboardNav from "../DashboardNav";
import UserSidebar from "../UserSidebar";

const UserEnlaces = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <DashboardNav profileLink={"/user/profile"} />
      <div className="flex w-full h-full">
        <div className="w-[25%] max-w-[300px] h-full">
          <UserSidebar />
        </div>
        <div className="z-10 flex flex-col w-full h-full p-2">
          <div className="flex items-center justify-end w-full h-12 px-3">
            <span className="font-semibold">User / Enlaces</span>
          </div>

          <div className="flex justify-center w-full h-16 mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default UserEnlaces;
