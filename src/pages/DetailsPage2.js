import React, { useState } from 'react';
import { LuPlay, LuCalendar, LuEarth, LuStar, LuUsers, LuTrendingUp, LuAward, LuClock, LuFilm, LuHeart, LuShare2, LuBookmarkPlus, LuMessageCircle, LuTv, LuTextSelect, LuFlag, LuEye } from 'react-icons/lu';
import { useParams } from 'react-router-dom'

import { useFetchDetails, useFetchDetailsMetaData } from '../api/movieService';

import moment from 'moment'
import Divider from '../Components/Divider'
import HorizontalCarding from '../Components/HorizontalCarding'
import VideoPlayer from '../Components/VideoPlayer'



// Mock data for demonstration - replace with your API call
const movieData = {
  "adult": false,
  "backdrop_path": "/81FKp9UMwZZ7Xk2ksV6z8qjG6pU.jpg",
  "genre_ids": [10764],
  "id": 85231,
  "origin_country": ["ES"],
  "original_language": "es",
  "original_name": "GH Dúo",
  "overview": "A compelling story about...", // Added mock overview for demonstration
  "popularity": 3230.047,
  "poster_path": "/sgPv3qMYHKwxz9KQxjyQokmPUHj.jpg",
  "first_air_date": "2019-01-08",
  "name": "GH Dúo",
  "vote_average": 7.3,
  "vote_count": 3
};

// Mock additional data
const additionalData = {
  duration: "45m",
  status: "Returning Series",
  nextEpisode: "March 15, 2024",
  totalEpisodes: 245,
  genres: ["Reality", "Entertainment", "Drama"],
  cast: [
    { name: "Actor 1", role: "Host" },
    { name: "Actor 2", role: "Contestant" },
    { name: "Actor 3", role: "Judge" },
  ],
  maturityRating: "TV-14",
  quality: "HD",
  audio: ["English", "Spanish"],
  subtitles: ["English", "Spanish", "French"],
  totalSeasons: 3,
  currentSeason: "Season 3",
  episodeTitle: "Episode 12: New Beginnings",
  viewerCount: "2.5M viewers"
};

