import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Interested in working together?
                </h2>
                <p className="max-w-2xl mx-auto text-white/70 mb-12 text-lg">
                    Feel free to check out my resume to learn more about my experience, skills, and background. I'm always open to discussing new opportunities or collaborations.
                </p>

                <a
                    href="/Harish-Palani-Resume.pdf"
                    download="Harish_Palani_Resume.pdf"
                    className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-lg transition-transform duration-300 hover:-translate-y-2 group"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-3 group-hover:animate-bounce"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    DOWNLOAD RESUME
                </a>
            </div>
        </section>
    );
};

export default Resume;
