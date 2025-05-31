import { useState } from "react";

import { FILTER_LABELS } from "@/constants";
import Pill from "./Pill";

const FilterSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>(
    FILTER_LABELS[0]
  );

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <section className="flex flex-row flex-wrap gap-3 items-center">
      {FILTER_LABELS.map((filterText: string, index: number) => (
        <Pill
          key={index}
          isSelected={selectedFilter === filterText}
          label={filterText}
          onClick={handleFilterChange}
        />
      ))}
    </section>
  );
};

export default FilterSection;
