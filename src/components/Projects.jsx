

const Projects = () => {
    const projects = [
        {
            title: 'E-waste Locator',
            category: 'React / Node.js',
        },

    ];

    return (
        <section id="work" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative inline-block left-1/2 -translate-x-1/2">
                    PROJECTS
                    <div className="h-1 w-1/2 bg-primary mx-auto mt-2"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden aspect-[3/2] cursor-pointer bg-secondary rounded-lg"
                        >
                            {/* SVG Icon for E-waste Locator */}
                            <div className="w-full h-full flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-24 w-24 text-primary mb-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 8h.01M15.5 8a.5.5 0 11-1 0 .5.5 0 011 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span className="text-white/70 font-bold text-lg tracking-wider opacity-50">E-WASTE LOCATOR</span>
                            </div>

                            <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                                <h3 className="text-xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {project.category}
                                </p>
                                <button className="mt-6 px-6 py-2 border border-white text-xs font-bold hover:bg-white hover:text-primary transition-colors translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
