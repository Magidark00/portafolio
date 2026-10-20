import './Habilidades.css'

const Habilidades = () => {
    // Arreglo de datos: cada habilidad con su certificado (si lo tiene)
    const skillData = [
        {
            id: 1,
            titulo: "Fundamentos de Python 1",
            descripcion: "Programación en Python desde cero.",
            nivel: "Cisco Networking Academy · Feb 2025",
            botonTexto: "VER CERTIFICADO",
            link: "/certificados/cisco-python-1.pdf",
            estado: "completado"
        },
        {
            id: 2,
            titulo: "Introducción a la Ciencia de Datos",
            descripcion: "Fundamentos del análisis y manejo de datos.",
            nivel: "Cisco Networking Academy · Sep 2024",
            botonTexto: "VER CERTIFICADO",
            link: "/certificados/cisco-ciencia-de-datos.pdf",
            estado: "completado"
        },
        {
            id: 3,
            titulo: "Conceptos básicos de redes",
            descripcion: "Fundamentos de redes de computadoras.",
            nivel: "Cisco Networking Academy · Sep 2024",
            botonTexto: "VER CERTIFICADO",
            link: "/certificados/cisco-redes.pdf",
            estado: "completado"
        },
        {
            id: 4,
            titulo: "Conceptos Básicos de Hardware de Computadora",
            descripcion: "Componentes y funcionamiento del hardware.",
            nivel: "Cisco Networking Academy · Sep 2024",
            botonTexto: "VER CERTIFICADO",
            link: "/certificados/cisco-hardware.pdf",
            estado: "completado"
        },
        {
            id: 5,
            titulo: "Introducción a Ciberseguridad",
            descripcion: "Fundamentos de seguridad informática.",
            nivel: "Cisco Networking Academy · Ago 2024",
            botonTexto: "VER CERTIFICADO",
            link: "/certificados/cisco-ciberseguridad.pdf",
            estado: "completado"
        },
        {
            id: 6,
            titulo: "Introducción al Internet de las Cosas y Transformación Digital",
            descripcion: "IoT y su rol en la transformación digital.",
            nivel: "Cisco Networking Academy · Ago 2024",
            botonTexto: "VER CERTIFICADO",
            link: "/certificados/cisco-iot.pdf",
            estado: "completado"
        },
        // Habilidades sin certificado: no llevan link ni botón
        {
            id: 7,
            titulo: "R",
            descripcion: "Análisis de datos y estadística.",
            nivel: "Uso práctico",
            estado: "completado"
        },
        {
            id: 8,
            titulo: "HTML",
            descripcion: "Estructura y maquetación de páginas web.",
            nivel: "Uso práctico",
            estado: "completado"
        },
    ];

    return (
        <section id="tech-stack" className="habilidades-section">
            <div className="habilidades-container">
                <div className="habilidades-grid">
                    {skillData.map((skill) => (
                        <div key={skill.id} className="skill-card">

                            {/* Cabecera de la tarjeta: Ícono y Botón */}
                            <div className="skill-header">
                                <div className="skill-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="3" y1="9" x2="21" y2="9"></line>
                                        <line x1="9" y1="21" x2="9" y2="9"></line>
                                    </svg>
                                </div>

                                {/* El botón solo se muestra si la habilidad tiene certificado */}
                                {skill.link && (
                                    <a
                                        href={skill.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`skill-badge ${skill.estado === 'proceso' ? 'badge-yellow' : 'badge-green'}`}
                                    >
                                        {skill.botonTexto}
                                    </a>
                                )}
                            </div>

                            {/* Cuerpo de la tarjeta: Textos */}
                            <div className="skill-body">
                                <h3 className="skill-title">{skill.titulo}</h3>
                                <p className="skill-desc">{skill.descripcion}</p>
                                <span className="skill-level">{skill.nivel}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Habilidades;