const Footer = () => {
  return (
    <>
      <div className="w-[100%] z-50 bg-[#f5f4f4] h-[200px] md:h-[120px] relative text-[black] ">
        <div className="w-[100%] h-[100%] md:flex-row flex flex-col justify-around items-center">
          <div className="font-bold flex justify-center items-center w-[100%] md:w-auto gap-4 ">
            <img
              src="profile.jpeg"
              alt=""
              className="w-20 h-20 rounded-[70px]"
            />
            <h1>ELion Kalawa </h1>
          </div>
          <div className="font-bold ">Thrill Seekers</div>
          <div className=" w-auto flex justify-center items-center md:gap-10 gap-6  text-[12px] font-bold">
            <div href="/">Countries</div>
            <div href="/">Blog</div>
            <div href="/">Pick a tour</div>
            <div href="/">Reviews</div>
            <div href="/">Offers</div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
