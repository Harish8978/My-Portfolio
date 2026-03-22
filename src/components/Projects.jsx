const Projects = () => {
    const projects = [
        {
            id: '01',
            title: 'EV-Charge-Locatpr',
            techStack: ['React', 'Tailwind CSS', 'Express', 'MongoDB'],
            link: 'https://github.com/Harish8978/Ev-Charge_Locator'
        },
       
        {
            id: '02',
            title: 'Tution Website',
            techStack: ['React', 'Tailwind CSS', 'FireBase'],
            link: 'https://github.com/Harish8978/Tution-Website'
        },
       
    ];

    return (
        <section id="work" className="py-24 bg-black">
            <div className="container px-6 mx-auto">
                <div className="mb-16 space-y-4 text-center">
                    <h4 className="text-[10px] font-bold tracking-[0.5em] text-white/40 uppercase">PORTFOLIO</h4>
                    <h2 className="text-3xl font-bold tracking-tighter uppercase md:text-5xl font-display">
                        PROJECTS
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="relative p-8 overflow-hidden transition-all duration-500 border glass-card group rounded-2xl border-white/5 hover:border-primary/50">
                            {/* Decorative background element */}
                            <div className="absolute w-24 h-24 transition-colors rounded-full -right-4 -top-4 bg-primary/5 blur-3xl group-hover:bg-primary/10"></div>
                            
                            <div className="relative z-10 space-y-6">
                                <div className="space-y-2">
                                    <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">PROJECT {project.id}</h4>
                                    <h3 className="text-2xl font-bold tracking-tight uppercase transition-colors font-display group-hover:text-primary">
                                        {project.title}
                                    </h3>
                                </div>
                                
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, tIndex) => (
                                        <span key={tIndex} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-medium tracking-wider text-white/60">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-[10px] font-bold tracking-widest uppercase border-b border-white/20 pb-1 hover:border-primary hover:text-primary transition-all inline-block"
                                    >
                                        VIEW DETAILS →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
