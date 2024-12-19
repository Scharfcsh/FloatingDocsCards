import React from "react";

function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#112b28] to-[#030120]">
        {/* <div className='absolute top-[5%] w-full py-10 flex justify-center text-[#063A34] font-bold text-2xl'>Save Your file here</div>
         */}
        <div className="relative w-full z-30 max-w-lg mx-auto">
          <div className="absolute top-[10rem] -right-[20rem]  w-[30rem] h-[30rem] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 "></div>
          <div className="absolute -right-[4px]  w-60 h-60 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 "></div>
          {/* <div className="absolute  -right-[30rem] w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 "></div> */}
        </div>
        <h1 className="text-[15vw]  tracking-tighter font-bold text-[#40c1b2]">
          Contacts.
        </h1>
        <p className=" font-bold text-[#40c1b2]">
          Dragable Cards
        </p>
      </div>
    </>
  );
}

export default Background;
