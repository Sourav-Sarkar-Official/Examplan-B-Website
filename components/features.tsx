export default function Features() {
  function BookIcon({ className = "w-8 h-8" }: { className?: string }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className={className}
      >
        <path fill="#27be09a4" d="M12 20q-1.2-.95-2.6-1.475T6.5 18q-1.05 0-2.062.275T2.5 19.05q-.525.275-1.012-.025T1 18.15V6.1q0-.275.138-.525T1.55 5.2q1.15-.6 2.4-.9T6.5 4q1.85 0 3.15.425t2.8 1.3q.275.15.413.35T13 6.6v10.45q1.1-.525 2.213-.788T17.5 16q.9 0 1.763.15T21 16.6V4.575q.375.125.738.275t.712.35q.275.125.413.375T23 6.1v12.05q0 .575-.488.875t-1.012.025q-.925-.5-1.937-.775T17.5 18q-1.5 0-2.9.525T12 20m3.5-6V3l3-1v11z" />
      </svg>
    )
  }

  function TargetIcon({ className = "w-8 h-8" }: { className?: string }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className={className}
      >
        <g fill="none">
          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
          <path fill="#0e37beff" d="M12 2c.896 0 1.764.118 2.59.339l-2.126 2.125A3 3 0 0 0 12.04 5H12a7 7 0 1 0 7 7v-.04q.29-.18.535-.425l2.126-2.125c.221.826.339 1.694.339 2.59c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m-.414 5.017c0 .851-.042 1.714.004 2.564l-.54.54a2 2 0 1 0 2.829 2.829l.54-.54c.85.046 1.712.004 2.564.004a5 5 0 1 1-5.397-5.397m6.918-4.89a1 1 0 0 1 .617.923v1.83h1.829a1 1 0 0 1 .707 1.707L18.12 10.12a1 1 0 0 1-.707.293H15l-1.828 1.829a1 1 0 0 1-1.415-1.415L13.586 9V6.586a1 1 0 0 1 .293-.708l3.535-3.535a1 1 0 0 1 1.09-.217" />
        </g>
      </svg>
    )
  }

  function InteractiveIcon({ className = "w-8 h-8" }: { className?: string }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className={className}
      >
        <path fill="#be0e0e" d="M6.65 8.15q.15.15.35.15t.35-.15l1.3-1.3q.15-.15.15-.35t-.15-.35l-1.3-1.3Q7.2 4.7 7 4.7t-.35.15l-1.3 1.3q-.15.15-.15.35t.15.35zM16.5 7q.625 0 1.063-.437T18 5.5t-.437-1.062T16.5 4t-1.062.438T15 5.5t.438 1.063T16.5 7M6 23q-.425 0-.712-.288T5 22v-1.1q0-.875.488-1.625t1.287-1.125q1.225-.575 2.55-.862T12 17t2.675.288t2.55.862q.8.375 1.288 1.125T19 20.9V22q0 .425-.287.713T18 23zm6-7q-1.45 0-2.475-1.025T8.5 12.5t1.025-2.475T12 9t2.475 1.025T15.5 12.5t-1.025 2.475T12 16M2 3q0-.825.588-1.412T4 1h16q.825 0 1.413.588T22 3v9q0 .825-.587 1.413T20 14h-2.125q-.425 0-.687-.325t-.213-.75Q17 12.7 17 12.463T16.975 12q-.2-1.9-1.612-3.2T12 7.5T8.637 8.8T7.025 12Q7 12.225 7 12.463t.025.462q.05.425-.213.75T6.126 14H4q-.825 0-1.412-.587T2 12z" />
      </svg>
    )
  }

  function MonitorIcon({ className = "w-8 h-8" }: { className?: string }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className={className}
      >
        <path fill="#0ebea0" d="M6.23 22H3.617q-.691 0-1.153-.462T2 20.385v-2.616h1v2.616q0 .269.173.442t.443.173H6.23zm11.54 0v-1h2.615q.269 0 .442-.173t.173-.442v-2.616h1v2.616q0 .69-.462 1.152T20.385 22zM12 17.73q-2.673 0-4.803-1.514Q5.067 14.7 3.981 12q1.086-2.7 3.216-4.216Q9.327 6.27 12 6.27t4.803 1.515T20.019 12q-1.086 2.7-3.216 4.216Q14.673 17.73 12 17.73m0-2.866q1.2 0 2.033-.832T14.866 12t-.833-2.033T12 9.135t-2.033.832T9.135 12t.832 2.033t2.033.833m0-1q-.779 0-1.322-.544q-.543-.543-.543-1.322t.543-1.322T12 10.135t1.322.543q.544.543.544 1.322t-.544 1.322q-.543.544-1.322.544M2 6.23V3.616q0-.691.463-1.153T3.616 2H6.23v1H3.616q-.27 0-.443.173T3 3.616V6.23zm19 0V3.616q0-.27-.173-.443T20.385 3h-2.616V2h2.616q.69 0 1.152.463T22 3.616V6.23z" />
      </svg>
    )
  }

  function CertificateIcon({ className = "w-8 h-8" }: { className?: string }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        role="img"
        aria-hidden="true"
        className={className}
      >
        <path fill="#d4bc1c" d="m29.7 19.3l-3-3c-.4-.4-1-.4-1.4 0L16 25.6V30h4.4l9.3-9.3c.4-.4.4-1 0-1.4M19.6 28H18v-1.6l5-5l1.6 1.6zm6.4-6.4L24.4 20l1.6-1.6l1.6 1.6zM10 23h2v2h-2zm4-5h4v2h-4zm-4 0h2v2h-2zm4-5h8v2h-8zm-4 0h2v2h-2z" />
        <path fill="#d4bc1c" d="M7 28V7h3v3h12V7h3v6h2V7c0-1.1-.9-2-2-2h-3V4c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v1H7c-1.1 0-2 .9-2 2v21c0 1.1.9 2 2 2h5v-2zm5-24h8v4h-8z" />
      </svg>
    )
  }

  function LearnPathIcon({ className = "w-8 h-8" }: { className?: string }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        role="img"
        aria-hidden="true"
        className={className}
      >
        <circle cx="9" cy="7" r="1" fill="#e114d0" />
        <path fill="#e114d0" d="M27 22.14V18a2 2 0 0 0-2-2h-8v-4h9a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h9v4H7a2 2 0 0 0-2 2v4.14a4 4 0 1 0 2 0V18h8v4h-3v8h8v-8h-3v-4h8v4.14a4 4 0 1 0 2 0M8 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2m10-2v4h-4v-4ZM6 10V4h20v6Zm20 18a2 2 0 1 1 2-2a2 2 0 0 1-2 2" />
      </svg>
    )
  }

  const features = [
    {
      icon: <BookIcon />,
      title: "Expert-Curated Content",
      description: "Learn from subject experts with years of experience teaching MAKAUT curriculum",
    },
    {
      icon: <TargetIcon />,
      title: "Focused Learning",
      description: "Structured courses designed specifically for MAKAUT semester exams",
    },
    {
      icon: <InteractiveIcon />,
      title: "Interactive Sessions",
      description: "Engage with live doubt-clearing sessions and interactive problem-solving",
    },
    {
      icon: <MonitorIcon />,
      title: "Progress Tracking",
      description: "Monitor your learning progress with detailed analytics and performance metrics",
    },
    {
      icon: <CertificateIcon />,
      title: "Proven Results",
      description: "95% of our students score above 8 CGPA",
    },
    {
      icon: <LearnPathIcon />,
      title: "Learn at Your Pace",
      description: "Access course materials and learn whenever you want, wherever you want",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Examplan-B?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            We provide everything you need to excel in your MAKAUT courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glow-card group p-8 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">
                <span className="inline-block text-yellow-500">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
