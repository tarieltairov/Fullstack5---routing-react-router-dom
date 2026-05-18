import clsx from 'clsx';
import styles from './Pagination.module.scss';

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
    <div className={styles.pagination}>
      <button
        className={styles.pagination__btn}
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
      >
        ←
      </button>

      {pages.map((i) => (
        <button
          key={i}
          className={clsx(styles.pagination__btn, {
            [styles.pagination__btnActive]: i === page,
          })}
          onClick={() => onChange(i)}
        >
          {i}
        </button>
      ))}

      <button
        className={styles.pagination__btn}
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
      >
        →
      </button>
    </div>
  );
}
