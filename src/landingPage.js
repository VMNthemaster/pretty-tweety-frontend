import React from 'react'
import { SiAdafruit } from 'react-icons/si'
import './index.css'
import { Link } from 'react-router-dom'

const landingPage = () => {
  return (
    <div className="bg-gray-100 min-h-[100vh] flex flex-col ">
      <div className="navbar h-[8vh] md:h-[10vh] bg-orange-300 flex justify-center items-center">
        <h2 className="text-xl md:text-3xl font-serif font-medium text-violet-900 underline underline-offset-2">
          Pretty-Tweety
        </h2>
      </div>
      <div className="border-2 flex border-black px-[1vw] w-full md:w-[80vw] min-h-[90vh] mx-auto relative">
        <div className="main flex flex-col md:flex-row w-full">
          <div className="pre-images w-full md:w-[80vw]">
            show some prebuilt images here
          </div>
            <Link to={'/create'}>
          <div className="create absolute right-[2vw] bottom-[2vh] w-[10vw] h-[10vw] md:w-[5vw] md:h-[5vw] cursor-pointer border-[0.5px] md:border-2 border-orange-100 bg-orange-300 rounded-[50%]">
              <div className="child-absolute">
                <h2 className="text-violet-900 font-serif text-lg font-medium md:text-2xl">
                  <SiAdafruit/>
                </h2>
              </div>
          </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default landingPage
