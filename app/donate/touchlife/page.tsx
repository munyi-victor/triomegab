import Image from "next/image";

const TouchLife = () => {
  return (
    <div className="h-full py-3 px-2">
      <div className="text-center">
        <h1 className="font-semibold text-2xl">
          Touch a Life, Pave Blessings!
        </h1>
        <p className="text-gray-500 mb-3">
          With every kind of donations: money, clothings, etc.
        </p>
        <p>
          <i>For the hand that gives is the hand that receives...</i>
        </p>
      </div>

      <div className="text-center flex flex-col items-center mt-5">
        <p>To make any kind of donations, kindly contact us:</p>
        <ul>
          <li>+254740077717</li>
          <li>+254708905136</li>
        </ul>
        <div className="mt-4">
          <p>
            You can also send monetary donations through the following various
            methods:
          </p>

          <div className="flex flex-col items-center">
            <h1>M-pesa</h1>

            <Image
              src={"/mpesa.png"}
              alt="m-pesa"
              height={150}
              width={150}
              className="rounded h-[130px] w-[150px] mb-1"
            />
          </div>

          <div className="flex flex-col items-center">
            <h1>PayPal</h1>

            <Image
              src={"/paypal.png"}
              alt="paypal"
              height={150}
              width={150}
              className="rounded h-[120px] w-[150px] mb-1 p-3"
            />
          </div>

          <div className="flex flex-col items-center">
            <h1>Payless</h1>

            <Image
              src={"/payless.png"}
              alt="paypal"
              height={150}
              width={150}
              className="rounded h-[130px] w-[150px] mb-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouchLife;
