import { FaSearch } from "react-icons/fa"

export default function Section3() {

    const data = {
        categories: [
            {name: "All"},
            {name: "Hydro Power"},
            {name: "Commercial Banks"},
            {name: "Manufacturing"},
            {name: "Finance"},
            {name: "Life Insurance"},
            {name: "Investment Companies"},
            {name: "Micro Finance"},
        ]
    }
    
    return (
        <>
            <div className="flex mx-12 justify-between mt-6 py-2">
                <div className="flex overflow-x-auto no-scrollbar space-x-2 flex-1 mr-3">
                    {data.categories.map((item, i) => (
                        <div key={i} className="flex-shrink-0">
                            <ul className="">
                                <li className="mr-2 hover:text-[#1E88E5] hover:bg-[#E9F3FC] rounded-lg px-4 py-2 inter font-medium">{item.name}</li>
                            </ul>
                        </div>
                        
                    ))}
                </div>
                <div className="relative flex items-center bg-[#F0F4FA] rounded-xl px-2 py-1 w-sm">
                    <span className="text-gray-600 bg-white p-1 rounded-lg">
                        <FaSearch />
                    </span>
                    <input type="text" id="search-navbar" className="flex-1 bg-transparent outline-none text-sm placeholder-[#8C8C8C] placeholder-text-inter ml-2" placeholder="Search"/>
                </div>
            </div>
        </>
    )
}