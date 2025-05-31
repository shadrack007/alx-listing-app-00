import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "./PropertyCard";
import { PropertyProps } from "@/interfaces";

const ListingSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {PROPERTYLISTINGSAMPLE.map(
        ({ name, price, rating, image }: PropertyProps, index: number) => (
          <PropertyCard
            key={index}
            name={name}
            price={price}
            rating={rating}
            image={image}
          />
        )
      )}
    </section>
  );
};

export default ListingSection;
