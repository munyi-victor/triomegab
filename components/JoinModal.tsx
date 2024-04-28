import CustomButton from "./CustomButton";
import { ModalProps } from "@/types";

const JoinModal = ({closeModal}:ModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-75 flex items-center justify-center px-4"
      aria-hidden="true"
      aria-labelledby="modal-title"
      role="dialog"
    >
      <div className="relative w-full max-w-2xl md:max-w-xl mx-auto shadow rounded-xl bg-white p-4 pt-0 h-fit">

        <span onClick={closeModal} className="flex justify-end text-4xl cursor-pointer font-light hover:font-bold">&times;</span>

        <form className="flex flex-col space-y-4">
          <h1 className="font-medium text-2xl text-center">Join TriomegaB</h1>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="fname"
              className="text-sm font-medium text-gray-700 "
            >
              First Name:
            </label>
            <input
              type="text"
              id="fname"
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="lname"
              className="text-sm font-medium text-gray-700 "
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lname"
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 "
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-center"><CustomButton value="Join now" customClass="secondary" type="submit" /></div>
        </form>
      </div>
    </div>
  );
}

export default JoinModal;