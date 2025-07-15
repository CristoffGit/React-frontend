import React, { useState, useEffect } from "react";
import SuperheroForm from "./components/SuperheroForm";
import SuperheroList from "./components/SuperheroList";
import { fetchSuperheroes, addSuperhero } from "./services/superheroService";
import appStyles from "./styles/appStyles.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // Import the default styles for react-toastify

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(5); // Default superheroes per page
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadSuperheroes = async () => {
    const response = await fetchSuperheroes(currentPage, limit);
    setSuperheroes(response?.data);
    setTotalPages(response.totalPages);
    setTotal(response.total);
  };

  useEffect(() => {
    loadSuperheroes();
  }, [currentPage, limit]);

  const handleAddSuperhero = async (newHero) => {
    await addSuperhero(newHero);
    loadSuperheroes();
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={appStyles.container}>
      <h2 style={appStyles.heading}>Superhero Registry</h2>

      {/* Header container with both title and button on the same line */}
      <div style={appStyles.headerContainer}>
        <h3 style={appStyles.subheading}>Superheroes List</h3>
        <button onClick={openModal} style={appStyles.addButton}>
          Add New Superhero
        </button>
      </div>

      {isModalOpen && (
        <div style={appStyles.modalOverlay}>
          <div style={appStyles.modal}>
            <button onClick={closeModal} style={appStyles.closeButton}>X</button>
            <SuperheroForm onAddSuperhero={handleAddSuperhero} />
          </div>
        </div>
      )}

      <SuperheroList
        superheroes={superheroes}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        limit={limit}
        setLimit={setLimit}
        totalSuperheroes={total}
      />

      <ToastContainer /> {/* Add this to display the toast notifications */}
    </div>
  );
};

export default App;
