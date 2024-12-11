import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define la interfaz para una receta
interface Receta {
  id: number;
  titulo: string;
  descripcion: string;
  pasos: string;
  categoria: string;
  imagen: string | null; // La imagen será una URL o nula
}

// Define la interfaz para el contexto
interface RecetasContextProps {
  recetas: Receta[];
  agregarReceta: (receta: Receta) => void;
  eliminarReceta: (id: number) => void;
  actualizarReceta: (recetaActualizada: Receta) => void; // Nueva función
}

// Define las props del proveedor
interface RecetasProviderProps {
  children: ReactNode;
}

// Crea el contexto
const RecetasContext = createContext<RecetasContextProps | undefined>(undefined);

// Componente proveedor del contexto
export const RecetasProvider: React.FC<RecetasProviderProps> = ({ children }) => {
  const [recetas, setRecetas] = useState<Receta[]>([]);

  // Función para agregar una receta
  const agregarReceta = (receta: Receta) => {
    setRecetas((prevRecetas) => [...prevRecetas, receta]);
  };

  // Función para eliminar una receta
  const eliminarReceta = (id: number) => {
    setRecetas((prevRecetas) => prevRecetas.filter((receta) => receta.id !== id));
  };

  // Función para actualizar una receta
  const actualizarReceta = (recetaActualizada: Receta) => {
    setRecetas((prevRecetas) =>
      prevRecetas.map((receta) =>
        receta.id === recetaActualizada.id ? recetaActualizada : receta
      )
    );
  };

  return (
    <RecetasContext.Provider value={{ recetas, agregarReceta, eliminarReceta, actualizarReceta }}>
      {children}
    </RecetasContext.Provider>
  );
};

// Hook para usar el contexto
export const useRecetas = (): RecetasContextProps => {
  const context = useContext(RecetasContext);
  if (!context) {
    throw new Error('useRecetas debe usarse dentro de un RecetasProvider');
  }
  return context;
};
 