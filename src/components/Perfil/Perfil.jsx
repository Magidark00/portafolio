import './Perfil.css';

const Perfil = () => {
    return (
        <section id="sobre-mi" className="sobre-mi-section">
            <div className="sobre-mi-container">
                <h2 className="section-title">Sobre mí</h2>

                <div className="sobre-mi-grid">

                    {/* =====================================
                        TARJETA 1: PERFIL PROFESIONAL
                    ====================================== */}
                    <div className="card">
                        <div className="card-header">
                            {/* Ícono de Usuario (SVG) */}
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" 
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>

                            <p className="card-text">
                                Estudiante de Ingeniería de Software con Inteligencia Artificial en SENATI, 
                                con interés en construir sistemas inteligentes que automaticen procesos y ayuden 
                                a tomar mejores decisiones.
                                <br /><br/>
                                Actualmente soy practicante en CONAUTI S.A.C., donde trabajo en el diseño de 
                                un sistema multiagente para la continuidad operativa de equipos médicos: arquitectura, 
                                flujogramas y prototipos.
                                <br /><br />
                                Manejo Python y R para el análisis de datos y la automatización, y HTML para el desarrollo 
                                web. Busco oportunidades de prácticas y empleo donde pueda aportar, aprender y seguir creciendo 
                                en proyectos de IA aplicada y desarrollo de software.
                            </p>
                        </div>
                    </div>
                        {/* =====================================
                            TARJETA 2: EDUCACIÓN
                        ====================================== */}
                        <div className="card">
                            <div className="card-header">
                                {/* Ícono de Educación / Sombrero (SVG) */}
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                    </svg>
                                </div>
                                <h3>Formación</h3>
                            </div>

                            <div className="timeline">
                                {/* Ítem de Educación 1 */}
                                <div className="timeline-item">
                                    <div className="timeline-header">
                                        <h4>Ingeniería de Software con Inteligencia Artificial</h4>
                                        <span className="badge badge-outline">En curso</span>
                                    </div>
                                    <span className="timeline-date">SENATI</span>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </section>
    );
};
export default Perfil;