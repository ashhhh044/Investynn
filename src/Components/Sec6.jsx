import PhonesMockup from '../assets/2_Phones_Mockup.png'

const Sec6 = () => {
  return (
    <>
        <section className="mx-auto px-10 py-16 relative mb-8 mt-8">
            <div className="flex bg-white items-center w-[90%] justify-center mx-auto gap-8 shadow-2xl rounded-4xl relative z-10">
                <div className="ml-4 flex flex-col">
                <div className="mb-2">
                    <p className="inter text-4xl font-normal text-[var(--faq-blue)] leading-[129%]">
                        Access Anywhere
                    </p>
                    <h1 className="text-5xl font-semibold text-[var(--faq-blue)] leading-[129%]">
                        Download The Mobile App
                    </h1>
                </div>                
                <button className="inter tracking-wide px-2 py-2 rounded-xl bg-[var(--primary)] border-2 border-[var(--primary)] text-lg text-white hover:border-[var(--primary)] hover:bg-transparent hover:text-[var(--primary)] transition w-3xs">
                    Download App
                </button>
                </div>

                <div className="image-container px-8 -mt-20">
                <img src={PhonesMockup} alt="Phones Mockup" className="relative z-20" />
                </div>
            </div>
        </section>

    </>
  )
}

export default Sec6