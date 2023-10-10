import PropTypes from "prop-types";

const EditProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto mt-5">
      <div className="w-[75%] h-[680px] border border-[#E0E0E0] bg-white shadow-md rounded-md flex flex-col">
        <div className="w-full border-b-[1px] flex items-center justify-between border-[#E0E0E0] h-32 px-5">
          <div className="flex flex-col justify-center h-full ">
            <h2 className="text-[24px] font-semibold">
              Edit Personal Information
            </h2>
            <span className="text-[#828282]">
              The changes will be reflected in all services.
            </span>
          </div>
        </div>

        <div className="w-full border-b-[1px] flex items-center  border-[#E0E0E0] h-28 px-5">
          <span className="font-semibold text-[#BDBDBD] mr-28 w-[80px]">
            Photo
          </span>

          <div className="p-2 rounded-md bg-zinc-700">
            
          </div>
        </div>

        <div className="w-full border-b-[1px] flex flex-col justify-center  border-[#E0E0E0] h-24 gap-1 px-5">
          <span className="font-semibold text-[14px] mr-28 w-[80px]">
            Name(s)
          </span>
          <input
            type="text"
            className="h-12 w-[80%] rounded-md border px-3"
            placeholder="Enter your name"
            name="name"
          />
        </div>

        <div className="w-full border-b-[1px] flex flex-col justify-center  border-[#E0E0E0] h-24 gap-1 px-5">
          <span className="font-semibold text-[14px] mr-28 w-[80px]">
            Last name(s)
          </span>
          <input
            type="text"
            className="h-12 w-[80%] rounded-md border px-3"
            placeholder="Enter your last name"
            name="last name"
          />
        </div>

        <div className="w-full border-b-[1px] flex flex-col justify-center  border-[#E0E0E0] h-24 gap-1 px-5">
          <span className="font-semibold text-[14px] mr-28 w-[80px]">User</span>
          <input
            type="text"
            className="h-12 w-[80%] rounded-md border px-3"
            placeholder="Enter your new user"
            name="user"
          />
        </div>

        <div className="w-full border-b-[1px] flex flex-col justify-center  border-[#E0E0E0] h-24 gap-1 px-5">
          <span className="font-semibold text-[14px] mr-28 w-[80px]">
            Password
          </span>
          <input
            type="text"
            className="h-12 w-[80%] rounded-md border px-3"
            placeholder="Enter your new password"
            name="password"
          />
        </div>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  handleProfile: PropTypes.func.isRequired,
};

export default EditProfile;
