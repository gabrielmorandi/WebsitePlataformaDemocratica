"use client"
import { GraduationCap } from "lucide-react"
import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-purple max-w-[1160px]">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="flex items-start justify-between w-full gap-2 py-4"
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            aria-label={item.title}
          >
            <GraduationCap color="#5A007A" className="min-w-6" />
            <h2 className="w-full text-lg font-semibold text-left text-purple">
              {item.title}
            </h2>
            <ChevronDown
              color="#5A007A"
              className={`min-w-6 transform transition-transform duration-300 ${
                index === openIndex ? "rotate-180" : null
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              index === openIndex
                ? "max-h-[1650px] md:max-h-[475px]"
                : "max-h-0"
            }`}
          >
            <p
              className={`pb-2 pl-8 text-lg leading-tight duration-300 ease-in transition-opacity ${
                index === openIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
