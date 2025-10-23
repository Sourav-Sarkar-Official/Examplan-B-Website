export default function Footer() {
  return (
    <footer className="bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Examplan-B</h3>
            <p className="text-gray-300">Smart Learning for MAKAUT Students</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-white transition">
                  Courses
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Our App</h4>
            <a href="https://examplanb.my.canva.site" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 rounded btn-accent shadow-lg">
              Download Now
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70">
          <p>&copy; 2025 Examplan-B. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
