export default function NotesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <div className="mb-6">
            <div className="inline-block p-4 bg-accent/10 rounded-full mb-4">
              <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Study Notes</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            Comprehensive study notes for all MAKAUT courses are coming soon. Get ready to access well-organized,
            easy-to-understand notes that will help you ace your exams.
          </p>

          <div className="mt-12 p-8 bg-card border border-border rounded-xl shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <p className="text-muted-foreground">Courses Covered</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <p className="text-muted-foreground">Study Materials</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <p className="text-muted-foreground">Access Anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
