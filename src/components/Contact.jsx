import { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const formData = new FormData(e.target);

        // Web3Forms API Endpoint
        // We use this because it requires no activation email and supports AJAX
        formData.append("access_key", "0d2a537f-2041-4669-886b-9e7c627d21c6");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await res.json();

            if (data.success) {
                setStatus('Message Sent Successfully!');
                e.target.reset(); // Clear the form

                // Reset status after a few seconds
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Network error. Please try again.');
        }
    };

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

                <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
                    {/* Security Token for Web3Forms */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className="w-full bg-secondary rounded-md px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                        className="w-full bg-secondary rounded-md px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        className="w-full bg-secondary rounded-md px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary outline-none transition-all"
                    ></textarea>

                    <div className="flex flex-col items-center justify-center space-y-4 pt-4">
                        <button
                            type="submit"
                            disabled={status === 'Sending...'}
                            className="px-8 py-3 border-2 rounded-md border-white text-white font-bold hover:bg-primary hover:border-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'Sending...' ? 'SENDING...' : 'SUBMIT'}
                        </button>

                        {/* Status Message */}
                        {status && status !== 'Sending...' && (
                            <p className={`text-sm font-semibold transition-opacity duration-300 ${status.includes('Successfully') ? 'text-green-400' : 'text-red-400'}`}>
                                {status}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
