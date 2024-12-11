import logo from '../assets/img/logo.png'
function SlideNav() {
  return (
    <div>
      <aside id="logo-sidebar" className="fixed top-0 left-0 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full py-5 overflow-y-auto" style={{ backgroundColor: '#2e4053' }}>
          <a className="flex items-center ps-2.5 mb-5">
            <img src={logo} className="h-6 me-3 sm:h-20" />
            <span className="self-center text-xl font-semibold whitespace-nowrap" style={{ color: '#dbc4a0' }}></span>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <a href="/Recetario1" className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group" style={{ color: '#dbc4a0' }}>
                
                <span className="ms-3">Inicio</span>
              </a>
            </li>
            <li>
              <a href="/perfil" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                
                <span className="flex-1 ms-3 whitespace-nowrap">Perfil</span>
              </a>
            </li>
            <li>
              <a href="/RecipeUpload" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
                <span className="flex-1 ms-3 whitespace-nowrap">Subir Receta</span>
              </a>
            </li>
            <li>
              <a href="" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
                <span className="flex-1 ms-3 whitespace-nowrap">Editar Perfil</span>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                
                <span className="flex-1 ms-3 whitespace-nowrap">Log ut</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default SlideNav;

