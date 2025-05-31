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
  image: string;
  discount: string;
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
