const Footer = () => {
    return (
        <footer className="py-12 bg-background border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <div className="flex space-x-6 mb-8 text-2xl">
                    <a href="https://www.linkedin.com/in/harishp2005/" className="hover:text-primary transition-colors">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Harish8978" className="hover:text-primary transition-colors">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://x.com/HarishP639864" className="hover:text-primary transition-colors">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>

                <p className="text-gray-500 text-sm uppercase tracking-widest">
                    HARISH PALANI <span className="text-primary">&copy;{new Date().getFullYear()}</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
