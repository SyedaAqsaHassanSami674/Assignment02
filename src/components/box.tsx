export default function Box() {
    return (
      <div className=" lg:m-auto h-auto ">
        <div className="lg:flex lg:w-full md:flex md:h-full md:w-auto md:container md:mx-auto md:justify-center">
          {/* card1 */}
          <div className="card w-3/4 h-auto py-10 mx-20 px-10 my-5 bg-white rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105 md:w-3/12">
            <div className="w-16 h-20 rounded-[10px] bg-[#FFDCD1] px-5 py-6"></div>
            <h3 className=" text-[16px] leading-[24px] font-bold mt-[20px] text-black">training Courses</h3>
            <div className="h-1 bg-[#E74040] w-12 my-3"></div>
            <p className="w-56 h-22 text-[#737373] font-[400] text-base md:text-xl md:w-25">
              The gradual accumulation of information about atomic and small-scale
              behaviour...
            </p>
          </div>
  
          {/* card2 */}
          <div className="card w-3/4 mx-20 h-200 py-[35px] my-5 px-[40px] bg-white rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105 md:w-3/12 ">
            <div className="w-20 h-20 rounded-[10px] bg-[#B9EAA8] mx-auto ml-[5px]"></div>
            <h2 className="font-bold mt-[20px] text-black">
              2,769 online courses
            </h2>
            <div className="h-1 bg-[#E74040] w-[60px] my-[10px]"></div>
            <p className="w-56 h-16 text-[#737373] font-[400] text-[14px] md:text-xl md:w-25">
              The gradual accumulation of information about atomic and small-scale
              behaviour...
            </p>
          </div>
  
          {/* card3 */}
          <div className="card w-3/4 h-auto py-10 mx-20 px-10 my-5 bg-[#23A6F0] rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105 md:w-3/12">
            <div className="w-20 h-20 rounded-[10px] bg-white mb-4 ml-[5px]"></div>
            <h2 className="font-bold mt-[20px] text-white">training courses</h2>
            <div className="h-1 bg-white w-[60px] my-[10px]"></div>
            <p className="w-[222px] h-12 text-white font-[400] text-[14px] md:text-xl md:w-25">
              The gradual accumulation of information about atomic and small-scale
              behaviour...
            </p>
          </div>
        </div>
      </div>
    );
  }