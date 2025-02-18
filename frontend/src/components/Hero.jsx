import React from "react";

import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <>
    {/* section one */}
      <section className="flex flex-col justify-center items-center mt-4">
        <h2 className="text-sm md:text-lg lg:text-2xl font-bold w-[45vw] md:w-[35vw] lg:w-[18vw] text-center">
          Organizing your day activity with Todo Daily
        </h2>
        <div className="mt-4">
          <GetStarted />
        </div>
        <img
          className="w-[50%]  mt-2"
          src="/assets/hero/4005526 1.png"
          alt=""
        />
      </section>

{/* section 2 */}
      <section className="flex flex-col justify-center items-center mt-12">
        <h2 className="text-sm md:text-lg lg:text-2xl font-bold w-[45vw] md:w-[35vw] lg:w-[18vw] text-center">
          Don't let your day end by doing nothing
        </h2>
        <div className=" flex gap-16 mt-4 p-4 justify-center">
          <div>
          <img className="w-8 " src="../../public/assets/hero/Vector.png" alt="" />
          <p className="mt-8 text-sm">Small task</p>
          </div>
          <div>
          <img className="w-8 " src="../../public/assets/hero/Vector (1).png" alt="" />
          <p className="mt-8 text-sm">Write it</p>
          </div>
        <div className="relative">
        <img className=" w-8" src="../../public/assets/hero/Vector (3).png" alt="" />
        <img className="w-4 h-4 absolute top-4 -right-0   sm:top-4" src="../../public/assets/hero/Vector (4).png" alt="" />
        <p className="mt-8 text-sm">Do it</p>
        </div>
          <div>
          <img className="w-8 " src="../../public/assets/hero/Vector (2).png" alt="" />
          <p className="mt-8 text-sm">Repeat</p>
          </div>
        </div>
      </section>

      {/* section 3 */}

      <section className="flex  justify-center items-center mt-12 gap-10">
        <img className="w-48" src="../../public/assets/hero/image 1.png" alt="" />
        <div className="flex flex-col">
          <h2 className="text-sm md:text-lg lg:text-2xl font-bold w-[45vw] md:w-[35vw] lg:w-[18vw] ">Achieve your target and win your life</h2>
          <div className="mt-4">
          <GetStarted/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
