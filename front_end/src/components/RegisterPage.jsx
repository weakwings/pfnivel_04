import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import github from "../assets/Gihub.svg";
import google from "../assets/Google.svg";
import twitter from "../assets/Twitter.svg";
import facebook from "../assets/Facebook.svg";
import devlogo from "../assets/devchallenges.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    senha: "",
    habilitado: true,
    idrol: 1,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        formData
      );

      const responseData = response.data;

      console.log(responseData.usuario);

      localStorage.setItem("userData", JSON.stringify(responseData));

      const storedUserData = localStorage.getItem("userData");

      const userData = JSON.parse(storedUserData);

      await redirect(userData);
    } catch (error) {
      console.error(error);
    }
  };

  const redirect = async (userData) => {
    if (userData.usuario) {
      await navigate("/userdashboard");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-[473.831px] rounded-[24px] border-[2px] p-8 flex flex-col items-center gap-10">
        <div className="w-[90%]  h-[20px]">
          <img src={devlogo} alt="devchallenges-logo" />
        </div>
        <div className="w-[90%] flex flex-col gap-5  ">
          <h1 className="text-xl font-[900]">
            Join thousands of learners from around the world{" "}
          </h1>
          <p className="text-sm">
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </p>
        </div>
        <form onSubmit={handleSubmit} className=" w-[90%] flex flex-col gap-5">
          <div className="relative flex flex-col gap-2">
            <span className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              className="border border-[#BDBDBD] w-[356.481px] h-[48px] rounded-[8px] pl-10 text-sm"
              type="text"
              name="usuario"
              placeholder="Username"
              value={formData.usuario}
              onChange={handleChange}
            />
          </div>

          <div className="relative flex flex-col gap-2">
            <span className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              className="border border-[#BDBDBD] w-[356.481px] h-[48px] rounded-[8px] pl-10 text-sm"
              type="password"
              name="senha"
              placeholder="Password"
              value={formData.senha}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <input
              className="h-[38px] w-[356.481px] rounded-[8px] bg-[#2F80ED] hover:bg-blue-300 text-white font-semibold cursor-pointer"
              type="submit"
              name="name"
              value="Register"
            />
          </div>
        </form>

        <div className=" w-[90%] flex flex-col items-center mb-14">
          <p className="mb-5">or continue with these social profile</p>
          <div className="flex justify-center gap-5 w-[70%] ">
            <img src={google} alt="google-icon" />
            <img src={facebook} alt="facebook-icon" />
            <img src={twitter} alt="twitter-icon" />
            <img src={github} alt="github-icon" />
          </div>
          <p className="mt-4">
            Aldready a member?{" "}
            <Link to="/" className="text-blue-400 cursor-pointer">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
