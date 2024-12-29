import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function BannerCard() {
  return (
    <div className=" bg-[var(--whiteColor)] p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full -mr-32 -mt-32 z-0"></div>
        
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-center mb-4">Find & Book an Appointment</h2>
          
          <p className="text-center text-gray-600 mb-6">
            Book beauty appointments online with salonbooking.lk. Find salons, view services, and book instantly.
          </p>
          
          <Image
  src="/images/Services/1.png"
  alt="Smiling woman"
  width={250}
  height={0} 
  className="mx-auto mb-4" 
/>


          
          <div className="text-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full">
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

