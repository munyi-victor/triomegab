"use client";

import CustomButton from "@/components/CustomButton";

const MpesaPayment = () => {
  const payNow = () => {};

  return (
    <div className="h-full lg:h-[84vh] p-3 pb-[42.5vh]">
      <h1 className="font-semibold text-xl">Paying via M-pesa</h1>

      <div className="mt-4">
        <form action="" className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1 text-left">
            <label
              htmlFor="mobile number"
              className="text-sm font-medium text-gray-700"
            >
              Mobile number:
            </label>
            <input
              type="number"
              placeholder="07xxxxxxxx or o1xxxxxxxx"
              required
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col space-y-1 text-left">
            <label
              htmlFor="amount"
              className="text-sm font-medium text-gray-700"
            >
              Amount:
            </label>
            <input
              type="number"
              placeholder="10 100 1000 ..."
              required
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-center">
            <CustomButton
              value="Pay now"
              customClass="secondary"
              type="submit"
              handleClick={payNow}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MpesaPayment;
