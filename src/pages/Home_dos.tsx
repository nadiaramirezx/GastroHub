import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecetas } from '../Componentes/RecetasContext'; // Contexto
import DashboardHeader from '../Componentes/Header_dos';
import Footer from '../Componentes/Footer';
import '../css/Home_dos.css'; // Archivo CSS para los estilos

const Dashboard: React.FC = () => {
  const navigate = useNavigate(); // Inicializa el hook useNavigate
  const { recetas, eliminarReceta, actualizarReceta } = useRecetas(); // Contexto para recetas (agregamos actualizarReceta)
  const [filtro, setFiltro] = useState<string>(''); // Estado para el filtro
  const [recetaSeleccionada, setRecetaSeleccionada] = useState<any | null>(null); // Estado para la receta seleccionada
  const [mostrarModal, setMostrarModal] = useState<boolean>(false); // Controla la visibilidad del modal
  const [modoEdicion, setModoEdicion] = useState<boolean>(false); // Indica si estamos editando

  // Filtra las recetas basadas en la categoría seleccionada
  const recetasFiltradas = recetas.filter((receta) =>
    filtro ? receta.categoria === filtro : true
  );

  const guardarCambios = () => {
    if (recetaSeleccionada) {
      // Llamar a la función actualizarReceta para guardar los cambios
      actualizarReceta(recetaSeleccionada); // Implementa esta función en el contexto o donde manejes el estado
      setMostrarModal(false);
      setModoEdicion(false);
    }
  };

  return (
    <>
      <DashboardHeader />
      <div className="dashboard-banner">
        <div className="banner-content">
          <h1 className="animated-title">Mis Recetas</h1>
        </div>
      </div>
      <div className="dashboard-filters">
        <select
          className="category-filter"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="">Todas las Categorías</option>
          <option value="desayunos">Desayunos</option>
          <option value="almuerzos">Almuerzos</option>
          <option value="cenas">Cenas</option>
          <option value="postres">Postres</option>
        </select>

        <input
          type="text"
          placeholder="Buscar recetas..."
          className="search-bar"
        />

        <button
          className="create-recipe-btn"
          onClick={() => navigate('/crear-receta')}
        >
          Crear Receta
        </button>
      </div>

      <div className="recetas-container">
        {recetasFiltradas.map((receta) => (
          <div key={receta.id} className="receta-card">
            <img
              src={receta.imagen || 'https://via.placeholder.com/150'}
              alt={receta.titulo}
              className="receta-img"
            />
            <h2>{receta.titulo}</h2>
            <p>{receta.descripcion.slice(0, 50)}...</p>
            <div className="card-actions">
              <button
                onClick={() => {
                  setRecetaSeleccionada(receta);
                  setMostrarModal(true);
                  setModoEdicion(false);
                }}
              >
                Ver
              </button>
              <button onClick={() => eliminarReceta(receta.id)}>Eliminar</button>
              <button
                onClick={() => {
                  setRecetaSeleccionada(receta);
                  setMostrarModal(true);
                  setModoEdicion(true);
                }}
              >
                Editar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {mostrarModal && recetaSeleccionada && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-modal"
              onClick={() => {
                setMostrarModal(false);
                setModoEdicion(false);
              }}
            >
              ✖
            </button>
            {modoEdicion ? (
              // Formulario de edición con botón Guardar
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  guardarCambios();
                }}
              >
                <h2>Editar Receta</h2>
                <label>
                  Título:
                  <input
                    type="text"
                    value={recetaSeleccionada.titulo}
                    onChange={(e) =>
                      setRecetaSeleccionada({
                        ...recetaSeleccionada,
                        titulo: e.target.value,
                      })
                    }
                  />
                </label>
                <label>
                  Descripción:
                  <textarea
                    value={recetaSeleccionada.descripcion}
                    onChange={(e) =>
                      setRecetaSeleccionada({
                        ...recetaSeleccionada,
                        descripcion: e.target.value,
                      })
                    }
                  />
                </label>
                <label>
                  Categoría:
                  <select
                    value={recetaSeleccionada.categoria}
                    onChange={(e) =>
                      setRecetaSeleccionada({
                        ...recetaSeleccionada,
                        categoria: e.target.value,
                      })
                    }
                  >
                    <option value="desayunos">Desayunos</option>
                    <option value="almuerzos">Almuerzos</option>
                    <option value="cenas">Cenas</option>
                    <option value="postres">Postres</option>
                  </select>
                </label>
                <button type="submit">Guardar Cambios</button>
              </form>
            ) : (
              // Vista de detalles
              <>
                <img
                  src={
                    recetaSeleccionada.imagen || 'https://via.placeholder.com/150'
                  }
                  alt={recetaSeleccionada.titulo}
                  className="modal-img"
                />
                <h2>{recetaSeleccionada.titulo}</h2>
                <p>{recetaSeleccionada.descripcion}</p>
                <p>
                  <strong>Categoría:</strong> {recetaSeleccionada.categoria}
                </p>
              </>
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Dashboard;
