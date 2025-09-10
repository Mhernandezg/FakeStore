type PaginatorProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Paginator({
  currentPage,
  totalPages,
  onPageChange,
}: PaginatorProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-8 space-x-2">
      <button
        className="px-3 py-1 border rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          className={`px-3 py-1 border rounded ${
            currentPage === index + 1
              ? "bg-gray-800 text-white"
              : "bg-white"
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="px-3 py-1 border rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
}
