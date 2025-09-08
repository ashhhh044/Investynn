import TrackDoodle from '../assets/Track_Doodle.png'
import GrowDoodle from '../assets/Grow_Doodle.png'
import GoogleLogo from '../assets/Google_Logo.png'
import PhoneMockup from '../assets/Phone_Mockup.png'

const Sec1 = () => {
  return (
    <>
        <section className="mx-auto flex flex-col items-center justify-center pt-10">
                <div className="flex flex-col items-center relative">
                    <h1 className="text-7xl font-bold relative flex items-center gap-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                    <span className="relative inline-block">
                        <span className="relative z-10 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">TRACK</span>
                        <img
                        src={TrackDoodle}
                        alt="Track Doodle"
                        className="absolute left-0 -top-1 -z-11"
                        />
                    </span>
                    , LEARN,
                    <span className="relative inline-block ml-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                        GROW
                        <img
                        src={GrowDoodle}
                        alt="Grow Doodle"
                        className="absolute -right-8 -top-6 w-12"
                        />
                    </span>
                    </h1>
                    <br/>
                    </div>
                    <h2 className="font-medium text-2xl/3 text-[var(--text-pri)] mb-12">Track and manage your investments efficiently.</h2>            
                    <div>
                    <div className="flex items-center justify-between gap-8">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-2xl text-[var(--gray)]">4.5</span>
                            <p className="text-[var(--gray)] text-2xl">Rating on</p>
                            <span className="">
                                <img src={GoogleLogo} alt="Google_Logo"/>
                            </span>
                            <hr className="w-[1px] h-8 bg-[var(--gray-sec)]"/>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="px-6 py-1.5 rounded-lg border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition">
                            Download Now
                            </button>
                            <button className="px-6 py-1.5 rounded-lg bg-[var(--primary)] text-white hover:bg-transparent hover:text-[var(--primary)] hover:border-[var(--primary)] hover:border-2">
                            Try It
                            </button>
                        </div>
                    </div>            
                </div>
                <div>
                    <img src={PhoneMockup} alt="Phone Mockup" className="flex items-center justify-center mt-12"/>
                </div>
            </section> 
    </>

  )
}

export default Sec1