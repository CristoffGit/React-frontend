const listStyles = {
  table: {
    width: "100%",
    marginTop: "20px",
    borderCollapse: "collapse",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  tableHeader: {
    backgroundColor: "#333",
    color: "white",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
  },
  tableRow: {
    borderBottom: "1px solid #ddd",
  },
  tableCell: {
    padding: "12px",
    textAlign: "center",
  },
  paginationBar: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowsPerPage: {
    display: "flex",
    alignItems: "center",
  },
  select: {
    marginLeft: "10px",
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  pageInfo: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  pageButtons: {
    display: "flex",
    alignItems: "center",
  },
  paginationButton: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "0 5px",
  },
  paginationButtonDisabled: {
    padding: "10px 20px",
    backgroundColor: "#ddd",
    color: "gray",
    border: "none",
    borderRadius: "5px",
    cursor: "not-allowed",
    fontSize: "16px",
    margin: "0 5px",
  },
};

export default listStyles;
