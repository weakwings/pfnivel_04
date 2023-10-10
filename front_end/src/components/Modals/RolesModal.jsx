import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import axios from "axios";

export default function RolesModal() {
  let [isOpen, setIsOpen] = useState(false);
  const [rol, setRol] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/roles", {
        rol,
      });

      console.log("Rol created:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error while create an user:", error);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center ">
        <button
          type="button"
          onClick={openModal}
          className="p-2 px-3 font-semibold text-white border rounded-md bg-zinc-700"
        >
          Create Rol
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
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create New Rol
                  </Dialog.Title>
                  <div className="w-full mt-2">
                    <form className="w-full" action="" onSubmit={handleSubmit}>
                      <div className="flex flex-col w-full gap-1">
                        <span className="font-semibold underline">Rol</span>
                        <input
                          className="h-10 px-3 border rounded-md"
                          type="text"
                          placeholder="Rol Name"
                          onChange={(e) => setRol(e.target.value)}
                        />
                      </div>
                      <div className="flex gap-3 mt-4">
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
                          Create
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
