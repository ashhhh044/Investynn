import { FaChevronRight, FaLevelUpAlt } from "react-icons/fa"


const Section2 = () => {
  return (
    <div className="flex justify-between mx-12 py-4 gap-4">
            <div className="border rounded-xl p-4">
                <div className="flex justify-between items-center space-x-20">
                    <div className="flex justify-between items-center space-x-2">
                        <h1 className="">Top Gainers</h1>
                        <span>
                            <FaLevelUpAlt />
                        </span>
                    </div>
                    <div className="flex items-center">
                        <h1>View More</h1>
                        <span>
                            <FaChevronRight />
                        </span>
                    </div>
                </div>
            </div>
            <div className="border rounded-xl">
                item1
            </div>
            <div className="border rounded-xl">
                item1
            </div>
            
     </div> 
  )
}

export default Section2