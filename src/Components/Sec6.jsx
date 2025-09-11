import PhonesMockup from '../assets/2_Phones_Mockup.png'

const Sec6 = () => {
  return (
    <>
        <section className= "w-full mx-auto p-8">
            <div className="flex w-3/4 bg-white items-center justify-center mx-auto gap-8 p-4">
                <div className="flex flex-col gap-4">
                    <p className="text-4xl font-normal text-[var(--faq-blue)]">
                        Access Anywhere
                    </p>
                    <h1 className="text-5xl font-semibold text-[var(--faq-blue)]">
                    Download The Mobile App
                    </h1>
                    <button className="px-4 py-2 rounded-lg bg-[var(--primary)] border-2 border-[var(--primary) text-white hover:border-[var(--primary)] hover:bg-transparent hover:text-[var(--primary)] transition w-3xs">Download App</button>
                </div>
                <div className="image-container px-8">
                    <img src={PhonesMockup} alt="Phones Mockup" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Sec6