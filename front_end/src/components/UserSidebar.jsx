import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faLink, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faSlack } from "@fortawesome/free-brands-svg-icons";

const UserSidebar = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/paginas");
        if (!response.ok) {
          throw new Error("Error loading data");
        }
        const data = await response.json();

        const adminPages = data.filter((page) => page.tipo === "user");

        setApiData(adminPages);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  console.log(apiData);

  return (
    <aside className="w-48 h-screen p-4 bg-orange-600">
      {/* Dashboard */}
      <div className="flex items-center pt-2 pb-2 mb-4 border-b border-black">
        <Link to={apiData[0]?.url} className="flex items-center gap-2 text-black">
          <FontAwesomeIcon icon={faSlack} className="w-6 h-6" />
          <span className="font-semibold text-white">Dashboard</span>
        </Link>
      </div>

      {/* Usuários */}
      <div className="flex items-center pt-6 mb-4">
        <Link to={apiData[1]?.url} className="flex items-center gap-2 text-black">
          <FontAwesomeIcon icon={faUsers} className="w-6 h-6" />
          <span className="font-semibold text-white">
            {apiData[1]?.nome ? apiData[1]?.nome : "..."}
          </span>
        </Link>
      </div>

      {/* Enlaces */}
      <div className="flex items-center mb-4">
        <Link to={apiData[2]?.url} className="flex items-center gap-2 text-black">
          <FontAwesomeIcon icon={faLink} className="w-6 h-6" />
          <span className="font-semibold text-white">
            {apiData[2]?.nome ? apiData[2]?.nome : "..."}
          </span>
        </Link>
      </div>

      {/* Historial */}
      <div className="flex items-center">
        <Link to={apiData[3]?.url} className="flex items-center gap-2 text-black">
          <FontAwesomeIcon icon={faAddressCard} className="w-6 h-6" />
          <span className="font-semibold text-white">
            {apiData[3]?.nome ? apiData[3]?.nome : "..."}
          </span>
        </Link>
      </div>
    </aside>
  );
};

export default UserSidebar;
