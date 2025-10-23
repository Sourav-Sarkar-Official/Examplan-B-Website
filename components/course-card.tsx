import Link from "next/link"
import type { Course } from "@/lib/courses-data"

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  const discountedPrice = Math.round(course.basePrice * (1 - course.discountPercent / 100))

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-accent transition-all duration-300 h-full flex flex-col">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-primary to-primary-light p-4 sm:p-6 text-white">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-balance line-clamp-2">{course.title}</h3>
        <p className="text-xs sm:text-sm text-gray-200">
          {course.semester} Semester • {course.stream}
        </p>
      </div>

      {/* Course Body */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">{course.description}</p>

        {/* Pricing */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl sm:text-3xl font-bold text-foreground">₹{discountedPrice}</span>
            <span className="text-sm line-through text-muted-foreground">₹{course.basePrice}</span>
          </div>
          <div className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
            {course.discountPercent}% OFF
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
          <Link
            href={`/course/${course.slug}`}
            className="flex-1 text-white font-semibold py-2 px-3 sm:px-4 rounded-lg transition text-center text-sm sm:text-base btn-accent"
          >
            View Details
          </Link>
          <a
            href="https://examplanb.my.canva.site"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-accent hover:bg-accent-light text-white font-semibold py-2 px-3 sm:px-4 rounded-lg transition text-center text-sm sm:text-base"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  )
}
