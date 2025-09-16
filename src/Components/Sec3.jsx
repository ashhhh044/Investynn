import React from 'react'
import Portfolio_Icon from '../assets/Portfolio_Icon.png'
import Alert_Icon from '../assets/Alert_Icon.png'
import Insights_Icon from '../assets/Insights_Icon.png'
import Learn_Icon from '../assets/Learn_Icon.png'
import Watchlist_Icon from '../assets/Watchlist_Icon.png'

const Sec3 = () => {
  return (
    <>
        <section className="p-4 my-10">
            <div className="relative w-full flex justify-center items-center py-10">
                <div className="relative w-80 h-80 flex items-center justify-center">
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                    background: `conic-gradient(
                        from 90deg,
                        #1E88E5 0deg,
                        #68A2D5 72deg,
                        #93BBDE 144deg,
                        #C2D6E7 216deg,
                        #E2F2FF 288deg,
                        #1E88E5 360deg
                    )`,
                    }}
                ></div>
                <div className="absolute inset-6 rounded-full bg-white shadow-lg flex flex-col items-center justify-center text-center p-4">
                    <h2 className="poppins text-xl text-[#9F9D9D] font-bold">Invest Better, Every Day</h2>
                    <hr className="w-full border-[#9F9D9D] border-0.5 mt-1 mb-2" />
                    <p className="w-[90%] text-sm text-[#848484] font-normal">
                    Track, learn, and stay ahead with tools built for Nepse investors.
                    </p>
                </div>
                </div>

                <div className="relative w-80 h-80 flex justify-center items-center">
            {[
                { img: {Portfolio_Icon}, title: "Portfolio", desc: "Easily track all your investments, monitor growth, and view detailed performance insights in one place.", angle: -85 },
                { title: "Alerts", desc: "Set custom price alerts and get real-time notifications so you never miss the right trading opportunity.", angle: -54 },
                { title: "Insights", desc: "Stay ahead with market analysis, trends, and data-driven insights designed to guide smarter investment decisions.", angle: -18 },
                { title: "Learn", desc: "Explore simple, practical learning resources to build your knowledge and grow as a confident investor.", angle: 18 },
                { title: "Watchlist", desc: "Organize and follow your favorite stocks, keeping their performance at your fingertips anytime.", angle: 54 },
            ].map((item, index) => {
                const radius = 180; 
                const radians = (item.angle * Math.PI) / 180;
                const x = radius * Math.cos(radians);
                const y = radius * Math.sin(radians);

                return (
                <div
                    key={index}
                    className="absolute flex flex-row items-start w-48"
                    style={{
                    left: `calc(5% + ${x}px)`,
                    top: `calc(60% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                    }}
                >
                    <img src={item.img} alt="Icon" className="w-fit h-10"/>
                    <h3 className="font-semibold mr-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
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