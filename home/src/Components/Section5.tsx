import { FaChevronRight } from "react-icons/fa";
import Card1 from '../assets/Section5/Card1.png'
import Card2 from '../assets/Section5/Card2.png'
import Card3 from '../assets/Section5/Card3.png'
import Card4 from '../assets/Section5/Card4.png'
export default function Section5(){

    const data = [
        {
            id: 1, 
            img: Card1,
            category: "News Category",
            title: "News Title",
            publisher: "Publisher Name"
        },    
        {
            id: 2, 
            img: Card2,
            category: "News Category",
            title: "News Title",
            publisher: "Publisher Name"
        },    
        {
            id: 3, 
            img: Card3,
            category: "News Category",
            title: "News Title",
            publisher: "Publisher Name"
        },    
        {
            id: 4, 
            img: Card4,
            category: "News Category",
            title: "News Title",
            publisher: "Publisher Name"
        },    
    ]

return(
    <div className="mx-12 mt-8">
        <div className="flex items-center justify-between">
            <div className="inter font-medium">
                Featured News
            </div>
            <div className="flex items-center space-x-2 inter text-[#8C8C8C] font-semibold">
                <span>View More</span>
                <span>
                    <FaChevronRight/>
                </span>
            </div>
        </div>
        <div className="flex mt-4">
            <div className="flex justify-between py-4 gap-6">
                {data.map((item) =>(
                    <div
                    key={item.id}
                    className="space-y-3"
                    >
                        <img src={item.img} alt={item.title}/>
                        <div className="flex flex-col space-y-2">
                            <span className="inter text-xs font-medium text-[#575757]">{item.category}</span>
                            <span className="inter text-sm font-medium">{item.title}</span>
                            <span className="inter text-xs font-medium text-[#575757]">{item.publisher}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)
}