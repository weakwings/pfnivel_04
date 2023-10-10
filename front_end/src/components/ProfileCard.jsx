import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PerfilCard = () => {
  const navigate = useNavigate();

  const handlePerfil = () => {
    navigate("/EditProfile");
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen mt-5">
      <h2 className="font-semibold text-[25px] text-zinc-700 mb-3">
        Personal information
      </h2>

      <span className="mb-5 font-semibold">
        Basic information, such as your name and photo.
      </span>
      <div className="w-[75%] h-[640px] border border-[#E0E0E0] bg-white shadow-md rounded-md flex flex-col">
        <div className="w-full border-b-[1px] flex items-center justify-between border-[#E0E0E0] h-32 px-5">
          <div className="flex flex-col justify-center h-full ">
            <h2 className="text-[24px] font-semibold">Profile</h2>
            <span className="text-[#828282]">
              Some information may be visible to other people.
            </span>
          </div>
          <button
            onClick={handlePerfil}
            className="border border-[#828282] rounded-[12px] w-[95px] h-[38px] text-[#828282] font-semibold hover:shadow-md"
          >
            Edit
          </button>
        </div>

        <div className="w-full border-b-[1px] flex items-center  border-[#E0E0E0] h-28 px-5">
          <span className="font-semibold text-[#BDBDBD] mr-28 w-[80px]">
            Photo
          </span>

          <div className="p-2 rounded-md bg-zinc-700">xxx</div>
        </div>

        <div className="w-full border-b-[1px] flex items-center  border-[#E0E0E0] h-20 px-5">
          <span className="font-semibold text-[#BDBDBD] mr-28 w-[80px]">
            Name(s)
          </span>
          <span className="font-semibold">xxx</span>
        </div>

        <div className="w-full border-b-[1px] flex items-center  border-[#E0E0E0] h-20 px-5">
          <span className="font-semibold text-[#BDBDBD] mr-28 w-[80px]">
            Last Name(s)
          </span>
          <span className="font-semibold">xxx</span>
        </div>

        <div className="w-full border-b-[1px] flex items-center  border-[#E0E0E0] h-20 px-5">
          <span className="font-semibold text-[#BDBDBD] mr-28 w-[80px]">
            Rol
          </span>
          <span className="font-semibold">xxx</span>
        </div>

        <div className="w-full border-b-[1px] flex items-center  border-[#E0E0E0] h-20 px-5">
          <span className="font-semibold text-[#BDBDBD] mr-28 w-[80px]">
            User
          </span>
          <span className="font-semibold">xxx</span>
        </div>

        <div className="w-full border-b-[1px] flex items-center  border-[#E0E0E0] h-20 px-5">
          <span className="font-semibold text-[#BDBDBD] mr-28 w-[80px]">
            Password
          </span>
          <span className="font-semibold">*************</span>
        </div>
      </div>
    </div>
  );
};

PerfilCard.propTypes = {
  handlePerfil: PropTypes.func.isRequired,
};

export default PerfilCard;
