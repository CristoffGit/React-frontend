const appStyles = {
  container: {
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  subheading: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  addButton: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  // Header container to align title and button on the same line
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",  // Makes sure there is space between the title and button
    alignItems: "center",  // Ensures vertical alignment if they have different heights
    marginBottom: "20px",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // Add padding-top to ensure space for close button
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    position: "relative",  // Make the close button position relative to the modal
    paddingTop: "40px",  // Added extra padding at the top for the close button
  },
  closeButton: {
    position: "absolute",
    top: "10px",  // Distance from the top of the modal
    right: "10px",  
    border: "none",
    background: "none",
    fontSize: "20px",
    cursor: "pointer",
  },
};

export default appStyles;
