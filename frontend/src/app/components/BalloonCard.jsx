"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { InfosPDTC } from "../../../data/InfosPTDC"

export default function BalloonCard({ content, type }) {
  const [isHover, setIsHover] = useState(false)
  return (
    <div
      className="relative cursor-default"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <MessageCircle className="fill-purple stroke-purple size-9" />
      <p className="absolute top-0 left-0 w-full leading-9 text-center text-yellow font-bold">
        {content}
      </p>
      <div
        className="absolute w-max max-w-[235px] -z-50 font-semibold leading-tight text-center m text-balance opacity-0 bottom-0 bg-yellow text-purple text-sm data-[state=active]:z-50 data-[state=active]:bottom-10 data-[state=active]:opacity-100 transition-all delay-150 p-2 rounded-lg left-1/2 -translate-x-1/2"
        data-state={isHover ? "active" : "inactive"}
      >
        {type && type === 1
          ? InfosPDTC.principio.map((p) => {
              if (p.cod == content) {
                return p.title
              }
            })
          : type === 2
          ? InfosPDTC.tema.map((p) => {
              if (p.cod == content) {
                return p.title
              }
            })
          : type === 3
          ? InfosPDTC.diretriz.map((p) => {
              if (p.cod == content) {
                return p.title
              }
            })
          : InfosPDTC.principio.map((p) => {
              if (p.cod == content) {
                return p.title
              }
            })}
      </div>
    </div>
  )
}
