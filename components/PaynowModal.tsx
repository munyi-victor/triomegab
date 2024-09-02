import { ModalProps } from "@/types";
import CustomButton from "./CustomButton";

const PaynowModal = ({ closeModal, price }: ModalProps) => {
  const payNow = () => {
    alert("A request has been sent, enter your M-Pesa pin to confirm payment.");
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-75 flex items-center justify-center px-4"
      aria-hidden="true"
      aria-labelledby="modal-title"
      role="dialog"
    >
      <div className="relative w-full max-w-2xl md:max-w-xl mx-auto shadow rounded-xl bg-white px-4 pb-4 h-fit">
        <span
          onClick={closeModal}
          className="flex justify-end text-3xl cursor-pointer font-light hover:font-bold"
        >
          &times;
        </span>

        <div>
          <p>Pay via M-Pesa</p>

          <div>
            <form className="flex flex-col space-y-4">
              <div>
                <label
                  htmlFor="amount"
                  className="text-sm font-medium text-gray-700"
                >
                  Amount:{" "}
                </label>
                <input
                  type="number"
                  value={price}
                  readOnly
                  className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="phone_number"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone number:{" "}
                </label>
                <input
                  type="number"
                  value={""}
                  placeholder="07xxxxxxxx or 01xxxxxxxx"
                  className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
                />
              </div>

              <div className="flex justify-center">
                <CustomButton
                  value="Confirm payment"
                  customClass="secondary"
                  type="submit"
                  handleClick={payNow}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaynowModal;
