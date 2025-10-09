import Investynn_Logo from '../assets/Investynn_Logo.png'

const Navbar = () => {
  return (
    <nav className="top-10 z-50  w-9/10 bg-[rgba(255,255,255,0.39)] mx-auto rounded-2xl mt-4">
        <div className="container mx-auto px-8 py-3">
            <div className="flex items-center justify-between">
            
            <div className="flex items-center ms-px">
                <span className="text-3xl font-bold tracking-tight text-[var(--primary)]">
                <img src={Investynn_Logo} alt="Logo" className="scale-120"/>
                </span>
            </div>

            <ul className="hidden md:flex items-center gap-14 text-[var(--text-pri)] font-medium text-lg">
                <li className="hover:text-[var(--gray)] cursor-pointer px-2">Home</li>
                <li className="hover:text-[var(--gray)] cursor-pointer px-2">Learn</li>
                <li className="hover:text-[var(--gray)] cursor-pointer px-2">Pricing</li>
                <li className="hover:text-[var(--gray)] cursor-pointer px-2">About</li>
                <li className="hover:text-[var(--gray)] cursor-pointer px-2">Blogs</li>
            </ul>

            <div className="flex items-center gap-4">
                <button className="min-w-[100px] px-5 py-1.5 rounded-xl border-2 border-[var(--primary)] text-[var(--primary)] bg-transparent hover:bg-[var(--primary)] hover:text-white">
                    Login
                </button>
                <button className="min-w-[100px] px-5 py-1.5 rounded-xl border-2 border-[var(--primary)] bg-[var(--primary)] text-white hover:bg-white hover:text-[var(--primary)]">
                    Signup
                </button>
            </div>

            </div>
        </div>
    </nav>

  )
}

export default Navbar