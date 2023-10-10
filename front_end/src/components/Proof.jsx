import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

Proof.propTypes = {
  link: PropTypes.string.isRequired,
};

export default function Proof({ link }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("User Dice");
    navigate("/");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-10 h-10 justify-center items-center gap-x-1.5 px-3 py-2 text-sm font-bold text-orange-600 shadow-sm focus:outline-none">
          <FontAwesomeIcon icon={faBars} className="w-8 h-8" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 w-40 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-2">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={link}
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900 font-bold"
                      : "text-gray-700",
                    "block px-4 py-2 text-sm font-bold"
                  )}
                >
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Profile
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900 font-bold"
                      : "text-gray-700",
                    "block w-full px-4 py-2 text-left text-sm font-bold"
                  )}
                  onClick={handleLogout}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                  Sair
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
