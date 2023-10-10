import DashboardNav from "../DashboardNav";
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import UsuarioModal from "../Modals/UsuarioModal";
import UsuarioEdit from "../Modals/UsuarioEdit";
import UsuarioDelete from "../Modals/UsuarioDelete";
import backgroundImage from "../../assets/bg.jpg";

const Usuarios = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/usuarios");
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }
        const data = await response.json();

        setApiData(data);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchData();
  }, []);

  function formatDate(inputDate) {
    const dataFormatada = new Date(inputDate).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return dataFormatada;
  }

  return (
    <div
      className="flex flex-col w-screen h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <DashboardNav link={"/admin/profile"} />
      <div className="flex w-full h-full">
        <div className="w-[25%] max-w-[300px] h-full">
          <Sidebar />
        </div>
        <div className="z-10 w-full h-full p-2">
          <div className="flex items-center justify-end w-full h-12 px-3">
            <span className="font-semibold text-white">Admin / User</span>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-auto mt-5">
            <div className="w-[75%] h-16 flex justify-between items-center">
              <h2 className="font-semibold text-[20px] mb-2">User</h2>
              <UsuarioModal />
            </div>
            <div className="w-[85%] h-[700px] overflow-y-auto border border-[#E0E0E0] bg-white shadow-md rounded-md flex flex-col">
              <div className="flex items-center justify-between w-full h-24 px-5 py-3 text-white border bg-zinc-900">
                <div className="flex flex-col items-center justify-center">
                  <span className="font-semibold underline">User</span>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <span className="font-semibold underline">Creation date</span>
                </div>

                <div className="flex flex-col justify-center">
                  <span className="font-semibold underline">state</span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-semibold underline w-[160px]">
                    Actions
                  </span>
                </div>
              </div>

              {apiData.map((e, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between w-full h-24 px-5 py-3 border"
                >
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-semibold text-[18px]">
                      {e.usuario}
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <span className="font-semibold text-[18px] ">
                      {formatDate(e.created_at)}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center">
                    <button
                      className={`p-1 px-3 font-semibold text-white ${
                        e.habilitado === 1 ? "bg-green-500" : "bg-orange-500"
                      } border rounded-md`}
                    >
                      {e.habilitado === 1 ? "Enabled" : "Disabled"}
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <UsuarioEdit
                      id={e.id}
                      estado={e.habilitado}
                      rol={e.idrol}
                      user={e.usuario}
                      password={e.senha}
                    />
                    <UsuarioDelete id={e.id} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
