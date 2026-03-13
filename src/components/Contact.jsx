const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-accent/30 relative">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative inline-block left-1/2 -translate-x-1/2">
                    CONTACT
                    <div className="h-1 w-1/2 bg-primary mx-auto mt-2"></div>
                </h2>

                <p className="text-white text-center font-medium mb-12">
                    Have a question or want to work together?
                </p>

                <form className="max-w-xl mx-auto space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-secondary rounded-md px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="w-full bg-secondary rounded-md px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="w-full bg-secondary rounded-md px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary outline-none transition-all"
                    ></textarea>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-8 py-3 border-2 rounded-md border-white text-white font-bold hover:bg-primary hover:border-primary transition-all duration-300"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
