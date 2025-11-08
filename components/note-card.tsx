import { Note } from "@/lib/notes-data"

interface NoteCardProps {
  note: Note
}

export function NoteCard({ note }: NoteCardProps) {
  const handleDownload = () => {
    window.open(note.pdfUrl, '_blank')
  }

  const handlePreview = () => {
    window.open(note.pdfUrl, '_blank')
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-accent transition-all duration-300 h-full flex flex-col">
      {/* Note Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-600 p-4 sm:p-6 text-white">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-balance line-clamp-2">{note.title}</h3>
        <p className="text-xs sm:text-sm text-gray-200">
          {note.semester} Semester • {note.department}
        </p>
      </div>

      {/* Note Body */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">{note.description}</p>

        {/* Pricing Section */}
        <div className="mb-6">
          {note.isPaid ? (
            <>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl sm:text-3xl font-bold text-foreground">
                  ₹{note.price ?? 0}
                </span>
                <span className="text-sm line-through text-muted-foreground">
                  ₹{note.price ? Math.round(note.price * 2) : 0}
                </span>
              </div>
              <div className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                50% OFF
              </div>
            </>
          ) : (
            <div className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              FREE
            </div>
          )}
        </div>

        {/* Download Button */}
        <div className="mt-auto">
          <button
            onClick={note.isPaid ? undefined : handleDownload}
            className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center text-sm sm:text-base shadow-sm hover:shadow-md"
          >
            {note.isPaid ? "Enroll Now" : "Download"}
          </button>
        </div>
      </div>
    </div>
  )
}