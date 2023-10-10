import DashboardNav from "../DashboardNav";
import EditProfile from "../EditProfile";
import ProfileCard from "../ProfileCard";
import UserSidebar from "../UserSidebar";
import { useState } from "react";

const UsuarioProfile = () => {
  const [Profile, setProfile] = useState(true);

  const handleProfile = () => setProfile(!Profile);

  return (
    <div className="flex flex-col w-screen h-screen">
      <DashboardNav profileLink={"/user/Profile"} />
      <div className="flex w-full h-full">
        <div className="w-[25%] max-w-[300px] h-full">
          <UserSidebar />
        </div>
        <div className="z-10 flex flex-col w-full h-full p-2">
          <div className="flex items-center justify-end w-full h-12 px-3">
            <span className="font-semibold">User / Profile</span>
          </div>
          {Profile ? (
            <ProfileCard handleProfile={handleProfile} />
          ) : (
            <EditProfile handleProfile={handleProfile} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UsuarioProfile;
