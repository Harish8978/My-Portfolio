const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-6 z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-light leading-tight mb-4">
                    Hello, I'm <span className="font-bold text-primary">Harish Palani</span>.
                    <br />
                    I'm a full-stack web developer.
                </h1>

                <button
                    onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
                    className="mt-8 px-8 py-3 border-2 rounded-md border-white/80 text-white text-lg font-medium transition-all duration-300 hover:bg-primary hover:border-primary flex items-center mx-auto group"
                >
                    View my work
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-3 transform group-hover:rotate-90 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Hero;
