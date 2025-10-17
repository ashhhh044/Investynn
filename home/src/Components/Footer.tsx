import { AiFillInstagram } from 'react-icons/ai';
import Investynn_Logo from '../assets/Investynn_Logo.png'
import { BiHelpCircle } from 'react-icons/bi';
import { BsTelephone, BsTwitterX } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { SiFacebook } from 'react-icons/si';
import { FaDiscord } from 'react-icons/fa';

export default function Footer (){
      const date = new Date().getFullYear();
    return(
        <>
            <div className="border border-l-0 border-r-0 border-t-[#D9D9D980] border-b-[#D9D9D980] shadow-2xs mx-12">
                <div className='container flex justify-between items-start py-6'>
                    <div className="content flex flex-col">
                        <span className='w-25'>
                            <img src={Investynn_Logo} alt="Logo"/>
                        </span>
                        <p className='inter font-medium text-[#595959] leading-[160%] text-xs mt-4'>
                            Investynn helps you manage and analyze stocks with ease — tracking prices,<br/> volumes, market caps, portfolio performance, corporate events, and market<br/> sentiment all in one place.
                        </p>
                    </div>
                    <div className="resources space-y-3">
                        <h1 className='inter font-medium text-[23px] text-[#454545]'>Resources</h1>
                        <ul className='space-y-3'>
                            <li className='inter font-medium text-sm text-[#595959]'>
                                Latest Market
                            </li>
                            <li className='inter font-medium text-sm text-[#595959]'>
                                Latest News
                            </li>
                            <li className='inter font-medium text-sm text-[#595959]'>
                                Daily Stock Quotes
                            </li>
                            <li className='inter font-medium text-sm text-[#595959]'>
                                Floorsheet
                            </li>
                            <li className='inter font-medium text-sm text-[#595959]'>
                                Indices
                            </li>
                        </ul>
                    </div>
                    <div className="company space-y-3">
                        <h1 className='inter font-medium text-[23px] text-[#454545] leading-[160%]'>Company</h1>
                        <ul className='space-y-3'>
                            <li className='inter font-medium text-sm text-[#595959]'>
                                About Us
                            </li>
                            <li className='inter font-medium text-sm text-[#595959]'>
                                Blog
                            </li>
                            <li className='inter font-medium text-sm text-[#595959]'>
                                Privacy Policy
                            </li>
                            <li className='inter font-medium text-sm text-[#595959]'>
                                Terms of Service
                            </li>
                        </ul>
                    </div>
                    <div className="help_and_support space-y-3">
                        <h1 className='inter font-medium text-[23px] text-[#454545] leading-[160%]'>Help & Support</h1>
                        <ul className='space-y-3'>
                            <li className='flex items-center inter font-medium text-sm text-[#595959] gap-2'>
                                <span><BiHelpCircle /></span>
                                Help Center
                            </li>
                            <li className='flex items-center inter font-medium text-sm text-[#595959] gap-2'>
                                <span><BsTelephone /></span>
                                Contact Us
                            </li>
                            <li className='flex items-center inter font-medium text-sm text-[#595959] gap-2'>
                                <span><FiMail /></span>
                                Mail Us
                            </li>
                        </ul>
                    </div>
                </div>
            <div className="mx-auto justify-center items-center flex gap-6 py-6">
                <div className='inter font-medium text-sm text-[#262626]'>Find Us On</div>
                <div className="flex gap-2.5">
                    <span>
                        <SiFacebook />
                    </span>                    
                    <span>
                        <AiFillInstagram />
                    </span>
                    <span>
                        <BsTwitterX />
                    </span>
                    <span>
                        <FaDiscord />
                    </span>
                </div>
            </div>
            </div>
            <div className='flex mx-auto justify-center gap-2 items-center py-6'>
                <span className='text-[#8C8C8C] font-medium text-xl'>&copy;</span>
                <span className='inter text-sm font-medium text-[#595959]'>{date} - Investynn  |  Powered by Void Nepal</span>
            </div>
        </>
    )
}