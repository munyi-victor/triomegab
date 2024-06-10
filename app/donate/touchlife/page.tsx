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

      <div>
        To make any kind of donations, kindly contact us:
        <ul>
          <li>+254740077717</li>
          <li>+254708905136</li>
        </ul>
        <div>
          <p>
            You can also send monetary donations through the following various
            methods:
          </p>

          <div>
            <h1>M-pesa</h1>

            <Image
              src={"/mpesa.png"}
              alt="m-pesa"
              height={150}
              width={150}
              className="rounded h-[150px] w-[150px] mb-1"
            />
          </div>

          <div>
            <h1>PayPal</h1>

            <Image
              src={"/paypal.png"}
              alt="paypal"
              height={150}
              width={150}
              className="rounded h-[120px] w-[150px] mb-1 p-3"
            />
          </div>

          <div>
            <h1>Payless</h1>

            <Image
              src={"/payless.png"}
              alt="paypal"
              height={150}
              width={150}
              className="rounded h-[150px] w-[150px] mb-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouchLife;