const DetailsPage = () => {
  const params = useParams()
  const backImg = "https://image.tmdb.org/t/p/original";
  const imageURL = "https://image.tmdb.org/t/p/w500"
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`)
  const { data: castData } = useFetchDetails(`/${params?.explore}/${params?.id}/credits`)
  const { data: similarData } = useFetchDetailsMetaData(`/${params?.explore}/${params?.id}/similar`)
  const { data: recommendationData } = useFetchDetailsMetaData(`/${params?.explore}/${params?.id}/recommendations`)
  const duration = (data?.runtime / 60)?.toFixed(1)?.split(".")
  const writer = castData?.crew?.filter(el => el?.job === "Writer")?.map(el => el?.name)?.join(", ")

  const [playVideo, setPlayVideo] = useState(false)
  const [playVideoId, setPlayVideoId] = useState("")

  const handlePlayVideo = (data) => {
    setPlayVideoId(data)
    setPlayVideo(true)

  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`;


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section with Backdrop */}
      <div
        className="relative h-[80vh] w-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(17, 24, 39, 0.2), rgba(17, 24, 39, 1)), url(${backImg + data?.poster_path})`
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Poster and Main Info */}
            <div className="flex flex-col gap-4">
              <img
                src={imageURL + data?.poster_path}
                alt={movieData.name}
                className="w-64 rounded-lg shadow-2xl ring-4 ring-gray-800"
              />
              <div className="flex gap-2 flex-wrap">
                <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm border border-red-600/40">
                  {additionalData.maturityRating}
                </span>
                <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-600/40">
                  {additionalData.quality}
                </span>
                {additionalData.genres.map((genre, index) => (
                  <span key={index} className="bg-gray-800 px-3 py-1 rounded-full text-sm border border-gray-700">
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Title and Metadata */}
            <div className="flex-1">
              <div className="mb-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-2">{data?.title || data?.name}</h1>
                <h2 className="text-xl text-gray-400">{additionalData.episodeTitle}</h2>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <LuCalendar size={16} />
                    <span className="text-sm">Release Date</span>
                  </div>
                  <p className="font-semibold">{new Date(movieData.first_air_date).toLocaleDateString()}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <LuClock size={16} />
                    <span className="text-sm">Runtime</span>
                  </div>
                  <p className="font-semibold">{additionalData.duration}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <LuTv size={16} />
                    <span className="text-sm">Season</span>
                  </div>
                  <p className="font-semibold">{additionalData.currentSeason}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <LuEye size={16} />
                    <span className="text-sm">Viewers</span>
                  </div>
                  <p className="font-semibold">{additionalData.viewerCount}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <LuEarth size={16} />
                    <span className="text-sm">Audio</span>
                  </div>
                  <p className="font-semibold">{additionalData.audio.join(", ")}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    < LuTextSelect size={16} />
                    <span className="text-sm">Subtitles</span>
                  </div>
                  <p className="font-semibold">{additionalData.subtitles.length} Languages</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <LuFlag size={16} />
                    <span className="text-sm">Country</span>
                  </div>
                  <p className="font-semibold">{data?.origin_country.join(", ")}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <LuStar size={16} />
                    <span className="text-sm">Rating</span>
                  </div>
                  <p className="font-semibold">{data?.vote_average.toFixed(1)}/10</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap">
                <button onClick={() => handlePlayVideo(data)} className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-colors">
                  <LuPlay size={24} />
                  <span className="font-semibold">Play Now</span>
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-4 rounded-lg flex items-center gap-2 transition-colors">
                  <LuHeart size={20} />
                  <span>Add to Favorites</span>
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-4 rounded-lg flex items-center gap-2 transition-colors">
                  <LuBookmarkPlus size={20} />
                  <span>Watchlist</span>
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-4 rounded-lg flex items-center gap-2 transition-colors">
                  <LuShare2 size={20} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <LuTrendingUp size={24} className="text-blue-400" />
              <h3 className="text-lg font-semibold">Popularity</h3>
            </div>
            <p className="text-2xl font-bold text-blue-400">{movieData.popularity.toFixed(1)}</p>
            <p className="text-gray-400 text-sm mt-1">Global Rating</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <LuUsers size={24} className="text-green-400" />
              <h3 className="text-lg font-semibold">Vote Count</h3>
            </div>
            <p className="text-2xl font-bold text-green-400">{movieData.vote_count}</p>
            <p className="text-gray-400 text-sm mt-1">User Ratings</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <LuFilm size={24} className="text-purple-400" />
              <h3 className="text-lg font-semibold">Episodes</h3>
            </div>
            <p className="text-2xl font-bold text-purple-400">{additionalData.totalEpisodes}</p>
            <p className="text-gray-400 text-sm mt-1">Total Episodes</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <LuAward size={24} className="text-yellow-400" />
              <h3 className="text-lg font-semibold">Rating</h3>
            </div>
            <p className="text-2xl font-bold text-yellow-400">{data?.vote_average.toFixed(1)}/10</p>
            <p className="text-gray-400 text-sm mt-1">Average Score</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                {data?.overview || "No overview available."}
              </p>
            </div>

            {/* Cast Section */}
            <div className="bg-gray-800 rounded-xl p-3">
              <h2 className="text-2xl font-semibold mb-6">Cast</h2>
              <div className='grid w-full grid-cols-[repeat(auto-fit,96px)] gap-4 my-4'>
                {
                  castData?.cast?.filter(el => el?.profile_path).map((starCast, index) => {
                    return (
                      <div>
                        <div>
                          <img
                            src={imageURL + starCast?.profile_path}
                            className='w-24 h-24 object-cover rounded-full'
                            alt='star'
                          />
                        </div>
                        <p className='font-bold text-center text-sm text-neutral-400'>{starCast?.name}</p>
                      </div>
                    )
                  })
                }
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Details</h2>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400">Status</span>
                  <p className="font-semibold">{additionalData.status}</p>
                </div>
                <div>
                  <span className="text-gray-400">Next Episode</span>
                  <p className="font-semibold">{additionalData.nextEpisode}</p>
                </div>
                <div>
                  <span className="text-gray-400">Original Language</span>
                  <p className="font-semibold">{movieData.original_language.toUpperCase()}</p>
                </div>
                <div>
                  <span className="text-gray-400">Country</span>
                  <p className="font-semibold">{movieData.origin_country.join(", ")}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Genres</h2>
              <div className="flex flex-wrap gap-2">
                {additionalData.genres.map((genre, index) => (
                  <span key={index} className="bg-gray-700 px-4 py-2 rounded-full text-sm">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>




      <div>
                <HorizontalCarding data={similarData} heading={"Similar " + params?.explore} media_type={params?.explore} />
                <HorizontalCarding data={recommendationData} heading={"Recommendation " + params?.explore} media_type={params?.explore} />
            </div>


      {
        playVideo && (
          <VideoPlayer data={playVideoId} close={() => setPlayVideo(false)} media_type={params?.explore} />
        )
      }
    </div>
  );
}

export default DetailsPage;