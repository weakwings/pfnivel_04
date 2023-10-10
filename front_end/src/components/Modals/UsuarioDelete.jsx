import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import axios from "axios";

export default function UsuarioDelete({ id }) {
  let [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/usuarios/${id}`);
      closeModal();
      window.location.reload();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center justify-center ">
        <button
          type="button"
          onClick={openModal}
          className="p-2 px-3 font-semibold text-white bg-red-500 border rounded-md"
        >
          Delete
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
                    className="pb-4 text-xl font-bold leading-6 text-gray-900"
                  >
                    Are you sure you want to delete this user?
                  </Dialog.Title>
                  <div className="flex justify-center gap-10 mt-4">
                    <button
                      onClick={closeModal}
                      className="p-2 px-3 font-semibold text-white border rounded-md bg-zinc-900"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDelete}
                      className="p-2 px-3 font-semibold text-white bg-red-500 border rounded-md"
                    >
                      Delete
                    </button>
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

UsuarioDelete.propTypes = {
  id: PropTypes.number.isRequired,
};
