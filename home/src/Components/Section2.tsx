import { FaCaretUp, FaChevronRight, FaLevelUpAlt } from "react-icons/fa"
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { RiBarChart2Fill } from 'react-icons/ri';

export default function Section2 () {
    const data = {
        topGainers: [
            {name: "HIMSTAR", price: 1028.10, change: 0.42, icon: <FaCaretUp className="mr-1" />},
            {name: "UNHPL", price: 1028.10, change: 0.42, icon: <FaCaretUp className="mr-1" />},
            {name: "UPCL", price: 1028.10, change: 0.42, icon: <FaCaretUp className="mr-1" />}
        ],
        topTurnOvers: [
            {name:"HIMSTAR", rate: 299970348.40},
            {name:"UNHPL", rate: 299970348.40},
            {name:"UPCL", rate: 299970348.40},
        ],
        topSectors: [
            {name:"Hydro Power", rate: 299970348.40},
            {name:"Commercial Banks", rate: 299970348.40},
            {name:"Manufacturing", rate: 299970348.40},
        ],

    }
  return (
    <>
        <div className="flex mx-12 space-x-3">
            <div className="border rounded-xl p-4 w-1/3">
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                        <h1 className="flex items-center font-semibold space-x-1">
                            <span>Top Gainers</span>
                            <FaLevelUpAlt />
                        </h1>
                        <div className="flex items-center cursor-pointer font-medium text-sm">
                            <span>View More</span>
                            <FaChevronRight className="ml-1" />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3 text-sm">
                        {data.topGainers.map((item, i) => (
                            <div key={i} className="flex justify-between items-center">
                                <span>{item.name}</span>
                                <div className="flex items-center">
                                    <span>{item.price}</span>
                                    <span
                                    className={`flex items-center ml-2 ${
                                        item.change >= 0 ? "text-[#22C55E]" : "text-red-500"
                                    }`}
                                    >
                                    {item.icon}
                                    {item.change}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="border rounded-xl p-4 w-1/3">
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                        <h1 className="flex items-center font-semibold space-x-1">
                            <span>Top Turnovers</span>
                            <RiExchangeDollarFill />
                        </h1>
                        <div className="flex items-center cursor-pointer font-medium text-sm">
                            <span>View More</span>
                            <FaChevronRight className="ml-1" />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3 text-sm">
                        {data.topTurnOvers.map((item, i) => (
                            <div key={i} className="flex justify-between items-center">
                                <span>{item.name}</span>
                                <div className="flex items-center">
                                    <span>{Number(item.rate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="border rounded-xl p-4 w-1/3">
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                        <h1 className="flex items-center font-semibold space-x-1">
                            <span>Top Sectors</span>
                            <RiBarChart2Fill className="" />
                        </h1>
                        <div className="flex items-center cursor-pointer font-medium text-sm">
                            <span>View More</span>
                            <FaChevronRight className="ml-1" />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3 text-sm">
                        {data.topSectors.map((item, i) => (
                            <div key={i} className="flex justify-between items-center">
                                <span>{item.name}</span>
                                <div className="flex items-center">
                                    <span>{Number(item.rate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center bg-[#F0F4FA] px-6 py-3 rounded-xl mx-12 my-4 w-max">
            <div className="flex items-center space-x-3">
            <h1 className="text-[#1E88E5] font-medium poppins">
                Quick Announcements
            </h1>
            <HiOutlineSpeakerphone className="text-[#1E88E5] text-lg" />
        </div>
        <FaChevronRight className="ml-2" />
        </div>

    </>
    
  );
};
