import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata:Metadata = {
  title:"Touch a Life",
  description:"This is how you donate to the TriomegaB Hearts of Passion Foundation."
}

const TouchLife = () => {
  return (
    <div className="h-full lg:h-[84vh] py-3 px-2">
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
          <p className="mb-3">
            You can also send monetary donations through the following various
            methods:
          </p>

          <div className="flex lg:flex-row flex-col gap-4 lg:gap-10 lg:mt-10 px-6">
            <div className="flex flex-col items-center rounded border shadow-md p-2">
              <Link href={"/donate/payment/mpesa"}>
                <h1 className="hover:underline">M-pesa</h1>

                <Image
                  src={"/mpesa.png"}
                  alt="m-pesa"
                  height={150}
                  width={150}
                  className="rounded h-[130px] w-[150px] mb-1"
                />
              </Link>
            </div>

            <div className="flex flex-col items-center rounded border shadow-md p-2">
              <Link href={"/donate/payment/paypal"}>
                <h1 className="hover:underline">PayPal</h1>

                <Image
                  src={"/paypal.png"}
                  alt="paypal"
                  height={150}
                  width={150}
                  className="rounded h-[120px] w-[150px] mb-1 p-3"
                />
              </Link>
            </div>

            <div className="flex flex-col items-center rounded border shadow-md p-2">
              <Link href={"/donate/payment/payless"}>
                <h1 className="hover:underline">Payless</h1>

                <Image
                  src={"/payless.png"}
                  alt="paypal"
                  height={150}
                  width={150}
                  className="rounded h-[130px] w-[150px] mb-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouchLife;
