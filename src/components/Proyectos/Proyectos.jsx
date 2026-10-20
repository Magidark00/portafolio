import './Proyectos.css';

const Proyectos = () => {
    // Arreglo de proyectos
    const proyectosData = [
        {
            id: 1,
            titulo: "EcoLimApp: digitalización del registro de residuos sólidos",
            descripcion:
            "App móvil Android que reemplaza el registro en papel de residuos. Funciona sin internet y sincroniza los datos después, escanea QR para identificar el tipo de residuo y genera reportes con filtros exportables a PDF, CSV y XLSX. Caso práctico basado en ECOLIM S.A.C.",
            tecnologias: ["Android Studio", "SQLite", "Retrofit", "QR / Cámara", "Offline-first"],
            imagen: "/proyectos/ecolimapp.png",
            boton1: { texto: "Ver Presentación", link: "/proyectos/ecolimapp.pdf" },
        },
        {
            id: 2,
            titulo: "NeuroFlora: jardín cibernético de monitoreo ambiental",
            descripcion:
            "Sistema IoT simulado en Tinkercad con Arduino Uno que imita el movimiento de una flor: se orienta hacia la luz en calma y se cierra al detectar ruido alto. Comunica su estado con un LED RGB, un buzzer y una pantalla LCD I2C.",
            tecnologias: ["Arduino", "Tinkercad", "IoT", "Sensores", "Servomotores"],
            imagen: "/proyectos/neuroflora.png",
            boton1: { texto: "Ver en Tinkercad", link: "https://www.tinkercad.com/things/gOLXiShhbCi/editel?returnTo=%2Fdashboard&sharecode=IikJPp_GW8cKzX1I1JPKELwntS-28ImM0zfAELb4J7E" },
        },
    ];

    return (
    <section id="proyectos" className="proyectos-section">
        <div className="proyectos-container">
            <h2 className="section-title text-center">Proyectos Destacados</h2>
            <div className="proyectos-grid">
                {proyectosData.map((proyecto) => (
                    <article key={proyecto.id} className="proyecto-card">

                        {/* 1. Imagen del Proyecto */}
                        <div className="proyecto-imagen">
                            <img src={proyecto.imagen} alt={`Captura de ${proyecto.titulo}`} />
                        </div>

                        {/* 2. Contenido de la Tarjeta */}
                        <div className="proyecto-contenido">
                            <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                            <p className="proyecto-desc">{proyecto.descripcion}</p>

                            {/* 3. Etiquetas de Tecnologías */}
                            <div className="proyecto-tags">
                                {proyecto.tecnologias.map((tech, index) => (
                                    <span key={index} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* 4. Botón de Acción (solo si hay link) */}
                            {proyecto.boton1?.link && (
                                <div className="proyecto-links">
                                    <a
                                        href={proyecto.boton1.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-proyecto btn-demo"
                                    >
                                        {/* Ícono de Enlace Externo */}
                                        <svg width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                        {proyecto.boton1.texto}
                                    </a>
                                </div>
                            )}
                        </div>

                    </article>
                ))}
            </div>
        </div>
    </section>
    );
};

export default Proyectos;