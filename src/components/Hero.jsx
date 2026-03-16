const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
            <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left opacity-0 animate-slide-in-left">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight mb-6">
                        Hello, I'm <br className="hidden md:block" />
                        <span className="font-bold text-primary font-sans">Harish Palani</span>.
                        <br />
                        <span className="text-2xl md:text-3xl lg:text-4xl mt-2 block opacity-90 font-sans uppercase tracking-[0.1em]">B.Tech Student </span>
                    </h1>

                    <button
                        onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
                        className="mt-8 px-8 py-3 border-2 rounded-md border-white/80 text-white text-lg font-medium transition-all duration-300 hover:bg-white hover:text-black flex items-center group opacity-0 animate-slide-up [animation-delay:400ms]"
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

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 opacity-0 animate-slide-in-right [animation-delay:200ms]">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-primary/20 transition-transform hover:scale-105 duration-500">
                        <div className="w-full h-full bg-secondary flex items-center justify-center relative">
                            <span className="text-6xl md:text-8xl font-bold text-white/10 tracking-tighter">HP</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
