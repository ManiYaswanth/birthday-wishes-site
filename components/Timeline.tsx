"use client"
import { useState } from 'react'
import content from '../data/content.json'
import { withBasePath } from '../lib/assetPath'

const { chapter, title, entries } = content.timeline

export default function Timeline(){
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="timeline" data-reveal className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-sm uppercase tracking-[0.4em] text-[#D6488F] mb-4">{chapter}</div>
        <h2 className="text-4xl md:text-5xl font-semibold text-gradient-romance mb-12">{title}</h2>
        <div className="relative border-l border-[#E56AB3]/25 pl-8">
          {entries.map((entry, index) => (
            <div key={index} className="relative mb-10 last:mb-0">
              <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-[0_0_16px_rgba(255,107,157,0.5)]" />
              <button
                onClick={() => entry.photo && setActive(active === index ? null : index)}
                className="w-full text-left rounded-[1.5rem] border border-white/10 bg-card p-6 shadow-glow transition hover:-translate-y-1"
              >

                <div className="text-xl font-semibold text-[#6B2247]">{entry.title}</div>
                <p className="mt-3 text-[#6B2247]/80 leading-8">{entry.description}</p>
                {entry.photo && active === index && (
                  <img src={withBasePath(entry.photo)} alt={entry.title} className="mt-4 w-full max-h-72 rounded-2xl object-cover" />
                )}
                {entry.photo && active !== index && (
                  <div className="mt-3 text-xs uppercase tracking-[0.2em] text-[#D6488F]/70">Tap to see photo</div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
