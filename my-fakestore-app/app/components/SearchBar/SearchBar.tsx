import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string, category: string) => void;
  categories: string[];
};

export default function SearchBar({ onSearch, categories }: SearchBarProps) {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueSearch = e.target.value;
    setSearch(valueSearch);
    onSearch(valueSearch, category);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valueCategory = e.target.value;
    setCategory(valueCategory);
    onSearch(search, valueCategory);
  };

  return (
    <div className="mb-4">
      <input
        id="search"
        type="text"
        placeholder="Buscar productos..."
        onChange={handleSearchChange}
        value={search}
        className="p-2 border border-gray-300 rounded"
      />

      <select
        id="category"
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