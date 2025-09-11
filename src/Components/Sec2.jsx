import InvestIllustration from '../assets/Invest_Illustration.png'
import Vector from '../assets/Vector.png'

const Sec2 = () => {
  return (
    <>
        <section className="w-3/4 flex items-center justify-between border-2 px-20 mx-auto rounded-lg bg-white border-t-2 border-t-[var(--line)] border-b-2 border-b-[var(--line)] border-l-0 border-r-0">
        <div className="flex flex-col gap-4">
            <h1 className="text-7xl font-bold relative bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
            Investing <br />
            made{" "}
            <span className="zeyada bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                Simple
            </span>
            </h1>
            <button className="px-4 py-2 rounded-lg border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition w-3xs">Start Your Journey</button>
        </div>
        <div className="flex">
            <img src={InvestIllustration} alt="invest_illustration" />
        </div>
        </section>
    </>
  )
}

export default Sec2