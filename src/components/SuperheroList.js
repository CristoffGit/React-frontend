import React from "react";
import listStyles from "../styles/listStyles.js";

const SuperheroList = ({
  superheroes,
  currentPage,
  totalPages,
  setCurrentPage,
  limit,
  setLimit,
  totalSuperheroes,
}) => {
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePerPageChange = (event) => {
    const value = event.target.value;
    setLimit(Number(value));
    setCurrentPage(1); // Reset to the first page when the limit changes
  };

  const itemsPerPage = limit;
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = limit === -1 ? totalSuperheroes : Math.min(startIndex + itemsPerPage - 1, totalSuperheroes);

  return (
    <div>
      {/* Table for displaying superheroes */}
      <table style={listStyles.table}>
        <thead>
          <tr>
            <th style={listStyles.tableHeader}>ID</th>
            <th style={listStyles.tableHeader}>Name</th>
            <th style={listStyles.tableHeader}>Superpower</th>
            <th style={listStyles.tableHeader}>Humility Score</th>
          </tr>
        </thead>
        <tbody>
          {superheroes.map((hero) => (
            <tr key={hero.id} style={listStyles.tableRow}>
              <td style={listStyles.tableCell}>{hero.id}</td>
              <td style={listStyles.tableCell}>{hero.name}</td>
              <td style={listStyles.tableCell}>{hero.superpower}</td>
              <td style={listStyles.tableCell}>{hero.humilityScore}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Control Bar */}
      <div style={listStyles.paginationBar}>
        <div style={listStyles.rowsPerPage}>
          <span>Rows per page:</span>
          <select
            onChange={handlePerPageChange}
            value={itemsPerPage}
            style={listStyles.select}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="-1">All</option>
          </select>
        </div>

        <div style={listStyles.pageInfo}>
          {startIndex}–{endIndex} of {totalSuperheroes}
        </div>

        <div style={listStyles.pageButtons}>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            style={currentPage === 1 ? listStyles.paginationButtonDisabled : listStyles.paginationButton}
          >
            ❮
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            style={currentPage === totalPages ? listStyles.paginationButtonDisabled : listStyles.paginationButton}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuperheroList;
