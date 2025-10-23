"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

export default function DiscountBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // set a default target 7 days from now
    const target = new Date()
    target.setDate(target.getDate() + 7)

    function update() {
      const now = new Date().getTime()
      const distance = target.getTime() - now
      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
      const mins = Math.floor((distance / (1000 * 60)) % 60)
      const secs = Math.floor((distance / 1000) % 60)

      setTimeLeft({ days, hours, mins, secs })
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  if (!visible) return null

  return (
    <div role="region" aria-label="Limited time offer" className="w-full">
      <div
        className="w-full overflow-hidden shadow-lg"
        style={{
          backgroundImage: "linear-gradient(90deg,#4b0b4b,#6f0f6f)",
        }}
      >
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* Left: text then timer (stack on mobile, inline on sm+) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1 min-w-0 px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex-1 min-w-0">
              <div className="text-sm sm:text-base font-bold text-yellow-300">Light up your skills this Diwali!</div>
              <div className="text-xs sm:text-sm text-yellow-200">Upto 55% off, Use DIWALI25</div>
            </div>

            <div className="flex-shrink-0">
              <div className="flex items-center bg-black/20 rounded-md px-2 py-1 sm:px-3 sm:py-2 mt-3 sm:mt-0">
                <div className="text-xs sm:text-sm text-yellow-200 mr-3">Ends in</div>
                <div className="flex gap-2 items-center">
                  <TimeBoxLarge label="DAYS" value={timeLeft.days} />
                  <TimeBoxLarge label="HOURS" value={timeLeft.hours} />
                  <TimeBoxLarge label="MINS" value={timeLeft.mins} />
                  <TimeBoxLarge label="SECS" value={timeLeft.secs} />
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA and close - appears below on mobile */}
          <div className="flex items-center gap-4 px-4 py-3 sm:px-6 lg:px-8 w-full sm:w-auto">
            <Link
              href="/courses"
              className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 rounded-full font-semibold shadow-lg"
              style={{ background: "#ffb703", color: "#2b0b2b" }}
            >
              GRAB NOW
            </Link>

            <button onClick={() => setVisible(false)} className="text-white/60 hover:text-white transition p-2 rounded" aria-label="Close banner">
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center px-2">
      <div className="min-w-[44px] text-center bg-white/10 text-white font-bold rounded-md py-1 text-sm tabular-nums">{String(value).padStart(2, "0")}</div>
      <div className="text-[10px] text-white/60 mt-1">{label}</div>
    </div>
  )
}

function TimeBoxLarge({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center px-1">
      <div className="min-w-[56px] text-center bg-white/8 text-yellow-300 font-extrabold rounded-md py-1 text-lg tabular-nums">{String(value).padStart(2, "0")}</div>
      <div className="text-[10px] text-yellow-200 mt-1">{label}</div>
    </div>
  )
}
