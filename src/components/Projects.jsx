import ewaste from "../../assets/ewaste.png"

const Projects = () => {
    const projects = [
        {
            title: 'E-waste Locator',
            category: 'React / Node.js',
            // image: ewaste,
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
                            className="group relative overflow-hidden aspect-[3/2] cursor-pointer"
                        >
                            <img
                                src={project.image} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
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
