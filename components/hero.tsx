import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white py-12 md:py-16 lg:py-20">
      {/* Subtle overlay so text pops on top of the gradient */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>

      {/* Decorative blurred shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[rgba(241,107,101,0.08)] rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgba(58,11,11,0.06)] rounded-full blur-3xl -ml-48 -mb-48"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-white/6 backdrop-blur-sm rounded-full border border-white/10">
                <span className="text-sm font-semibold text-white/95">Welcome to Smart Learning Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
                Master Your Subjects with
                <br />
                <span className="text-white">Expert Guidance</span>
              </h1>

              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
                Comprehensive courses designed specifically for MAKAUT students. Learn from experts and ace
                your exams with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/courses" className="inline-flex items-center justify-center px-7 py-3 btn-accent font-semibold rounded-lg transform hover:scale-105 active:scale-95 shadow-lg">
                Explore Courses
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <a href="https://examplanb.my.canva.site" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 btn-outline-accent font-semibold rounded-lg transform hover:scale-105 active:scale-95">
                Download App
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl md:text-3xl font-bold">500+</div>
                <p className="text-sm text-white/80">Students Enrolled</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">50+</div>
                <p className="text-sm text-white/80">Courses</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">4.5
                  <span className="text-yellow-400 gap-2"> ★</span>
                </div>
                <p className="text-sm text-white/80">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-80">
              <div className="absolute top-6 right-6 w-52 h-36 bg-white/6 backdrop-blur-md rounded-xl border border-white/10 p-4 shadow-lg transform transition hover:-translate-y-1">
                <div className="text-sm font-semibold text-white/90 mb-2 text-center">Semester Booster</div>
                <div className="text-2xl font-bold text-white text-center">99%</div>
                <p className="text-xs text-white/70 text-center">Students Pass</p>
              </div>

              <div className="absolute bottom-6 left-6 w-48 h-32 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-4 shadow-lg transform transition hover:-translate-y-1">
                <div className="text-sm font-semibold text-white/90 mb-2 text-center">Live + Recorded</div>
                <div className="text-2xl font-bold text-white text-center">50+</div>
                <p className="text-xs text-white/70 text-center">Hours of Content</p>
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-44 bg-white/4 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">Learn</div>
                  <p className="text-white/80">Grow</p>
                  <p className="text-white/80">Succeed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
