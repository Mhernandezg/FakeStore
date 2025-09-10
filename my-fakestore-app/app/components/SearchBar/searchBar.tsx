import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string, category: string) => void;
  categories: string[];
};

export default function SearchBar({ onSearch, categories }: SearchBarProps) {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value, category);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategory(value);
    onSearch(search, value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Buscar productos..."
        onChange={handleSearchChange}
        value={search}
        className="p-2 border border-gray-300 rounded"
      />

      <select
        value={category}
        onChange={handleCategoryChange}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="all">Todas</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}