import React from 'react';
import '../pages/css/editar.css';

const EditarPerfil: React.FC = () => {
    return (
        <div className="perfil-container">
            <div className="sidebar">
                <button className="logout-button">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png"
                        alt="Log Out Icon"
                        className="logout-icon"
                    />
                    Cancelar
                </button>
            </div>

            <div className="perfil-content">
                <h1 className="perfil-title">Editar perfil</h1>

                <div className="perfil-avatar">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        alt="Avatar"
                        className="avatar-img"
                    />
                    <button className="avatar-button">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/130/130925.png"
                            alt="Camera Icon"
                            className="camera-icon"
                        />
                    </button>
                </div>

                <p className="perfil-username">Nombre Usuario</p>

                <form className="perfil-form">
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" placeholder="Add text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input type="text" id="apellidos" placeholder="Add text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="correo">Correo Electrónico</label>
                        <input type="email" id="correo" placeholder="Add text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="tel" id="telefono" placeholder="Add text" />
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
