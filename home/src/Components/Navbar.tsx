import { FaCaretDown, FaCaretUp, FaChevronDown, FaMobileAlt, FaSearch } from 'react-icons/fa';
import Investynn_Logo from '../assets/Investynn_Logo.png'

const Navbar = () =>{
    return(
        <>
        <nav className="w-full">
            <div className="">
                <div className="flex justify-between items-center mx-auto py-4 px-12 w-full">
                    <ul className="flex items-center space-x-6">
                        <li className="flex items-center inter font-medium text-sm">
                            <span className="text-[#7F7F7F]">NEPSE:</span>
                            <span className="ml-1">2708.25</span>
                            <span className="flex items-center text-[#EF4444]">
                                <FaCaretDown className="ml-1 rounded-xl" />0.42%
                            </span>
                        </li>
                        <li className="flex items-center inter font-medium text-sm">
                            <span className="text-[#7F7F7F]">Sensitive:</span>
                            <span className="ml-1">2708.25</span>
                            <span className="flex items-center text-[#22C55E]">
                                <FaCaretUp className="ml-1 rounded-xl" />0.42%
                            </span>
                        </li>
                        <li className="flex items-center inter font-medium text-sm">
                            <span className="text-[#7F7F7F]">Float:</span>
                            <span className="ml-1">2708.25</span>
                            <span className="flex items-center text-[#FF0000]">
                                <FaCaretDown className="ml-1 rounded-xl" />0.42%
                            </span>
                        </li>
                        <li className="flex items-center inter font-medium text-sm">
                            <span className="text-[#7F7F7F]">Sen. Float:</span>
                            <span className="ml-1">2708.25</span>
                            <span className="flex items-center text-[#22C55E]">
                                <FaCaretUp className="ml-1 rounded-xl" />0.42%
                            </span>
                        </li>
                        <li className="flex items-center inter font-medium text-sm">
                            <span className="text-[#7F7F7F]">Banking:</span>
                            <span className="ml-1">2708.25</span>
                            <span className="flex items-center text-[#FF0000]">
                                <FaCaretDown className="ml-1 rounded-xl" />0.42%
                            </span>
                        </li>
                    </ul>
                    <div className="flex items-center space-x-6">
                        <span className="bg-[#F0F4FA] p-2 rounded-lg">
                            <FaMobileAlt />
                        </span>
                        <button className="inter font-bold text-[#FAFAFA] bg-[#1E88E5] px-4 py-2 rounded-3xl text-sm">Login</button>
                    </div>
                </div> 
                <div className="flex items-center justify-between px-12 w-full border-t border-b border-[#D9D9D980] py-4">
                    <div className="flex items-center space-x-2">
                        <img src={Investynn_Logo} alt="logo" className="h-12 w-auto" />
                    </div>

                    <ul className="flex items-center space-x-8 font-medium inter text-[#262626]">
                        <li className='flex items-center'>Market 
                            <span className='ml-1 font-extralight text-xs'>
                                <FaChevronDown />
                            </span> </li>
                        <li className='flex items-center'>Reports
                            <span className='ml-1 font-extralight text-xs'>
                                <FaChevronDown />
                            </span> 
                        </li>
                        <li>Portfolio</li>
                        <li className='flex items-center'>IPO
                            <span className='ml-1 font-extralight text-xs'>
                                <FaChevronDown />
                            </span> 
                        </li>
                        <li>Announcements</li>
                    </ul>

                    <div className="relative flex items-center bg-[#F0F4FA] rounded-xl px-2 py-2 w-lg">
                        <input
                        type="text"
                        id="search-navbar"
                        className="flex-1 bg-transparent outline-none text-sm placeholder-[#8C8C8C] placeholder-text-inter"
                        placeholder="Search company name or symbol..."
                        />
                        <span className="text-gray-600 bg-white p-1 rounded-lg">
                        <FaSearch />
                        </span>
                    </div>
                </div>
            </div>
        </nav>
        
        
        </>
    )
}

export default Navbar

