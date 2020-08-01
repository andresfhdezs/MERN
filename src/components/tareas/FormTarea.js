import React from 'react';

const FormTarea = () => {
    return (
        <div className="formulario">
            <form action="">
                <div className="contenedor-input">
                    <input
                        type="text"
                        name="nombre"
                        className="input-text"
                        placeholder="Nombre tarea" />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        value="Agregar Tarea"
                        className="btn btn-primario btn-submit btn-block" />
                </div>
            </form>
        </div>
    );
};

export default FormTarea;