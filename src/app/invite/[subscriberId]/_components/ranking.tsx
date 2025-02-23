import React from 'react'
import Image from 'next/image'
import gold from '@/assets/medal-gold.svg'
import silver from '@/assets/medal-silver.svg'
import cooper from '@/assets/medal-cooper.svg'
import { getRanking } from '@/http/api'
const Ranking = async () => {
  const { ranking } = await getRanking()
  return (
    <div className="space-y-4">
      {ranking.map((item, index) => {
        const rankingPosition = index + 1
        return (
          <div
            className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            key={item.id}
          >
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">{rankingPosition}°</span> |{' '}
              {item.name}
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              {item.score}
            </span>
            {rankingPosition === 1 && (
              <Image src={gold} alt="gold" className="absolute top-0 right-8" />
            )}
            {rankingPosition === 2 && (
              <Image
                src={silver}
                alt="gold"
                className="absolute top-0 right-8"
              />
            )}
            {rankingPosition === 3 && (
              <Image
                src={cooper}
                alt="gold"
                className="absolute top-0 right-8"
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Ranking
