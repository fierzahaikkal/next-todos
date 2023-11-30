import React from "react";

interface FilterButtonProps {
  selectedFilter: string;
  onFilterChange: (newFitler: string) => void;
}

export const FilterButton = ({
  selectedFilter,
  onFilterChange,
}: FilterButtonProps) => {
  const filters = ["All", "Doing", "Completed"];
  return (
    <div className="flex gap-x-6 px-2 text-medium-purple-600">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`hover:text-medium-purple-800 active:text-medium-purple-600 cursor-pointer ${
            filter === selectedFilter ? "font-bold" : ""
          }}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
