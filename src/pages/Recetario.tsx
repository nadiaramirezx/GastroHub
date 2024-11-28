import { useNavigate } from "react-router-dom";
import Header_dos from "../components/Header_dos";
import comida1 from '../assets/img/comida1.jpg'
import woman from '../assets/img/woman.jpg'
import Button_delete from '../components/BottonDelete'
import Button_editar from "../components/ButtonEdit";

function Recipe (){

   const navigate = useNavigate();
   const handleSubmitRecipe = () => {
      navigate("/RecipeUpload")
   };


   return(
      <div className="min-h-screen bg-[#E8EFEF]">
         <Header_dos/>
      {/* contenido del main */}
      <div className="container mx-auto mt-6 grid grid-cols-1 gap-6 p-4 md:grid-cols-[300px,1fr]">
        {/* Sidebar del usuario */}
        <div className="space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="h-32 w-32 overflow-hidden rounded-full bg-gray-200">
              <img
                src={woman}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold">Username</h2>
              <p className="text-sm text-gray-600">Informacion del usuario</p>
            </div>
            <button className="w-full rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300">
              editar
            </button>
          </div>
        </div>

        {/* contenido de las recetas */}
        <div className="space-y-6">
          {/* barra de busqueda*/}
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
            type="button"
            onClick={handleSubmitRecipe}
            >
              Añadir receta
            </button>
          </div>

          {/* tarjetas de las recetas */}
          {['Spaghetti a la boloñesa', 'Lasaña a la boloñesa'].map((recipe, index) => (
            <div key={index} className="rounded-lg bg-white p-4 shadow">
              <div className="flex flex-col gap-6 sm:flex-row">
                <img
                  src={comida1}
                  alt={recipe}
                  className="h-[150px] w-[150px] rounded-lg object-cover"
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{recipe}</h3>
                      <button className="text-gray-400 hover:text-yellow-400">
                        ★
                      </button>
                    </div>
                    <p className="mt-2 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas lectus a tincidunt ullamcor. Sed non
                      dui a erat varius sagittis et nec odio.
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-500">
                    Actualizado el 29 de noviembre
                  </p>
                  <Button_editar/>
                  <Button_delete />
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   )
}
export default Recipe;