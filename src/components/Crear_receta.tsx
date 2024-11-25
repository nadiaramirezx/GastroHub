function Crear_receta (){
   return(

      <>
  <header className="encabezado">
    <h1>
      <span className="texto-destacado">CREA</span> TU NUEVA RECETA
    </h1>
  </header>
  <main className="contenedor-principal">
    {/* Sección izquierda con imagen y botón */}
    <div className="columna columna-izquierda">
      <div className="contenido-centrado">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3480/3480923.png"
          alt="Icono de receta"
          className="icono-receta"
        />
        <button className="boton">Cambiar imagen</button>
      </div>
    </div>
    {/* Sección derecha con texto y botones */}
    <div className="columna columna-derecha">
      <div className="contenido-centrado">
        <div className="botones-subida">
          <button className="boton">Subir Archivo</button>
          <button className="boton">Subir Receta</button>
        </div>
      </div>
    </div>
  </main>
</>

   )
}
export default Crear_receta