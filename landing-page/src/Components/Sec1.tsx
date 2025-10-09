import TrackDoodle from '../assets/Track_Doodle.png'
import GrowDoodle from '../assets/Grow_Doodle.png'
import GoogleLogo from '../assets/Google_logo.png'
import PhoneMockup from '../assets/Phone_Mockup.png'

const Sec1 = () => {
  return (
    <>
        <section className="mx-auto flex flex-col items-center justify-center pt-10 mt-10">
                <div className="flex flex-col items-center relative">
                   
                    <h1 className="text-7xl font-bold poppins relative flex items-center gap-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                        TRACK, LEARN, GROW
                    <span className="inline-block">                    
                        <span className="z-10 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                            <img
                            src={TrackDoodle}
                            alt="Track Doodle"
                            className="absolute -left-5 -top-8 -z-11"
                            />
                         </span>
                         <span className="inline-block ml-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">                        
                            <img
                            src={GrowDoodle}
                            alt="Grow Doodle"
                            className="absolute -right-4 -top-6 w-12 scale-130"
                            />
                        </span>
                    </span>
                    </h1>  
                    <br/>                  
                    
                    </div>
                    <h2 className="poppins font-medium text-2xl/3 text-[var(--text-pri)] mb-12">Track and manage your investments efficiently.</h2>            
                    <div>
                    <div className="flex items-center justify-between gap-4">
                       
                        <div className="flex items-center gap-3">
                            <p className="poppins font-semibold text-2xl text-[var(--gray)] leading-none">4.5</p>
                            <p className="poppins text-[var(--gray)] text-base leading-none">Rating on</p>
                            <img src={GoogleLogo} alt="Google_Logo"/>
<div className="h-10 w-[2px] bg-[rgba(151,151,151,0.5)] shadow-lg"></div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="min-w-[100px] px-5 py-1.5 rounded-xl border-1 border-[var(--primary)] text-[var(--primary)] bg-white font-semibold shadow-lg hover:shadow-2xl hover:bg-[var(--primary)] hover:text-white">
                            Download Now
                            </button>
                            <button className="min-w-[100px] px-5 py-1.5 rounded-xl border-1 border-[var(--primary)] bg-[var(--primary)] text-white font-semibold shadow-lg hover:shadow-2xl hover:bg-[rgba(255,255,255,0.39)] hover:text-[var(--primary)]">
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