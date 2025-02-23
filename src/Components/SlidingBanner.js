import React from 'react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import moment from 'moment';


const SlidingBanner = () => {


    const { trending, status, error } = useSelector((state) => {
        return state.movies;
    });
    const bannerData = trending.slice(0, 15)
    // const imageURL = "https://image.tmdb.org/t/p/w1280"
    const imageURL = "https://image.tmdb.org/t/p/original"
    const [currentIndex, setCurrentIndex] = React.useState(0);


    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? bannerData.length - 1 : prevIndex - 1
        );
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);



    if (status === "loading")
        return <div>Loading...</div>;
    if (status === "failed")
        return <div>Error: {error}</div>;




    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-[#1a1927]">
            <div className="relative h-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {bannerData.map((item, index) => (
                        <div
                            key={item.id}
                            className="min-w-full h-full relative flex-shrink-0"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1927] via-transparent to-transparent z-10" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1927] z-10" />
                            <img
                                src={imageURL + item.backdrop_path}
                                alt={item.title || item.name}
                                className="w-full h-full object-cover"
                                loading='lazy'
                            />
                            <div className="absolute top-0 left-0 right-0 bottom-5 z-20 flex items-end">
                                <div className="container mx-4 px-3 md:px-8">
                                    <div className="max-w-2xl">
                                        <div className="text-pink-300 mb-2 md:mb-4 font-medium text-sm md:text-base">
                                            #{index + 1} Spotlight
                                        </div>
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-6">
                                            {item.title || item.name}
                                        </h2>
                                        <div className="flex items-center gap-2 md:gap-4 text-gray-300 mb-2 md:mb-4 text-sm md:text-base">
                                            <span className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                                                {item.media_type? item.media_type.charAt(0).toUpperCase() +item.media_type.slice(1).toLowerCase():''}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                                                {item.duration}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                                                {moment(item?.release_date).format("MMM D, YYYY")}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-3 md:mb-6 text-xs md:text-sm">
                                            <span className="bg-pink-600 text-white px-2 py-0.5 rounded">
                                                HD
                                            </span>
                                            <span className="bg-green-600 text-white px-2 py-0.5 rounded">
                                                {item.original_language}
                                            </span>
                                            <span className="border border-blue-400 text-blue-400 px-2 py-0.5 rounded">
                                                {item.original_language}
                                            </span>
                                            <span className="text-gray-400">
                                                {item.totalEpisodes}
                                            </span>
                                        </div>
                                        <p className="text-gray-300 mb-4 md:mb-8 line-clamp-2 md:line-clamp-3 text-sm md:text-base">
                                            {item.overview}
                                        </p>


                                        

                                            <div className="flex gap-3 md:gap-4">
                                                <Link to={"/" + item?.media_type + "/" + item.id}>
                                                <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 transition-colors text-sm md:text-base">
                                                    <FaPlay size={16} /> Watch Now
                                                </button>
                                                </Link>

                                                <Link to={"/" + item?.media_type + "/" + item.id}>
                                                <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 transition-colors text-sm md:text-base">
                                                    <FaInfoCircle size={16} /> Detail
                                                </button>
                                                </Link>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons and Dots - Bottom Right */}
            <div className="absolute bottom-4 right-4 flex items-center gap-12 z-30">
                {/* Dots Navigation */}
                {/* <div className="flex gap-2">
                    {bannerData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-pink-500' : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div> */}

                {/* Navigation Buttons */}
                <div className="flex flex-col-reverse gap-2">
                    <button
                        onClick={prevSlide}
                        className="bg-[#d4d8df1c] p-2 rounded-md text-white hover:bg-black/70 transition-colors"
                    >
                        <FaChevronLeft size={25} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-[#d4d8df1c] p-2 rounded-md text-white hover:bg-black/70 transition-colors"
                    >
                        <FaChevronRight size={25} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SlidingBanner;
