const Projects = () => {
    const projects = [
        {
            id: '01',
            title: 'E-waste-locator',
            techStack: ['React', 'Tailwind CSS', 'Express', 'MongoDB'],
            link: 'https://github.com/Harish8978/E-Waste-Locator'
        },
       
    ];

    return (
        <section id="work" className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h4 className="text-[10px] font-bold tracking-[0.5em] text-white/40 uppercase">PORTFOLIO</h4>
                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter">
                        PROJECTS
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-card group p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
                            {/* Decorative background element */}
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                            
                            <div className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">PROJECT {project.id}</h4>
                                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight group-hover:text-primary transition-colors">
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
