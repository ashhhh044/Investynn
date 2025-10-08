import InvestIllustration from '../assets/Invest_Illustration.png'
import Vector from '../assets/Vector.png'

const Sec2 = () => {
  return (
    <>
      <section className="flex items-center justify-center px-20 mx-auto bg-[rgba(255,255,255,0.63)] max-w-7xl">
        <div className="flex flex-row items-center justify-between border-t-3 border-b-3 border-[var(--line)] w-[98%] py-10 gap-20">
          <div className="flex flex-col gap-4">
            <h1 className="poppins text-6xl font-bold relative text-[rgba(30,136,229,1)] tracking-widest">
              Investing <br />
              made
              <span className="rock-salt text-[rgba(30,136,229,1)] ml-2.5 text-4xl">
                Simple
              </span>
            </h1>
            <button className="poppins tracking-wide px-2 py-2 rounded-lg bg-[rgba(30, 136, 229, 1)] border-2 border-[var(--primary)] text-lg text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition w-max">
              Start Your Journey
            </button>
          </div>
          <div className="flex">
            <img src={InvestIllustration} alt="invest_illustration" />
          </div>
        </div>
      </section>

    </>
  )
}

export default Sec2