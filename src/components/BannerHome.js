import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSelector } from "react-redux";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieoData.bannerData);
  const imageURL = useSelector((state) => state.movieoData.imageURL)
  console.log("banner Home", bannerData);

  const handleNext = () => {

  }

  const handlePrevious = () => {
    
  }
  return (
    <section className=" w-full h-full">
      <div className=" flex min-h-full max-h-[95vh] overflow-hidden">
        {
          bannerData.map((data, index) => {
            console.log("data", data)
            return (
              <div className=" min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group">
                <div className=" w-full h-full">
                  <img
                    src={imageURL + data.backdrop_path}
                    className=" w-full h-full"
                    alt="profile"
                  />
                </div>

                {/* button next and previous */}
                <div className=" absolute top-0 w-full h-full hidden group-hover:lg:flex items-center justify-between px-4">
                  <button onClick={handlePrevious} className=" bg-white p-1 rounded-full text-xl z-10 text-black">
                    <FaAngleLeft />
                  </button>
                  <button onClick={handleNext} className=" bg-white p-1 rounded-full text-xl z-10 text-black">
                    <FaAngleRight />
                  </button>
                </div>

                <div className=" absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent">
                </div>

                <div className=" container mx-auto">
                  <div className=" container mx-auto w-full absolute bottom-0 max-w-md px-3">
                    <h2 className=" font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">{data.title}</h2>
                    <p className=" text-ellipsis line-clamp-3 my-2">{data.overview}</p>
                    <div className=" flex items-center gap-4">
                      <p>Rating : {Number(data.vote_average).toFixed(1)}+</p>
                      <spam>|</spam>
                      <p>View : {Number(data.popularity).toFixed(0)}</p>
                    </div>
                    <button className=" bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">
                      Play Now
                    </button>
                  </div>

                </div>

              </div>

            )
          })
        }
      </div>
    </section>
  )
};

export default BannerHome;
