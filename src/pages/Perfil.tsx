import React from 'react';
import "../styles/editar.css";
import SlideNav from '../components/SlideNav';


const EditarPerfil: React.FC = () => {
    return (
        <div className="perfil-container">
            <SlideNav/>

            <div className="perfil-content">
                <h1 className="perfil-title">Editar perfil</h1>

                <div className="perfil-avatar">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        alt="Avatar"
                        className="avatar-img"
                    />
                    
                </div>

                <p className="perfil-username">Nombre Usuario</p>

                <form className="perfil-form">
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" placeholder="Nombres" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input type="text" id="apellidos" placeholder="Apellidos" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="correo">Correo Electrónico</label>
                        <input type="email" id="correo"  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="tel" id="telefono"  />
                    </div>

                    <button type="submit" className="save-button">
                        Guardar Cambios
                    </button>
                    
                </form>
            </div>
        </div>
    );
};

export default EditarPerfil;