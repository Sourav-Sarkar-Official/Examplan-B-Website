"use client"

import { useState } from "react"
import { notes, departments, semesters, noteTypes, priceFilters } from "@/lib/notes-data"
import { NoteCard } from "@/components/note-card"
import { Button } from "@/components/ui/button"

export default function NotesPage() {
  const [selectedSemester, setSelectedSemester] = useState<string>("all")
  const [selectedNoteType, setSelectedNoteType] = useState<string>("all")
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all")
  const [selectedPrice, setSelectedPrice] = useState<string>("all")

  const filteredNotes = notes.filter((note) => {
    const matchesSemester = selectedSemester === "all" || note.semester === selectedSemester
    const matchesNoteType = selectedNoteType === "all" || note.noteType === selectedNoteType
    const matchesDepartment = selectedDepartment === "all" || note.department === selectedDepartment
    const matchesPrice = selectedPrice === "all" || 
      (selectedPrice === "paid" ? note.isPaid : !note.isPaid)
    
    return matchesSemester && matchesNoteType && matchesDepartment && matchesPrice
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Study Notes</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access high-quality study materials for all MAKAUT courses
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="px-4 py-2 bg-card border rounded-lg text-foreground"
          >
            <option value="all">All Semesters</option>
            {semesters.filter(sem => sem !== "all").map((semester) => (
              <option key={semester} value={semester}>
                {semester} Semester
              </option>
            ))}
          </select>

          <select
            value={selectedNoteType}
            onChange={(e) => setSelectedNoteType(e.target.value)}
            className="px-4 py-2 bg-card border rounded-lg text-foreground"
          >
            <option value="all">All Types</option>
            {noteTypes.filter(type => type !== "all").map((type) => (
              <option key={type} value={type} className="capitalize">
                {type}
              </option>
            ))}
          </select>

          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-4 py-2 bg-card border rounded-lg text-foreground"
          >
            <option value="all">All Departments</option>
            {departments.filter(dept => dept !== "all").map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>

          <select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="px-4 py-2 bg-card border rounded-lg text-foreground"
          >
            <option value="all">All Notes</option>
            {priceFilters.filter(price => price !== "all").map((price) => (
              <option key={price} value={price} className="capitalize">
                {price}
              </option>
            ))}
          </select>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No notes found for the selected filters
          </div>
        )}
      </div>
    </div>
  )
}
