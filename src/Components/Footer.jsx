import { PiFacebookLogoBold, PiInstagramLogo, PiLinkedinLogo } from 'react-icons/pi';
import { RiTwitterXLine, RiYoutubeLine } from 'react-icons/ri';


const Footer = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
        <hr className="w-2/3 h-[2px] bg-[var(--line-sec)] border-0 mb-6" />
        <div className="flex mt-4">
            <ul class="inter text-lg flex items-center text-[var(--footer)] font-medium justify-center">
              <li class="relative px-4 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-5 after:w-[1px] after:bg-[var(--footer)] after:shadow-[0_0_2px_rgba(0,0,0,0.3)]">
                Features
              </li>
              <li class="relative px-4 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-5 after:w-[1px] after:bg-[var(--footer)] after:shadow-[0_0_2px_rgba(0,0,0,0.3)]">
                Learn
              </li>
              <li class="relative px-4 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-5 after:w-[1px] after:bg-[var(--footer)] after:shadow-[0_0_2px_rgba(0,0,0,0.3)]">
                Pricing
              </li>
              <li class="relative px-4 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-5 after:w-[1px] after:bg-[var(--footer)] after:shadow-[0_0_2px_rgba(0,0,0,0.3)]">
                About
              </li>
              <li class="relative px-4">
                Contact
              </li>
            </ul>


        </div>        
        <div className="flex text-xl mt-6 items-center justify-around gap-8 mb-8">
          <a href="#" className="hover:text-blue-600 text-[var(--footer)] text-3xl"><PiFacebookLogoBold /></a>
          <a href="#" className="hover:text-pink-500 text-[var(--footer)] text-3xl"><PiInstagramLogo /></a>
          <a href="#" className="hover:text-blue-700 text-[var(--footer)] text-3xl"><PiLinkedinLogo /></a>
          <a href="#" className="hover:text-sky-500 text-[var(--footer)] text-3xl" ><RiTwitterXLine /></a>
          <a href="#" className="hover:text-red-600 text-[var(--footer)] text-3xl"><RiYoutubeLine /></a>          
      </div>
        <div>
          <p className="inter font-medium text-lg text-[var(--footer)] p-1">&copy; 2025 Investynn. All rights reserved.</p>
        </div>
        <div className="mb-20">
         <ul class="flex items-center text-[var(--footer)] font-medium justify-center">
          <li class="relative px-4 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-5 after:w-[1px] after:bg-[var(--footer)] after:shadow-[0_0_2px_rgba(0,0,0,0.3)]">
            Terms
          </li>
          <li class="relative px-4">
            Privacy
          </li>
        </ul>

        </div>
    </div>
    </>
  )
}

export default Footer