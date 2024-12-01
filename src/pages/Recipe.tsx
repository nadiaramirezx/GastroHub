import { useNavigate, useLocation } from "react-router-dom";
import Header_dos from "../components/Header_dos";
import comida1 from "../assets/img/comida1.jpg";
import woman from "../assets/img/woman.jpg";
import Button_delete from "../components/BottonDelete";
import Button_editar from "../components/ButtonEdit";
import { useState, useEffect } from "react";

// Definir el tipo de receta
interface RecipeType {
  title: string;
  description: string;
  image: string;
  date: string;
}

// Definir el tipo de usuario
interface UserType {
  username: string;
  bio: string;
  profileImage: string;
}

function Recipe() {
  const navigate = useNavigate();
  const location = useLocation();

  // Estado inicial para recetas
  const [recipes, setRecipes] = useState<RecipeType[]>([
    {
      title: "Spaghetti a la boloñesa",
      description: "Receta tradicional italiana",
      image: comida1,
      date: "29 de noviembre",
    },
    {
      title: "Lasaña a la boloñesa",
      description: "Deliciosa lasaña con carne",
      image: comida1,
      date: "29 de noviembre",
    },
  ]);

  // Estado para la receta que se edita
  const [editingRecipe, setEditingRecipe] = useState<RecipeType | null>(null);

  // Estado para el usuario
  const [user, setUser] = useState<UserType>({
    username: "Username",
    bio: "Información del usuario",
    profileImage: woman, // imagen de perfil por defecto
  });

  // Estado para la ventana emergente de editar perfil
  const [editingProfile, setEditingProfile] = useState(false);

  // Agregar receta desde la navegación (si viene desde RecipeUpload)
  useEffect(() => {
    if (location.state?.newRecipe) {
      setRecipes((prev) => [...prev, location.state.newRecipe as RecipeType]);
    }
  }, [location.state]);

  const handleSubmitRecipe = () => {
    navigate("/RecipeUpload");
  };

  const handleDelete = (index: number) => {
    setRecipes((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    // Establecer la receta actual en modo de edición
    setEditingRecipe(recipes[index]);
  };

  const handleUpdateRecipe = (updatedRecipe: RecipeType) => {
    setRecipes((prev) =>
      prev.map((recipe) =>
        recipe.title === updatedRecipe.title ? updatedRecipe : recipe
      )
    );
    setEditingRecipe(null); // Cerrar el modo edición
  };

  // Manejo de la edición de perfil
  const handleEditProfile = () => {
    setEditingProfile(true);
  };

  const handleSaveProfile = () => {
    setEditingProfile(false); // Cerrar el modal
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prev) => ({
          ...prev,
          profileImage: reader.result as string, // Guardamos la imagen en el estado
        }));
      };
      reader.readAsDataURL(file); // Cargar la imagen seleccionada
    }
  };

  return (
    <div className="min-h-screen bg-[#E8EFEF]">
      <Header_dos />
      <div className="container mx-auto mt-6 grid grid-cols-1 gap-6 p-4 md:grid-cols-[300px,1fr]">
        <div className="space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="h-32 w-32 overflow-hidden rounded-full bg-gray-200">
              <img
                src={user.profileImage}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold">{user.username}</h2>
              <p className="text-sm text-gray-600">{user.bio}</p>
            </div>
            <button
              onClick={handleEditProfile}
              className="w-full rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
            >
              Editar
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <input
                type="search"
                placeholder="Buscar..."
                className="w-full rounded-md border border-gray-300 pl-4 pr-10 py-2"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                🔍
              </button>
            </div>
            <button
              className="rounded-md bg-[#C88C8C] px-4 py-2 text-sm font-medium text-white hover:bg-[#B77C7C]"
              onClick={handleSubmitRecipe}
            >
              Añadir receta
            </button>
          </div>

          {/* Renderizar las recetas */}
          {recipes.map((recipe, index) => (
            <div key={index} className="rounded-lg bg-white p-4 shadow">
              <div className="flex flex-col sm:flex-row gap-4">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="h-[150px] w-[150px] rounded-lg object-cover"
                />
                <div className="flex-1 flex flex-col">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{recipe.title}</h3>
                      <button className="text-gray-400 hover:text-yellow-400">
                        ★
                      </button>
                    </div>
                    <p className="mt-2 text-gray-400">{recipe.description}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-gray-500">
                      Actualizado el {recipe.date}
                    </p>
                    <div className="flex space-x-2">
                      {/* Botón editar */}
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
                      >
                        Editar
                      </button>
                      {/* Botón eliminar */}
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Modal para editar receta */}
          {editingRecipe && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-md w-[400px]">
                <h2 className="text-xl font-semibold mb-4">Editar Receta</h2>
                <input
                  type="text"
                  placeholder="Título"
                  value={editingRecipe.title}
                  onChange={(e) =>
                    setEditingRecipe({
                      ...editingRecipe,
                      title: e.target.value,
                    } as RecipeType)
                  }
                  className="mb-4 p-2 w-full border rounded-md"
                />
                <textarea
                  placeholder="Descripción"
                  value={editingRecipe.description}
                  onChange={(e) =>
                    setEditingRecipe({
                      ...editingRecipe,
                      description: e.target.value,
                    } as RecipeType)
                  }
                  className="mb-4 p-2 w-full border rounded-md"
                />
                <button
                  onClick={() => handleUpdateRecipe(editingRecipe)}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400"
                >
                  Guardar
                </button>
              </div>
            </div>
          )}

          {/* Modal para editar perfil */}
          {editingProfile && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-md w-[400px]">
                <h2 className="text-xl font-semibold mb-4">Editar Perfil</h2>
                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  value={user.username}
                  onChange={handleProfileChange}
                  name="username"
                  className="mb-4 p-2 w-full border rounded-md"
                />
                <textarea
                  placeholder="Biografía"
                  value={user.bio}
                  onChange={handleProfileChange}
                  name="bio"
                  className="mb-4 p-2 w-full border rounded-md"
                />
                <div className="mb-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full text-sm"
                  />
                  <div className="mt-2">
                    {user.profileImage && (
                      <img
                        src={user.profileImage}
                        alt="Vista previa de imagen"
                        className="w-24 h-24 object-cover rounded-full"
                      />
                    )}
                  </div>
                </div>
                <button
                  onClick={handleSaveProfile}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400"
                >
                  Guardar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recipe;
