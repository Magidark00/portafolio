import './Banner.css';
import miFoto from '../../assets/miFoto.png';

const Banner = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                
                {/* 1. Etiqueta de Estado (Badge) */}
                <div className="status-badge">
                    <span className="status-dot"></span>
                    Disponible para nuevos proyectos
                </div>

                {/* 2. Foto de Perfil Circular */}
                <div className="profile-photo-container">
                    <img
                        src={miFoto}
                        alt="Foto de Perfil"
                        className="profile-photo"
                    />
                </div>

                {/* 3. Título Principal */}
                <h1 className="hero-title">
                    Matias <br />
                    <span className="text-cyan">Melendez</span>
                </h1>

                {/* 4. Subtítulo (Rol) */}
                <h2 className="hero-subtitle">
                Ingeniería de Software con IA | Python & R | Sistemas Inteligentes y Automatización
                </h2>

                {/* 5. Descripción */}
                <p className="hero-description">
                    Estudiante de Ingeniería de Software con Inteligencia Artificial en SENATI. 
                    Desarrollo soluciones con Python y R para automatizar procesos y analizar datos, 
                    y creo páginas web con HTML. Actualmente trabajo en un sistema multiagente para 
                    la continuidad operativa de equipos médicos. Busco oportunidades de prácticas y empleo 
                    donde pueda aportar y seguir creciendo. Explora mis proyectos más abajo.
                </p>

                {/* 6. Botones de Acción */}
                <div className="hero-buttons">
                    <a href="#proyectos" className="btn btn-primary">Ver proyectos</a>
                    <a href="#contacto" className="btn btn-secondary">Contáctame</a>
                </div>
            </div>

            {/* 7. Indicador de Scroll (Flecha animada hacia abajo) */}
            <div className="scroll-indicator">
                ↓
            </div>
        </section>
    );
};

export default Banner;