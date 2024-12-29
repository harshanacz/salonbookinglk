import Image from 'next/image'
import Link from 'next/link'

export default function PromotionalBanner() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden mt-4 mb-4 rounded-[20px]">
      {/* Background Image */}
      <Image
        src="/images/Services/2.png"
        alt="Smiling person"
        fill
        className="object-cover"
        sizes="100vw"
      /> 
      
      {/* Semi-transparent dark purple overlay */}
      <div className="absolute inset-0 bg-purple-900 bg-opacity-60" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="mb-4 text-4xl font-bold text-center leading-tight">
          Get 30% Off on<br />Your First Booking!
        </h2>
        <Link
          href="/join"
          className="px-6 py-2 text-sm font-semibold text-white transition-colors duration-300 border border-white rounded-full hover:bg-white hover:text-purple-900"
        >
          Join
        </Link>
      </div>
    </div>
  )
}

