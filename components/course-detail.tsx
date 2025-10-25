"use client"

import { getCourseBySlug } from "@/lib/courses-data"
import Link from "next/link"
import { notFound } from "next/navigation"
import { WhatsappShareButton, WhatsappIcon, TelegramShareButton, TelegramIcon } from "react-share"

interface CourseDetailProps {
  slug: string
}

export default function CourseDetail({ slug }: CourseDetailProps) {
  const course = getCourseBySlug(slug)

  if (!course) {
    notFound()
  }

  const discountedPrice = Math.round(course.basePrice * (1 - course.discountPercent / 100))

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/courses" className="text-gray-200 hover:text-white mb-4 inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Courses
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{course.title}</h1>
          <p className="text-lg text-gray-200">
            {course.semester} Semester • {course.stream} Stream
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">About This Course</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{course.description}</p>
            </section>

            {/* What You'll Learn */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">What You'll Learn</h2>
              <ul className="space-y-3">
                {course.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-chart-1 font-bold text-lg mt-1">✓</span>
                    <span className="text-foreground text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Who Is This For */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Who Is This Course For?</h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground text-lg leading-relaxed">{course.whoIsThisFor}</p>
              </div>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Curriculum Outline</h2>
              <div className="space-y-4">
                {course.curriculum.map((module, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-bold text-lg text-foreground mb-4">{module.module}</h3>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex gap-3 items-start text-muted-foreground">
                          <span className="text-accent mt-1">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-card border border-border rounded-lg p-6 space-y-6">
              {/* Pricing */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Course Price</p>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-bold text-foreground">₹{discountedPrice}</span>
                  <span className="text-lg line-through text-muted-foreground">₹{course.basePrice}</span>
                </div>
                <div className="inline-block bg-accent text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {course.discountPercent}% OFF
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border"></div>

              {/* Course Info */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Semester</p>
                  <p className="font-semibold text-foreground">{course.semester} Semester</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Stream</p>
                  <p className="font-semibold text-foreground">{course.stream}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Modules</p>
                  <p className="font-semibold text-foreground">{course.curriculum.length} Modules</p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border"></div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a
                  href="https://examplanb.my.canva.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-accent hover:bg-accent-light text-white font-semibold py-3 px-4 rounded-lg transition text-center"
                >
                  Enroll Now
                </a>
                <Link
                  href="/courses"
                  className="block w-full font-semibold py-3 px-4 rounded-lg transition text-center btn-accent"
                >
                  View All Courses
                </Link>
              </div>

              {/* Divider */}
              <div className="border-t border-border"></div>

              {/* Share Buttons */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">Share this course:</p>
                <div className="flex gap-3">
                  <WhatsappShareButton
                    url={`https://examplanb.vercel.app/course/${slug}`}
                    title={`📌Check out this course: ${course.title}`}
                  >
                    <WhatsappIcon size={40} round />
                  </WhatsappShareButton>
                  <TelegramShareButton
                    url={`https://examplanb.vercel.app/course/${slug}`}
                    title={`📌Check out this course: ${course.title}`}
                  >
                    <TelegramIcon size={40} round />
                  </TelegramShareButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
