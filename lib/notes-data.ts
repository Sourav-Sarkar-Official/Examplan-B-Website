export interface Note {
  id: string
  title: string
  description: string
  semester: string
  department: string
  noteType: "suggestions" | "notes"
  isPaid: boolean
  price: number | null
  pdfUrl: string
  thumbnailUrl: string
}

export const notes: Note[] = [
  {
    id: "note-1",
    title: "Computer Organization CA4",
    description: "Comprehensive MCQ collection for Computer Organization. Perfect for exam preparation.",
    semester: "3rd",
    department: "CSE",
    noteType: "notes",
    isPaid: false,
    price: null,
    pdfUrl: "/CO_MCQ.pdf", // Replace with actual PDF path
    thumbnailUrl: "/placeholder.jpg" // Replace with actual thumbnail
  },
  {
    id: "note-2",
    title: "DSA CA4",
    description: "Comprehensive MCQ collection for Data Structures. Perfect for exam preparation.",
    semester: "3rd",
    department: "CSE",
    noteType: "notes",
    isPaid: false,
    price: null,
    pdfUrl: "/DS_MCQ_SET1.pdf",
    thumbnailUrl: "/placeholder.jpg" 
  }
]

export const semesters = ["all", "3rd"]
export const noteTypes = ["all", "Suggestions", "Notes"]
export const departments = ["all", "CSE"]
export const priceFilters = ["all", "Free", "Paid"]