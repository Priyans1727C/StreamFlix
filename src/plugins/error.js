import React from 'react';


function Error404() {
  return (
    <div className="bg-[#000000] bg-[url('http://salehriaz.com/404Page/img/bg_purple.png')] bg-opacity-80 bg-blend-color-burn bg-repeat-x bg-cover bg-left-top h-screen overflow-hidden font-['Dosis',sans-serif] font-light select-none">
      <div className="stars bg-[url('http://salehriaz.com/404Page/img/overlay_stars.svg')] bg-repeat bg-contain bg-left-top h-full bg-blend-screen">
        {/* Central Body */}
        <div className="central-body py-[17%] px-[5%] text-center">
          <img className="image-404 relative z-10 pointer-events-none inline-block" src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt="404" />
          <a href="/" className="btn-go-home relative z-20 mx-auto my-4 w-[180px] py-2.5 px-4 border border-purple-500 rounded-full font-normal block text-white text-center no-underline tracking-wider text-xs transition-all duration-300 ease-in hover:bg-purple-500 hover:text-white hover:scale-105 hover:shadow-[0px_20px_20px_rgba(0,0,0,0.1)]">GO BACK HOME</a>
        </div>

        {/* Objects */}
        <div className="objects">
          <img className="object_rocket z-[95] absolute -translate-x-[50px] left-[15%] top-[75%] pointer-events-none animate-[rocket-movement_70s_linear_infinite]" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" alt="rocket" />
          <div className="earth-moon">
            <img className="object_earth absolute top-[20%] left-[15%] z-[90] animate-[spin-earth_65s_infinite_linear_both] brightness-75" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt="earth" />
            <img className="object_moon absolute top-[12%] left-[25%] brightness-75" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt="moon" />
          </div>
          <div className="box_astronaut z-[110] absolute top-[60%] right-[20%] will-change-transform animate-[move-astronaut_50s_infinite_linear_alternate]">
            <img className="object_astronaut animate-[rotate-astronaut_200s_infinite_linear_alternate] brightness-90" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt="astronaut" />
          </div>
        </div>

        {/* Glowing Stars */}
        <div className="glowing_stars">
          <div className="star absolute rounded-full bg-white w-[3px] h-[3px] opacity-30 will-change-opacity top-[80%] left-[25%] animate-[glow-star_2s_infinite_ease-in-out_alternate_1s]"></div>
          <div className="star absolute rounded-full bg-white w-[3px] h-[3px] opacity-30 will-change-opacity top-[20%] left-[40%] animate-[glow-star_2s_infinite_ease-in-out_alternate_3s]"></div>
          <div className="star absolute rounded-full bg-white w-[3px] h-[3px] opacity-30 will-change-opacity top-[25%] left-[25%] animate-[glow-star_2s_infinite_ease-in-out_alternate_5s]"></div>
          <div className="star absolute rounded-full bg-white w-[3px] h-[3px] opacity-30 will-change-opacity top-[75%] left-[80%] animate-[glow-star_2s_infinite_ease-in-out_alternate_7s]"></div>
          <div className="star absolute rounded-full bg-white w-[3px] h-[3px] opacity-30 will-change-opacity top-[90%] left-[50%] animate-[glow-star_2s_infinite_ease-in-out_alternate_9s]"></div>
        </div>
      </div>
    </div>
  );
}

export default Error404;