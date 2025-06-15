import BookingSection from "@/components/property/BookingSection";
import PropertyDetail from "@/components/property/PropertyDetail";
import ReviewSection from "@/components/property/ReviewSection";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { slugify } from "@/utils/slugify";
import { useRouter } from "next/router";

const PropertyPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find(
    (item) => slugify(item.name) === id
  );

  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <PropertyDetail property={property} />
      <BookingSection price={property.price} />
      <ReviewSection reviews={property.reviews} />
    </div>
  );
};

export default PropertyPage;
