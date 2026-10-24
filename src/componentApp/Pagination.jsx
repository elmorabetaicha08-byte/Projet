function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;
  return (
    <nav className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}
        aria-label="Page précédente"> ‹ </button>
      {Array.from({ length: totalPages }, (_, index) => {
        const p = index + 1;
        return (
          <button key={p} className={currentPage === p ? "active" : ""} onClick={() => onPageChange(p)}>
            {p}
          </button>
        );
      })}
      <button onClick={() => onPageChange(currentPage + 1)}disabled={currentPage === totalPages}
        aria-label="Page suivante"> › </button>
    </nav>
  );
}
export default Pagination;