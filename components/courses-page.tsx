"use client"

import { useState } from "react"
import { getUniqueSemesters, getUniqueStreams, getCoursesByStream } from "@/lib/courses-data"
import CourseCard from "./course-card"

export default function CoursesPage() {
  const semesters = getUniqueSemesters()
  const [selectedSemester, setSelectedSemester] = useState(semesters[0])
  const [selectedStream, setSelectedStream] = useState<string | null>(null)

  const streams = getUniqueStreams(selectedSemester)
  const activeStream = selectedStream || streams[0]
  const courses = getCoursesByStream(selectedSemester, activeStream)

  return (
    <div className="min-h-screen bg-background py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4 text-balance">
            Explore Our Courses
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Curated courses for MAKAUT students. Choose your semester and stream to get started.
          </p>
        </div>

        {/* Semester Tabs */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xs font-semibold text-muted-foreground mb-3 md:mb-4 uppercase tracking-wide">
            Select Semester
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {semesters.map((semester) => (
              <button
                key={semester}
                onClick={() => {
                  setSelectedSemester(semester)
                  setSelectedStream(null)
                }}
                className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition text-sm sm:text-base ${
                  selectedSemester === semester
                    ? "bg-accent text-white"
                    : "bg-card border border-border text-foreground hover:border-accent"
                }`}
              >
                {semester} Semester
              </button>
            ))}
          </div>
        </div>

        {/* Stream Tabs */}
        {streams.length > 1 && (
          <div className="mb-8 md:mb-12">
            <h2 className="text-xs font-semibold text-muted-foreground mb-3 md:mb-4 uppercase tracking-wide">
              Select Stream
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {streams.map((stream) => (
                <button
                  key={stream}
                  onClick={() => setSelectedStream(stream)}
                  className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition text-sm sm:text-base ${
                    activeStream === stream
                      ? "btn-accent"
                      : "bg-card border border-border text-foreground hover:border-accent"
                  }`}
                >
                  {stream}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Courses Grid */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 md:mb-8">
            {activeStream} • {selectedSemester} Semester
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {courses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No courses available for this selection.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
