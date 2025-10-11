import Image1 from '../assets/Section1/Image1.png'
import Image2 from '../assets/Section1/Image2.png'
import Image3 from '../assets/Section1/Image3.png'

const Section1 = () => {
  return (
    <>
     <div className="flex justify-between mx-12 py-4 gap-4">
            <div className="">
                <img src={Image1} alt="Grid Item 1" />
            </div>
            <div className="">
                <img src={Image2} alt="Grid Item 2" />
            </div>
            <div className="">
                <img src={Image3} alt="Grid Item 3" />
            </div>
     </div>        
    </>
  )
}

export default Section1