import React from 'react'
import Image from 'next/image'
import gold from '@/assets/medal-gold.svg'
import silver from '@/assets/medal-silver.svg'
import cooper from '@/assets/medal-cooper.svg'
const Ranking = () => {
  return (
    <div className="space-y-4">
      <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
        <span className="text-sm text-gray-300 leading-none">
          <span className="font-semibold">1o</span> | Marvin Mussacate
        </span>
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          1300
        </span>
        <Image src={gold} alt="gold" className="absolute top-0 right-8" />
      </div>
      <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
        <span className="text-sm text-gray-300 leading-none">
          <span className="font-semibold">2o</span> | Marvin Mussacate
        </span>
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          1300
        </span>
        <Image src={silver} alt="gold" className="absolute top-0 right-8" />
      </div>
      <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
        <span className="text-sm text-gray-300 leading-none">
          <span className="font-semibold">3o</span> | Marvin Mussacate
        </span>
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          1300
        </span>
        <Image src={cooper} alt="gold" className="absolute top-0 right-8" />
      </div>
    </div>
  )
}

export default Ranking
