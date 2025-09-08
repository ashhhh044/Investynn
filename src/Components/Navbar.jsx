
const Navbar = () => {
  return (
    <nav className="top-0 z-50  w-7xl bg-white mx-auto rounded-2xl mt-4">
        <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
            
            <div className="flex items-center ms-px">
                <span className="text-3xl font-bold tracking-tight text-[var(--primary)]">
                Investynn
                </span>
            </div>

            <ul className="hidden md:flex items-center space-x-10 text-[var(--text-pri)] font-medium text-lg">
                <li className="hover:text-[var(--gray)] cursor-pointer">Home</li>
                <li className="hover:text-[var(--gray)] cursor-pointer">Learn</li>
                <li className="hover:text-[var(--gray)] cursor-pointer">Pricing</li>
                <li className="hover:text-[var(--gray)] cursor-pointer">About</li>
                <li className="hover:text-[var(--gray)] cursor-pointer">Blogs</li>
            </ul>

            <div className="flex items-center gap-4">
                <button className="px-5 py-2 rounded-lg border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white">
                Login
                </button>
                <button className="px-5 py-2 rounded-lg border-2 bg-(--primary) text-white hover:bg-white hover:text-[var(--primary)]">
                Signup
                </button>
            </div>

            </div>
        </div>
    </nav>

  )
}

export default Navbar