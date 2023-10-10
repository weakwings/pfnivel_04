import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import github from "../assets/Gihub.svg";
import google from "../assets/Google.svg";
import twitter from "../assets/Twitter.svg";
import facebook from "../assets/Facebook.svg";
import devlogo from "../assets/devchallenges.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setsenha] = useState("");
  const navigate = useNavigate();

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handlesenhaChange = (event) => {
    setsenha(event.target.value);
  };

  const handleRedirection = (idrol) => {
    if (idrol === 1) {
      return navigate("/admindashboard");
    } else if (idrol === 2) {
      return navigate("/userdashboard");
    }
  };

  const handleLoginSuccess = async (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/bitacoras", {
        idusuario: userData.usuario.id,
        usuario: userData.usuario.usuario,
      });

      const bitacoraData = response.data;

      console.log(bitacoraData);
      console.log(userData.usuario.idrol);

      handleRedirection(userData.usuario.idrol);
    } catch (error) {
      console.error("Error registering the bitácora:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        usuario: usuario,
        senha: senha,
      });

      const responseData = response.data;

      console.log(responseData.usuario.idrol);

      if (responseData.success) {
        handleLoginSuccess(responseData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-[473.831px] rounded-[24px] border-[2px] p-8 flex flex-col items-center gap-10">
        <div className="w-[90%]  h-[20px]">
          <img src={devlogo} alt="devchallenges-logo" />
        </div>
        <div className="w-[90%] flex flex-col gap-5  ">
          <h1 className="text-xl font-[900]">Login </h1>
        </div>
        <form onSubmit={handleSubmit} className=" w-[90%] flex flex-col gap-5">
          <div className="flex flex-col gap-2 pb-4">
            <div className="relative pb-4 ">
              <span className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-6">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                className="border border-[#BDBDBD] w-[356.481px] h-[48px] rounded-[8px] pl-10 text-sm"
                type="text"
                name="usuario"
                value={usuario}
                onChange={handleUsuarioChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="relative">
              <span className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                className="border border-[#BDBDBD] w-[356.481px] h-[48px] rounded-[8px] pl-10 text-sm"
                type="password"
                name="senha"
                value={senha}
                onChange={handlesenhaChange}
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <input
              className="h-[38px] w-[356.481px] rounded-[8px] bg-[#2F80ED] hover:bg-blue-300 text-white font-semibold cursor-pointer"
              type="submit"
              name="login"
              value="Login"
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
            Don’t have an account yet?{" "}
            <Link to="/register" className="text-blue-400 cursor-pointer">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
