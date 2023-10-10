import { useState, useEffect } from "react";
import DashboardNav from "../DashboardNav";
import Sidebar from "../Sidebar";
import RolesModal from "../Modals/RolesModal";
import backgroundImage from "../../assets/bg.jpg";

const Roles = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/roles");
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

  console.log(formatDate("2023-10-30T20:49:03.000000Z"));
  return (
    <div className="flex flex-col w-screen h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <DashboardNav link={"/admin/profile"} />
      <div className="flex w-full h-full">
        <div className="w-[25%] max-w-[300px] h-full">
          <Sidebar />
        </div>
        <div className="z-10 flex flex-col w-full h-full p-2">
          <div className="flex items-center justify-end w-full h-12 px-3">
            <span className="font-semibold">User / Profile</span>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-auto mt-5 ">
            <div className="w-[75%] h-16 flex justify-between items-center">
              <h2 className="font-semibold text-[20px] mb-2">Roles</h2>
              <RolesModal />
            </div>
            <div className="w-[75%] h-auto border border-[#E0E0E0] bg-white shadow-md rounded-md flex flex-col">
              {apiData.map((e, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between w-full h-24 px-5 border"
                >
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-semibold underline">Rol</span>
                    <span className="font-semibold text-[18px]">{e.rol}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <span className="font-semibold underline">
                      Creation date
                    </span>
                    <span className="font-semibold text-[18px] ">
                      {formatDate(e.created_at)}
                    </span>
                  </div>
                  <div className="flex gap-2">
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

export default Roles;
