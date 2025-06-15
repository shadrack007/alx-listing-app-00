export interface CardProps {
  title: string;
  description: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface PropertyProps {
  name: string;
  address: AddressProps;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  images: string[];
  description: string;
  reviews: Review[];
  discount: string;
}

export interface Review {
  avatar: string;
  name: string;
  rating: number;
  comment: string;
}

interface AddressProps {
  state: string;
  city: string;
  country: string;
}

interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface FilterProps {
  label: string;
  isSelected: boolean;
  onClick: (selectedFilter: string) => void;
}

export interface PropertyCardProps {
  name: string;
  image: string;
  price: number;
  rating: number;
}
