"use client"

import { useState } from "react"

interface FAQItem {
  id: string
  category: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: "enrollment-1",
    category: "Enrollment",
    question: "How do I enroll in a course?",
    answer:
      "Click on the 'Enroll Now' button on any course card or course detail page. You'll be redirected to our app download page where you can complete the enrollment process.",
  },
  {
    id: "enrollment-2",
    category: "Enrollment",
    question: "Can I enroll in multiple courses at once?",
    answer:
      "Yes! You can enroll in as many courses as you want. Each course can be accessed independently through the app.",
  },
  {
    id: "enrollment-3",
    category: "Enrollment",
    question: "Is there an age requirement to enroll?",
    answer:
      "Our courses are designed for MAKAUT students. You should be a registered student of MAKAUT University to get the most out of our courses.",
  },
  {
    id: "app-1",
    category: "App Access",
    question: "How do I download the Examplan-B app?",
    answer:
      "Click the 'Download App' button on the homepage or any 'Enroll Now' button. You'll be taken to our app download page with links for iOS and Android.",
  },
  {
    id: "app-2",
    category: "App Access",
    question: "Is the app free to download?",
    answer:
      "Yes, the app is free to download. However, individual courses require enrollment and payment as per the pricing shown.",
  },
  {
    id: "app-3",
    category: "App Access",
    question: "Can I access courses on web and mobile?",
    answer: "Currently, our courses are optimized for mobile through the app. Web access is coming soon. Stay tuned!",
  },
  {
    id: "content-1",
    category: "Course Content",
    question: "How long does it take to complete a course?",
    answer:
      "Course duration varies depending on the subject. Most courses can be completed in 4-8 weeks with regular study. You can learn at your own pace.",
  },
  {
    id: "content-2",
    category: "Course Content",
    question: "Are there practice problems and quizzes?",
    answer:
      "Yes! Each course includes practice problems, quizzes, and assignments to help you reinforce your learning.",
  },
  {
    id: "content-3",
    category: "Course Content",
    question: "Can I download course materials?",
    answer: "Yes, you can download lecture notes and study materials for offline access through the app.",
  },
  {
    id: "refund-1",
    category: "Refunds",
    question: "What is your refund policy?",
    answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course. No questions asked!",
  },
  {
    id: "refund-2",
    category: "Refunds",
    question: "How do I request a refund?",
    answer:
      "Contact our support team through the app or email us at support@examplanb.com with your order details. We'll process your refund within 5-7 business days.",
  },
  {
    id: "refund-3",
    category: "Refunds",
    question: "Can I get a refund after 7 days?",
    answer:
      "Our standard refund window is 7 days. For special cases, please contact our support team and we'll review your request.",
  },
]

const categories = Array.from(new Set(faqData.map((item) => item.category)))

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0])

  const filteredFAQ = faqData.filter((item) => item.category === selectedCategory)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-background py-8 md:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4 text-balance">
            Need Help?
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about enrollment, app access, course content, and refunds.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setExpandedId(null)
                }}
                className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition text-sm sm:text-base ${
                  selectedCategory === category
                    ? "bg-accent text-white"
                    : "bg-card border border-border text-foreground hover:border-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 md:space-y-4">
          {filteredFAQ.map((item) => (
            <div key={item.id} className="bg-card border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between hover:bg-muted transition text-left"
              >
                <h3 className="font-semibold text-foreground text-base sm:text-lg">{item.question}</h3>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-accent transition-transform flex-shrink-0 ml-4 ${
                    expandedId === item.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {expandedId === item.id && (
                <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-border bg-muted/30">
                  <p className="text-foreground text-sm sm:text-base leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Still have questions?</h2>
          <p className="text-base sm:text-lg text-gray-100 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <a
            href="mailto:examplanbofficial@gmail.com"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition text-sm sm:text-base btn-accent font-semibold"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}
