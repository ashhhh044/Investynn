import React from 'react'
import Portfolio_Icon from '../assets/Portfolio_Icon.png'
import Alert_Icon from '../assets/Alert_Icon.png'
import Insights_Icon from '../assets/Insights_Icon.png'
import Learn_Icon from '../assets/Learn_Icon.png'
import Watchlist_Icon from '../assets/Watchlist_Icon.png'
import Outer_Ring from '../assets/Outer_Ring.png'

const Sec3 = () => {
  return (
    <>
        <section className="p-4 my-10">
            <div className="relative w-full flex justify-center items-center py-10 gap-4">
                <div className="relative w-80 h-80 flex flex-col items-center justify-center">
                    <div className="absolute -inset-3 rounded-full bg-white flex flex-col items-center justify-center text-center p-4 shadow-[inset_-2px_-3px_15px_rgba(0,0,0,0.25)]">
                        <h2 className="poppins text-xl text-[#9F9D9D] font-bold">
                        Invest Better, Every Day
                        </h2>
                        <hr className="w-full border-[#9F9D9D] border-0.5 mt-1 mb-2" />
                        <p className="w-[90%] text-sm text-[#848484] font-normal">
                        Track, learn, and stay ahead with tools built for Nepse investors.
                        </p>
                    </div>
                    {/* <div>
                        <img src= {Outer_Ring} alt="Outer_Ring" className=" absolute -top-5 left-30"/>
                    </div> */}
                    <svg
                      className="absolute"
                      width="400"
                      height="400"
                      viewBox="0 0 400 400"
                    >
                      <defs>
                        <linearGradient
                          id="arcGradient"
                          x1="0%" y1="0%"
                          x2="0%" y2="100%"   
                        >
                            background: linear-gradient(180deg, #E2F2FF 0%, #C2D6E7 24.04%, #93BBDE 47.6%, #68A2D5 72.12%, #1E88E5 100%);

                          <stop offset="0%" stopColor="#E2F2FF" />
                          <stop offset="24.04%" stopColor="#C2D6E7" />
                          <stop offset="47.6%" stopColor="#93BBDE" />
                          <stop offset="72.12%" stopColor="#68A2D5" />
                          <stop offset="100%" stopColor="#1E88E5" />
                        </linearGradient>
                      </defs>

                      <circle
                        cx="200"
                        cy="200"
                        r="180"
                        fill="none"
                        stroke="url(#arcGradient)"
                        strokeWidth="18"
                        strokeLinecap="round"
                        strokeDasharray="565 1130"  // visible arc then hidden
                        transform="rotate(-90 200 200)" // rotate so arc is on the right
                      />
                    </svg>
                </div>
                <div className="relative flex flex-col justify-center items-center space-y-4 ml-10">
                    {[
                        { img: Portfolio_Icon, title: "Portfolio", desc: "Easily track all your investments, monitor growth, and view detailed performance insights in one place.", angle: -85 },
                        { img: Alert_Icon, title: "Alerts", desc: "Set custom price alerts and get real-time notifications so you never miss the right trading opportunity.", angle: -54 },
                        { img: Insights_Icon, title: "Insights", desc: "Stay ahead with market analysis, trends, and data-driven insights designed to guide smarter investment decisions.", angle: -18 },
                        { img: Learn_Icon, title: "Learn", desc: "Explore simple, practical learning resources to build your knowledge and grow as a confident investor.", angle: 18 },
                        { img: Watchlist_Icon, title: "Watchlist", desc: "Organize and follow your favorite stocks, keeping their performance at your fingertips anytime.", angle: 54 },
                    ].map((item, index) => {
                        return (
                        <div key={index} className="flex space-x-4 w-full">                           
                            <img src={item.img} alt="Icon" className="flex h-10 w-10 items-center justify-center"/>
                            <div className="flex flex-col border-l-2 border-[#93BADD] pl-2 w-3xs text-justify">
                                <h3 className="font-semibold text-[#535353] text-xl">{item.title}</h3>
                                <p className="text-sm text-[#7E7E7E]">{item.desc}</p>
                            </div>
                        </div>
                        );
                    })}
                </div>

            </div>


        </section>
    </>
  )
}

export default Sec3