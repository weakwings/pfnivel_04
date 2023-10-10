import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import axios from "axios";

UsuarioEdit.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  rol: PropTypes.number.isRequired,
  estado: PropTypes.number.isRequired,
};

export default function UsuarioEdit({ id, user, password, rol, estado }) {
  let [isOpen, setIsOpen] = useState(false);
  const [usuario, setUsername] = useState(user);
  const [senha, setPassword] = useState(password);
  const [idrol, setRol] = useState(rol);
  const [habilitado, setHabilitado] = useState(estado);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/usuarios/${id}`,
        {
          usuario,
          senha,
          habilitado,
          idrol,
        }
      );

      if (response.status === 200) {
        console.log("Success");
        window.location.reload();
      } else {
        console.error("Error to edit user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center ">
        <button
          type="button"
          onClick={openModal}
          className="w-20 p-2 px-3 font-semibold text-white bg-blue-500 border rounded-md"
        >
          Edit
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="p-5 text-3xl font-bold leading-6 text-gray-900"
                  >
                    Edit User
                  </Dialog.Title>
                  <div className="w-full mt-2">
                    <form className="w-full" action="" onSubmit={handleSubmit}>
                      <div className="flex flex-col w-full gap-1 pb-5">
                        <span className="font-semibold underline">User</span>
                        <input
                          className="h-10 px-3 border rounded-md"
                          type="text"
                          placeholder="Rol Name"
                          onChange={(e) => setUsername(e.target.value)}
                          value={usuario}
                        />
                      </div>
                      <div className="flex flex-col w-full gap-1 pb-5">
                        <span className="font-semibold underline">Password</span>
                        <input
                          className="h-10 px-3 border rounded-md"
                          type="password"
                          placeholder="Rol Name"
                          onChange={(e) => setPassword(e.target.value)}
                          value={senha}
                        />
                      </div>

                      <div className="flex flex-col w-full gap-1 pb-5">
                        <span className="font-semibold underline">Rol</span>
                        <select
                          className="h-10 px-3 border rounded-md"
                          onChange={(e) => setRol(e.target.value)}
                          value={rol}
                        >
                          <option value={1}>Admin</option>
                          <option value={2}>User</option>
                        </select>
                      </div>

                      <div className="flex flex-col w-full gap-1 pb-5">
                        <span className="font-semibold underline">State</span>
                        <select
                          className="h-10 px-3 border rounded-md"
                          onChange={(e) => setHabilitado(e.target.value)}
                          value={habilitado}
                        >
                          <option value={1}>Asset</option>
                          <option value={0}>Idle</option>
                        </select>
                      </div>
                      <div className="flex justify-center gap-10 mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Cancel
                        </button>

                        <button
                          type="submit"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
