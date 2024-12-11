import React, { createContext, useState, ReactNode, useContext } from 'react';

// Definir la interfaz del usuario
interface Usuario {
  nombre: string;
  email: string;
  telefono: string;
  foto: string;
}

// Crear un contexto
const ProfileContext = createContext<any>(null);

// Proveedor del contexto para envolver la aplicación
export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Usuario>({
    nombre: 'Juan Pérez',
    email: 'juan.perez@example.com',
    telefono: '123-456-7890',
    foto: 'https://via.placeholder.com/150', // Imagen por defecto
  });

  const updateProfile = (newUserData: Usuario) => {
    setUser(newUserData);
  };

  return (
    <ProfileContext.Provider value={{ user, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Hook para usar el contexto
export const useProfile = () => useContext(ProfileContext);
