"use client"

import dynamic from "next/dynamic"
import "react-calendar/dist/Calendar.css"
import "./calendar.css" // se quiser customização via Tailwind/CSS

const Calendar = dynamic(() => import("react-calendar"), { ssr: false })

export default function CalendarioEventos() {
  return (
    <div className="flex justify-center mt-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Calendar
          locale="pt-BR"
          tileClassName={({ date, view }) => {
            if (view === "month" && ["2025-04-15", "2025-05-22"].includes(date.toISOString().split("T")[0])) {
              return "bg-blue-100 text-blue-800 font-semibold"
            }
          }}
        />
      </div>
    </div>
  )
}
