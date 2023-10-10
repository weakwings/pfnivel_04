import DashboardNav from "../DashboardNav";
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import backgroundImage from "../../assets/bg.jpg";

const Bitacoras = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/bitacoras");
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
    const formattedDate = new Date(inputDate).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return formattedDate;
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
            <span className="font-semibold">Admin / Bitacoras</span>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-auto mt-5 ">
            <div className="w-[90%] h-16 flex justify-between items-center">
              <h2 className="font-semibold text-[20px] mb-2">Bitacoras</h2>
            </div>
            <div className="w-[90%] h-[700px] overflow-y-auto border border-[#E0E0E0] bg-white shadow-md rounded-md flex flex-col">
              <div className="flex items-center justify-between w-full h-24 px-5 py-3 text-white border bg-zinc-900">
                <div className="flex flex-col items-center justify-center">
                  <span className="font-semibold">User</span>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <span className="font-semibold">Close</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-semibold">Hour</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-semibold">Ip</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-semibold">SW</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-semibold">Browser</span>
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
                      {formatDate(e.data)} {}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-semibold text-[18px] ">{e.hora}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-semibold text-[18px] ">{e.ip}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-semibold text-[18px] ">{e.sw}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-semibold text-[18px] ">
                      {e.navegador}
                    </span>
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

export default Bitacoras;
