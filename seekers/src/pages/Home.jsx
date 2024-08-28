import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaArrowDownLong } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="text-[white] w-full absolute z-20 scroll-smooth">
        <section
          className="md:min-h-screen  md:h-full  hero w-[100%] bg-contain scroll-smooth"
          style={{
            backgroundImage: `url('/mountainrainbow.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="md:h-screen h-[600px]  w-[100%] bg-gradient-to-b from-[#4e4e94] from-10% via-transparent via-40% to-[#110e24] to-95% pt-20 flex justify-center items-center">
            <div className="w-[650px] px-10 md:px-0 flex flex-col lg:justify-start justify-center items-center md:text-left text-center  ">
              <div className="w-full flex md:justify-start items-center gap-3 justify-center  ">
                <h1 className="md:w-[40px] w-full bg-[gold]  h-[2.5px]"></h1>
                <h1 className="text-[gold] text-[10px] lg:text-[16px] font-extrabold  ">
                  WELCOME
                </h1>
                <h1 className="md:w-[40px] w-full bg-[gold]  h-[2.5px]"></h1>
              </div>

              <h1 className=" my-4 md:text-[60px] lg:text-[60px] font-bold text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#ff3c00] via-[#fce303] to-[#00e1ff] ">
                Explore New Horizons & Discover The World
              </h1>
              <div className="w-full flex justify-center md:justify-start mt-5">
              <h2 className="my-4 w-8  flex justify-center text-[white] mt-2  border-2 rounded-full  px-1 py-5 ">
                <p className="text-[12px] md:text-[14px] rotate-90 animate-bounce font-extrabold text-[#27ff27] "><FaArrowDownLong size={20} /></p>
                
              </h2>
              </div>
              
            </div>
          </div>
        </section>

        <section className="bg-[#110e24] md:pt-10 pt-10 md:h-[400px] h-[auto] w-[100%]">
          <div className="md:flex-row flex flex-col md:flex justify-center md:items-center items-start md:gap-10 gap-1">
            <div className="pattern bg-cover bg-bottom bg-no-repeat md:w-[500px] w-[100%] h-[400px] md:h-[300px]  bg-gradient-to-b from-[#110e24] from-10% to-[#413b3b] to-30% md:flex-row flex flex-col md:flex justify-start items-start md:rounded-full border-[#f6fa04]  md:border-2">
              <div className="md:w-[500px] w-[100%]  h-[250px] "></div>
            </div>
            <div className="md:w-[520px] px-4 py-6">
              <h1 className="text-[20px] font-bold pb-2 md:pb-4">
                Explore Special Camping Spots
              </h1>
              <p className="py-2 text-slate-400">
                Embark on an unforfatable journey of exploration as you venture
                into the heart of the wilderness with our camp experiences.
              </p>
              <p className="pt-2 text-slate-400">
                Whether you are a seasoned outdoor entusiast or new to the world
                of camping, our expert guides will lead you on a path of
                discovery, sharing their knowledge of flora, fauna and survival
                skills. Get ready to forge new connections, kindle your spirit
                of adventure, and create lasting memories in the greate
                outdoors.
              </p>
              <div className=" md:pt-8 mt-10 flex gap-6 justify-center items-center md:justify-start">
                <img
                  src={"/fire.jpg"}
                  className="bg-cover bg-center bg-no-repeat w-[150px] h-[100px]"
                />
                <img
                  src={"/fire 2.jpg"}
                  className="bg-cover bg-center bg-no-repeat w-[150px] h-[100px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#413b3b] bg-gradient-to-b from-[#110e24] from-5% to-[#413b3b] to-20% pt-40 h-[auto] w-[100%] ">
          <div className="flex md:flex-row flex-col justify-center items-center gap-10 md:mx-20 ">
            <div className="md:w-[520px] mx-8">
              <h1 className="text-[20px] font-bold pb-2">
                Discover Captivating Wildlife
              </h1>
              <p className="py-2 text-slate-300">
                {`                From graceful deer grazing in meadows to the melodious songs of
              birds echoing through the trees, our park is a heaven for both
              native and exotic species. Our commitment to conservation
              ensures that you'll encounter creatures thriving in habitats
              carefully designed to mirror their naturalenvironments`}
              </p>
              <p className="pt-2 text-slate-300">
                Whether you are a seasoned outdoor entusiast or new to the world
                of camping, our expert guides will lead you on a path of
                discovery, sharing their knowledge of flora, fauna and survival
                skills. Get ready to forge new connections, kindle your spirit
                of adventure, and create lasting memories in the greate
                outdoors.
              </p>
              <div className=" pt-8 ">
                <button className="border-2 rounded-full px-5 py-2 hover:bg-black/50 hover:text-[gold] border-[#b34e26] text-[#e4e1e1]">
                  Show All Animals
                </button>
              </div>
            </div>

            <div className="">
              <img
                src={"/highway.jpg"}
                className="bg-cover bg-center bg-no-repeat md:w-[500px] md:-[350px] w-[500px] h-[300px] md:rounded-full"
              />
            </div>
          </div>
          <div className="md:flex-row flex flex-col md:flex justify-center mt-20 pb-20 md:mx-auto mx-auto w-[350px] md:w-[700px]">
            <img
              src={"/hiker.jpg"}
              className="bg-cover bg-center bg-no-repeat md:w-[350px] md:h-[350px] w-[350px] h-[240px]"
            />
            <div className="md:w-[350px] md:h-[350px] w-[100%] h-[250px] bg-[#252424]  ">
              <div className="md:px-10 px-4 md:py-20 py-4 text-[14px]">
                <h1>
                  {` "Join us on a journey that promises not just a glimpse of the
                animal realm, but an immersive adventure that leaves you with
                anewfound reverence for the intricate tepestry of life`}
                </h1>
                <p className="mt-8 text-[12px] font-bold">Richard Zong</p>
                <p className="mt-2 text-[12px] font-bold text-[#45ecf1]">
                  PARK GUIDE
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#413b3b] special  lg:min-h-screen h-[700px] w-[100%]">
          <div className="min-h-screen w-[100%] bg-gradient-to-b from-[#413b3b] from-2% to-transparent  flex flex-col md:justify-start items-center gap-20 py-8">
            <div className="flex flex-col justify-center items-center">
              <h1 className="md:mt-2 mt-2 ">Why we are special</h1>
              <div className=" mt-4 ml-10 w-[50px] h-[50px] border-dotted bg-transparent border-2 rounded-full object-center"></div>
            </div>
            <div className="md:absolute md:mt-[300px] md:w-[300px] md:mr-[300px] lg:mr-[400px] xl:mr-[500px] w-[300px] mt-20">
              <div className="text-[14px]">
                <h1>
                  With each visit you contribute to the ongoing story of
                  conservation, ensuring the magic of our national park endures
                  for generations to come.
                </h1>
              </div>
              <div className="flex flex-wrap md:justify-start justify-center items center mt-8 md:gap-10 gap-[40px] md:w-[600px]  ">
                <div className="">
                  <h1 className="text-[35px] font-bold">836</h1>
                  <p className="mt-4 text-[12px]">DAILY</p>
                  <p className=" text-[12px]">GUIDED VISITS</p>
                </div>
                <div>
                  <h1 className="text-[35px] font-bold">
                    98
                    <span className="text-[20px]">%</span>
                  </h1>
                  <p className="mt-4 text-[12px]">VISITOR</p>
                  <p className=" text-[12px]">SATISFIED</p>
                </div>
                <div>
                  <h1 className="text-[35px] font-bold">
                    70
                    <span className="text-[20px]">+</span>
                  </h1>
                  <p className="mt-4 text-[12px]">BIODIVERSITY</p>
                  <p className=" text-[12px]">SPECIES</p>
                </div>
                <div>
                  <h1 className="text-[35px] font-bold">
                    98
                    <span className="text-[20px]">k</span>
                  </h1>
                  <p className="mt-4 text-[12px]">COMMUNITY</p>
                  <p className=" text-[12px]">FOLLOWERS</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white min-h-screen">
          <div className="flex flex-col justify-center items-center text-black md:mx-[auto] mx-8 pt-20">
            <h1 className="font-semibold md:w-[800px] w-[350px] text-left bg-slate-100 py-4 px-4 rounded-lg">
              Top Things to do in park
            </h1>

            <div className="md:flex-row flex flex-col justify-center items-center mt-8 md:gap-[50px] gap-2 text-[14px] mb-8 shadow-2xl shadow-[#ffa060] rounded-[20px] md:w-[800px] ">
              <img
                src="/vehicles.jpg"
                className="md:h-[350px] md:w-[700px] w-[400px] rounded-t-[20px] h-[300px] bg-cover bg-center md:rounded-r-none md:rounded-l-[20px]"
              ></img>
              <div className="flex flex-col justify-start items-start md:w-[950px] w-[336px] py-4 px-4 md:px-2">
                <h1 className="font-semibold">Special Private Tour</h1>
                <div className="my-4"></div>
                <p className="mt-4 text-[13px] text-slate-500 font-medium">
                  {` Whether you're seeking a romantic gateway, a family adventure
                or a solo expedition, our orivate tours ensure that you
                journey through our park becomes unforgettable and truly
                exceptionak escape.Discover the park's secrete at your own
                pace and immerse yourself in its beauty with the ultimate
                blend of comfort and exploration.`}
                </p>
                <div className="mt-4 text-[14px] text-slate-500 font-medium">
                  1.8k views . 592 likes
                </div>
                <div className="mt-4 flex justify-center items-center gap-8 text-slate-900">
                  <button className="border-2 border-slate-400 rounded-full px-4 py-2 font-semibold hover:bg-[#ec9b22] hover:border-orange-500 hover:text-slate-800">
                    See Details
                  </button>
                  <h1>
                    Starts at{" "}
                    <span className="font-bold text-[12px]">
                      $<strong className="font-bold text-[16px]">599</strong>
                    </span>
                    /day
                  </h1>
                </div>
              </div>
            </div>

            <div className="md:flex-row flex flex-col justify-center items-center my-8 md:gap-[50px] gap-2 text-[14px] shadow-2xl shadow-[#65ff60] rounded-[20px] md:w-[800px]">
              <div className="flex flex-col justify-start items-start md:w-[700px] w-[336px] py-4 px-4">
                <h1 className="font-semibold">Customized Group Hiking</h1>
                <div className="my-4"></div>
                <p className="mt-4  text-[13px] text-slate-500 font-medium">
                  {` Our experts guides ensure safety and share their knowledge,
                enhancing your understanding of the park's ecology and
                history. Unite with nature, bond with your group and forge
                unforgettable memories on a trail designed exclusively for
                you.`}
                </p>
                <div className="mt-4 text-[14px] text-slate-500 font-medium">
                  1.7k views . 478 likes
                </div>
                <div className="mt-4 flex justify-center items-center gap-8 text-slate-900">
                  <button className="border-2 border-slate-400 rounded-full px-4 py-2 font-semibold hover:bg-[#22ec22] hover:border-orange-500 hover:text-slate-800">
                    See Details
                  </button>
                  <h1>
                    Starts at{" "}
                    <span className="font-bold text-[12px]">
                      $<strong className="font-bold text-[16px]">399</strong>
                    </span>
                    /group
                  </h1>
                </div>
              </div>
              <img
                src="/group.jpg"
                className="md:h-[350px] md:w-[350px] w-[400px] h-[300px] bg-cover bg-center rounded-b-[20px] md:rounded-l-none md:rounded-r-[20px]"
              />
            </div>

            <div className="md:flex-row flex flex-col justify-center items-center mt-8 md:gap-[30px] gap-2 text-[14px] mb-[150px] shadow-2xl shadow-[#5bf4ff] rounded-[20px] md:w-[800px]">
              <img
                src="/boat.png"
                className="md:h-[350px]  md:w-[350px] w-[400px] h-[300px] bg-cover bg-center rounded-t-[20px] md:rounded-l-[20px] md:rounded-r-none"
              ></img>
              <div className="flex flex-col justify-start items-start md:w-[850px] w-[336px] py-4 px-4 md:px-2">
                <h1 className="font-semibold">Kayak & Drifting Journey</h1>
                <div className="my-4"></div>
                <p className="mt-4 text-[13px] text-slate-500 font-medium">
                  Our service offers an unforgettable blend of kayaking and
                  drifting, perfect for both novice and experinced water
                  enthusiasts. Navigate through lush landscapes, witness hidden
                  coves and seek in breathtaking views that can only be
                  experinced from the water.
                </p>
                <div className="mt-4 text-[14px] text-slate-500 font-medium">
                  1.66k views . 453 likes
                </div>
                <div className="mt-4 flex justify-center items-center gap-8 text-slate-900">
                  <button className="border-2 border-slate-400 rounded-full px-4 py-2 font-semibold hover:bg-[#22ecec] hover:border-orange-500 hover:text-slate-800">
                    See Details
                  </button>
                  <h1>
                    Starts at{" "}
                    <span className="font-bold text-[12px]">
                      $<strong className="font-bold text-[16px]">99</strong>
                    </span>
                    /person
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="h-[700px] w-full md:h-[700px] contact">
            <div className="h-full w-[100%] bg-gradient-to-b from-[white] from-5% to-transparent to-40% flex flex-col md:justify-start items-center text-slate-800 text-[13px] ">
              <div className="w-[300px] flex flex-col border-b border-slate-500 pb-8 md:mt-[0px] mt-[120px]">
                <h1 className="font-extrabold text-center mb-4">
                  Your Exploration Starts Here
                </h1>
                <p className="text-center flex flex-col ">
                  Our mission is to connect you with the wonders of our parks,
                  offering tailored experiences for every adventurer.
                </p>
                <p className="text-center ">
                  Embrace the call of the wild and let the journey unfold.
                </p>
              </div>
              <div className="pt-4 flex gap-8 font-bold text-[#000000]">
                <h1>+(254)-1234567 </h1>
                <p>info@thrillseekers-adventures.com</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
