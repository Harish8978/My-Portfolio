const About = () => {
    const skills = [
        { name: 'HTML/CSS/JS', description: 'Experience building modern, responsive, and interactive user interfaces.', icon: '🌐' },
        { name: 'REACT/MERN', description: 'Full stack development with focus on building scalable web applications.', icon: '⚛️' },
        { name: 'TOOLS & JAVA', description: 'Proficient in Git, GitHub, and Core Java for problem solving.', icon: '⚙️' },
    ];

    return (
        <section id="about" className="py-32 bg-black">
            <div className="container mx-auto px-6 md:px-12">
                {/* About Content */}
                <div className="max-w-4xl mb-32 space-y-8">
                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-left">
                        ABOUT <br className="hidden md:block" /> ME
                    </h2>
                    <div className="space-y-6 text-left">
                        <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                            I am a B-Tech Engineering Student from Panimalar Engineering College who is interested in 
                            Full Stack Web Development. I've been mastering the MERN Stack to build high-performance 
                            web experiences that transport users through clean, scalable code.
                        </p>
                        <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                            I am a type of person who wants to constanty learn and improve my knowledge and skills, 
                            pushing the boundaries of what's possible in web engineering.
                        </p>
                    </div>
                </div>

                {/* Skills/Features Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="glass-card p-10 rounded-lg group hover:bg-white/5 transition-all duration-500 flex flex-col gap-8">
                            <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-lg group-hover:bg-white group-hover:text-black transition-all">
                                <span className="text-2xl">{skill.icon}</span>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-display font-bold uppercase tracking-tight leading-tight">
                                    {skill.name}
                                </h3>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
