import { revalidatePath } from "next/cache";
import { Suspense } from "react";

const getAdvice = async () => {
  "use server";
  try {
    const res = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-store",
    });
    revalidatePath("/");
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch advice.", error);
  }
};

const MainPage = async () => {
  const advice = await getAdvice();

  console.log(advice);
  return (
    <div
      className="flex flex-col items-center justify-center gap-5 bg-[#323a49] w-11/12 rounded-lg h-[370px] sm:h-[300px] sm:py-20 pt-16 pb-10 sm:w-[500px]"
      id="container"
    >
      <div className="mt-12 sm:mt-20" id="head">
        <h2 className="text-[#52ffa8] tracking-[5px] text-xs font-extrabold">
          ADVICE #{advice?.slip.id}
        </h2>
      </div>
      <div id="body">
        {advice?.slip.advice.length >= 88 ? (
          <p className="text-[#cee3e9]  text-[24px] font-extrabold text-center px-6 md:px-10 w-full h-[200px] sm:h-[100px] md:leading-8 ">
            “{advice?.slip.advice}”
          </p>
        ) : (
          <p className="text-[#cee3e9]  text-[28px] font-extrabold text-center px-6 md:px-10 w-full h-[200px] sm:h-[100px] md:leading-8 ">
            “{advice?.slip.advice}”
          </p>
        )}
      </div>
      <div className="sm:my-3 " id="image">
        <img
          src="/images/pattern-divider-mobile.svg"
          className="sm:w-[400px]"
        />
      </div>
      <form action={getAdvice}>
        <button>
          <div
            className="bg-[#52ffa8] p-5 rounded-full hover:cursor-pointer "
            id="dice"
          >
            <img src="/images/icon-dice.svg" className="" />
          </div>
        </button>
      </form>
    </div>
  );
};

export default MainPage;
