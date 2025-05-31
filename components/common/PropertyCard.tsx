import Image from "next/image";

import { PropertyCardProps } from "@/interfaces";

const PropertyCard: React.FC<PropertyCardProps> = ({
  name,
  image,
  rating,
  price,
}) => {
  return (
    <div className="hover:cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-2xl bg-white">
      <Image
        className="rounded-2xl w-full"
        src={image}
        alt={`${name}-image`}
        width={453}
        height={305}
      />

      <div className="p-4">
        <div className="flex  justify-between my-3">
          <p className="text-2xl font-semibold">{name}</p>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/Star 2.svg"
              alt="star image"
              width={20}
              height={20}
            />
            <p className="font-medium text-lg">{rating}</p>
          </div>
        </div>

        <div>
          <p className="text-secondary text-2xl font-semibold text-right">
            ${price}/n
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
