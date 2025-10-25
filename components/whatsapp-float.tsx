"use client"

import React from "react"

export default function WhatsAppFloat() {
  const phone = "919875302724" // country code +91 + number
  const message = encodeURIComponent("I am interested in purchasing course")
  const href = `https://wa.me/${phone}?text=${message}`

  return (
    <div aria-hidden={false} className="fixed bottom-6 right-6 z-50">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20c659] text-white shadow-lg transition-transform transform hover:scale-105"
      >
        <span className="sr-only">Open WhatsApp chat</span>
        
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 30 30" 
          className="w-8 h-8 sm:w-10 sm:h-10"
          aria-hidden="true"
        >
          <path 
            fill="currentColor" 
            d="M15 2C7.925 2 2 7.925 2 15c0 2.4.655 4.642 1.783 6.57l-1.142 4.143c-.14.51.332.982.842.842l4.143-1.142A12.94 12.94 0 0 0 15 28c7.075 0 13-5.925 13-13S22.075 2 15 2zm-3.97 6.5c.313 0 .636-.002.895.05.313.06.658.558.83.788.172.23.364.61.437.732.073.122.122.267.024.439-.097.171-.147.293-.293.439-.147.146-.305.33-.464.439-.159.11-.122.415-.049.586.074.17.635 1.63 1.464 2.315.829.683 1.644.976 2.098 1.098.453.122.672.11.904-.073.233-.183.977-1.099 1.245-1.465.269-.366.489-.305.806-.183.318.122 2.026.927 2.368 1.098.343.17.562.256.635.402.073.146.073.854-.22 1.684-.292.829-1.684 1.61-2.368 1.684-.684.073-1.367.427-4.611-.927-3.245-1.355-5.077-4.441-5.224-4.636-.147-.195-1.196-1.532-1.196-2.975 0-1.444.708-2.126.977-2.418.269-.293.574-.366.867-.366z"
          />
        </svg>
      </a>
    </div>
  )
}
