import DashboardNav from "../DashboardNav";
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import backgroundImage from "../../assets/bg.jpg";

const Enlaces = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/paginas");
        if (!response.ok) {
          throw new Error("Error loading data");
        }
        const data = await response.json();

        setApiData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  function formatDate(inputDate) {
    const fechaFormateada = new Date(inputDate).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return fechaFormateada;
  }

  return (
    <div className="flex flex-col w-screen h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <DashboardNav link={"/admin/profile"} />
      <div className="flex w-full h-full">
        <div className="w-[25%] max-w-[300px] h-full">
          <Sidebar />
        </div>
        <div className="z-10 w-full h-full p-2">
          <div className="flex items-center justify-end w-full h-12 px-3 text-white">
            <span className="font-semibold">Admin / Enlaces</span>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-auto mt-5">
            <div className="w-[75%] h-16 flex justify-between items-center">
              <h2 className="font-semibold text-[20px] mb-2">Enlaces</h2>
            </div>
            <div className="w-[85%] h-[700px] overflow-y-auto border border-[#E0E0E0] bg-white shadow-md rounded-md flex flex-col">
              <div className="flex items-center justify-between w-full h-24 px-5 py-3 border bg-zinc-900">
                <div className="flex flex-col items-center justify-center w-1/5">
                  <span className="font-semibold text-white">Name</span>
                </div>

                <div className="flex flex-col items-center justify-center w-1/5">
                  <span className="font-semibold text-white">Creation date</span>
                </div>

                <div className="flex flex-col items-center justify-center w-1/5">
                  <span className="font-semibold text-white">URL</span>
                </div>

                <div className="flex flex-col justify-center w-1/5">
                  <span className="font-semibold text-white">State</span>
                </div>
                <div className="flex flex-col justify-center w-1/5">
                  <span className="w-[100px] font-semibold text-white">Actions</span>
                </div>
              </div>
              {apiData.map((e, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between w-full h-24 px-5 py-3 border"
                >
                  <div className="flex flex-col items-center justify-center w-1/5">
                    <span className="font-semibold text-[18px]">{e.nome}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center w-1/5">
                    <span className="font-semibold text-[18px] ">{formatDate(e.created_at)}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center w-1/5">
                    <span className="font-semibold text-[18px]">{e.url}</span>
                  </div>

                  <div className="flex flex-col justify-center">
                    <button className="p-1 px-3 font-semibold text-white bg-green-500 border rounded-md">
                      {e.estado === "activo" ? "Activo" : "Desactivado"}
                    </button>
                  </div>
                  <div className="flex items-center w-1/5 gap-2">
                    <button className="p-2 px-3 font-semibold text-white bg-blue-500 border rounded-md">
                      Edit
                    </button>
                    <button className="p-2 px-3 font-semibold text-white bg-red-500 border rounded-md">
                      Delete
                    </button>
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

export default Enlaces;
