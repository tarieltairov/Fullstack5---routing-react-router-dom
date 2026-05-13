import './Pagination.css';

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function Pagination({ onChange, page, totalPages }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className='pagination'>
      <button
        className='pagination__btn'
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
      >
        ←
      </button>

      {pages.map((i) => (
        <button
          key={i}
          className={`pagination__btn ${i === page ? 'pagination__btn--active' : ''}`}
          onClick={() => onChange(i)}
        >
          {i}
        </button>
      ))}

      <button
        className='pagination__btn'
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
      >
        →
      </button>
    </div>
  );
}
