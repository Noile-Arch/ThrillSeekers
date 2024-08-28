const Footer=()=> {
  return (
    <>
      <div className="w-[100%] z-50 bg-[#f5f4f4] h-[120px] relative text-[black] ">
        <div className="w-[100%] h-[100%] md:flex-row flex flex-col justify-around items-center ">
          <div className="font-bold">
            <h1>Thrill Seekers</h1>
          </div>
          <div className="flex justify-center items-center gap-8 text-[12px] font-semibold">
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
}

export default Footer;
