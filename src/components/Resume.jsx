const Resume = () => {
    return (
        <section id="resume" className="py-24 bg-[#050505] border-y border-white/5">
            <div className="container mx-auto px-6 text-center space-y-12">
                <div className="space-y-4">
                    <h4 className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase">DOWNLOAD RESUME</h4>
                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter">
                        MY RESUME
                    </h2>
                </div>
                
                <p className="max-w-2xl mx-auto text-white/50 text-sm md:text-base leading-relaxed tracking-wide font-light">
                    Interested in working together? My resume provides a comprehensive overview of my technical skills, 
                    academic achievements, and professional experiences as a software developer.
                </p>

                <div className="pt-6">
                    <a
                        href="/Harish-Palani-Resume.pdf"
                        download="Harish_Palani_Resume.pdf"
                        className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black text-[12px] font-bold tracking-[0.2em] rounded-sm hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all group"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 transition-transform group-hover:translate-y-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        GET MY RESUME →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;
