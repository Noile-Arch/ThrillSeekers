
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { PiCaretDoubleUpBold } from "react-icons/pi";
const Navbar=() =>{
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="w-[100%] h-20  flex justify-center items-center bg-[transparent] z-50 absolute top-0">
        <div className="flex md:justify-between items-center md:gap-40 lg:gap-80 gap-[100px] text-[#ffffff]">
          <div href="/">
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-[24px] font-extrabold">Thrill Seekers</h1>
              <h2 className="text-[10px] font-bold">
                explore all creations with us
              </h2>
            </div>
          </div>
          <button
            className="md:hidden flex justify-center text-[30px] hover:text-[gold]"
            onClick={() => {
              setActive(!active);
            }}
          >
            <VscThreeBars />
          </button>
          <div className="hidden md:flex justify-between items-center gap-10 font-extrabold">
            <div href="/">Blog</div>
            <div href="/">Pick a tour</div>
            <div href="/">Countries</div>
            <div href="/">Reviews</div>
            <div href="/">Offers</div>
          </div>
        </div>
        {/* Mobile nav*/}
        <AnimatePresence onExitComplete={() => setActive(false)}>
          {active && (
            <motion.div
              className="md:hidden fixed top-0 flex  flex-col justify-center items-center bg-black/90 w-[100%] h-screen text-[#fffffe] text-[20px] font-bold gap-10 p-4 z-40 "
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                staggerChildren: 0.4,
                ease: "easeInOut",
              }}
              exit={{ y: "-100vh" }}
            >
              <motion.div
                className="flex  flex-col justify-start items-center font-bold gap-[50px] p-4 my-10 border-b-2 w-[300px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1,
                  staggerChildren: 0.4,
                  ease: "easeInOut",
                }}
              >
                <div href="/" className="hover:text-[gold] duration-300">
                  Countries
                </div>
                <div href="/" className="hover:text-[gold] duration-300">
                  Blog
                </div>
                <div href="/" className="hover:text-[gold] duration-300">
                  Pick a tour
                </div>
                <div href="/" className="hover:text-[gold] duration-300">
                  Reviews
                </div>
                <div href="/" className="hover:text-[gold] duration-300 mb-20">
                  Offers
                </div>
              </motion.div>

              <div className="flex justify-center items-end py-4 mt-1 ">
                <button
                  className="text-[35px] text-[#27fcfc] hover:text-[red]"
                  onClick={() => {
                    setActive(!active);
                  }}
                >
                  <PiCaretDoubleUpBold />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Navbar;
