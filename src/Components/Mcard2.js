import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';

const MovieCard = ({ data, trending, index, media_type }) => {
    const imageURL = "https://image.tmdb.org/t/p/w500"
    const mediaType = data.media_type ?? media_type

    return (
        <>
            <Link to={"/" + mediaType + "/" + data.id} className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-105 transition-all'>


                <div className="card shadow-[0px_4px_16px_px_#367E08] h-[335px] w-[230px] group gap-[0.5em] rounded-[1.5em] relative flex justify-end flex-col z-[1] overflow-hidden hover:scale-110 transition-all">
                    <div className="absolute top-0 left-0 h-full w-full  bg-[#111111]" >

                        {
                            data?.poster_path ? (
                                <img
                                    src={imageURL + data?.poster_path}
                                    alt='poster'
                                />
                            ) : (
                                <div className='bg-neutral-800 h-full w-full flex justify-center items-center'>
                                    No image found
                                </div>
                            )

                        }

                    </div>
                    <div className="absolute font-nunito w-full  rounded-3xl bg-[#1a1927] block text-white font-bold  h-[0px] group-hover:h-[7em] leading-[1.2em] duration-500 overflow-hidden  ">
                        {/* <div w-full py-4 bg-yellow-400 font-bold text-black> */}
                        <div className=" pt-2 w-full px-[1.5em] text-white z-[2] absolute  font-nunito flex flex-col    ">
                            <div className="  h-fit w-full">
                                <h1 className="card_heading text-[0.9em] tracking-[.1em] ">
                                    {data?.title || data?.name}
                                </h1>

                            </div>
                            <div className='w-full text-sm text-neutral-400 flex justify-between items-center'>
                                <p>{moment(data?.release_date).format("MMM D, YYYY")}</p>
                                <p className='bg-black px-1 rounded-full text-xs text-white'>Rating :{Number(data.vote_average).toFixed(1)}</p>
                            </div>
                        </div>

                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90" />

                    {/* </div> */}
                </div>
            </Link>
        </>
    );
}

export default MovieCard;
