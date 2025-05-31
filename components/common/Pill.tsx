import { FilterProps } from "@/interfaces";

const Pill: React.FC<FilterProps> = ({ label, onClick, isSelected }) => {
  return (
    <div
      className={`"${
        isSelected
          ? " border-primary text-primary"
          : " border-gray-300 text-secondary"
      } border-2 rounded-full px-4 py-2 cursor-pointer`}
      onClick={() => onClick(label)}
    >
      <p className="text-lg font-semibold">{label}</p>
    </div>
  );
};

export default Pill;
