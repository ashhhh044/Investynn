import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
        <hr className="w-2/3 h-[3px] bg-[var(--line-sec)] border-0" />
        <div className="flex mt-4">
            <ul className="flex items-center space-x-5 text-[var(--footer)] font-medium justify-center">
                <li className="border-r-2 px-4 last:border-none mr-0">Features</li>
                <li className="border-r-2 px-4 last:border-none mr-0">Learn</li>
                <li className="border-r-2 px-4 last:border-none mr-0">Pricing</li>
                <li className="border-r-2 px-4 last:border-none mr-0">About</li>
                <li className="border-r-2 px-4 last:border-none mr-0">Contact</li>
            </ul>
        </div>        
        <div className="flex space-x-6 text-xl mt-4">
          <a href="#" className="hover:text-blue-600 text-[var(--footer)]"><FaFacebookF /></a>
          <a href="#" className="hover:text-pink-500 text-[var(--footer)]"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-700 text-[var(--footer)]"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-sky-500 text-[var(--footer)]" ><FaTwitter /></a>
          <a href="#" className="hover:text-red-600 text-[var(--footer)]"><FaYoutube /></a>
      </div>
        <div>
          <p className="text-lg text-[var(--footer)] p-2">&copy; 2025 Investynn. All rights reserved.</p>
        </div>
        <div className="mb-4">
          <ul className="flex items-center space-x-5 text-[var(--footer)] font-medium justify-center">
                <li className="border-r-2 px-4 last:border-none mr-0">Terms</li>
                <li className="border-r-2 px-4 last:border-none mr-0">Privacy</li>
          </ul>
        </div>
    </div>
    </>
  )
}

export default Footer