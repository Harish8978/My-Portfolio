const About = () => {
    const skills = [
        { name: 'HTML', percentage: '90%' },
        { name: 'CSS', percentage: '90%' },
        { name: 'Tailwind CSS', percentage: '85%' },
        { name: 'JavaScript', percentage: '85%' },
        { name: 'React', percentage: '80%' },
        { name: 'Node.js/Express JS', percentage: '50%' },
        { name:'MongoDB', percentage:'50%'},
        {name:'Git/GitHub',percentage:'60%'},
        {name:'Java',percentage:"50%"},
    ];

    return (
        <section id="about" className="py-20 bg-accent/30">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative inline-block left-1/2 -translate-x-1/2">
                    ABOUT
                    <div className="h-1 w-1/2 bg-primary mx-auto mt-2"></div>
                </h2>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/2 space-y-6">
                        <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
                        <p className="text-gray-300 leading-relaxed">
                            I am a B-Tech Engineering Student from Panimalar Engineering College who is interested in
                            Full Stack Web Development. So I Started Learning MERN Stack and i am in progress.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            I am a type of person who wants to learn and improve my knowledge and skills!
                        </p>
                    </div>

                    <div className="md:w-1/2 w-full space-y-6">
                        {skills.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-bold tracking-wider">{skill.name}</span>
                                    <span className="text-sm text-gray-400">{skill.percentage}</span>
                                </div>
                                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary"
                                        style={{ width: skill.percentage }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
