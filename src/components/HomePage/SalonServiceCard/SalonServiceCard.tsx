import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin } from 'lucide-react';

type SalonServiceCardProps = {
  imageSrc: string;
  salonName: string;
  profileImg: string;
  rating: number;
  reviewCount: number;
  serviceDescription: string;
  price: string;
  location: string;
};

export default function SalonServiceCard({
  imageSrc,
  salonName,
  profileImg,
  rating,
  reviewCount,
  serviceDescription,
  price,
  location
}: SalonServiceCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-[15px]">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={`${salonName} image`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-[15px]"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div
              className="w-8 h-8 mr-2 bg-gray-200 rounded-full"
              style={{ backgroundImage: `url(${profileImg})`, backgroundSize: 'cover' }}
            ></div>
            <h2 className="text-base font-semibold">{salonName}</h2>
          </div>
          <div className="flex items-center text-sm text-gray-600">
  <Star className="w-4 h-4 text-orange-400 mr-1" fill="currentColor" />
  <span>{rating} ({reviewCount})</span>
</div>

        </div>
        <p className="text-gray-600 mb-2 font-medium">{serviceDescription}</p>
        <p className="font-bold mb-2">From {price}</p>
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>
      </CardContent>
    </Card>
  );
}
