import { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const formData = new FormData(e.target);
        formData.append("access_key", "0d2a537f-2041-4669-886b-9e7c627d21c6");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await res.json();

            if (data.success) {
                setStatus('SUCCESS! MESSAGE SENT');
                e.target.reset();
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus(data.message || 'SUBMISSION FAILED. PLEASE TRY AGAIN.');
            }
        } catch (error) {
            console.error(error);
            setStatus('NETWORK ERROR. PLEASE CHECK CONNECTION.');
        }
    };

    return (
        <section id="contact" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h4 className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase">GET IN TOUCH</h4>
                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter">
                        LET'S BUILD SOMETHING TOGETHER
                    </h2>
                    <p className="text-white/50 max-w-lg mx-auto text-sm font-light">
                        Whether you have a specific project in mind or just want to chat about development, feel free to reach out. I'm always open to new opportunities.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                             <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase ml-1">NAME</label>
                             <input
                                type="text"
                                name="name"
                                placeholder="YOUR FULL NAME"
                                required
                                className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm px-5 py-4 text-white text-[12px] placeholder-white/10 focus:border-primary outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase ml-1">EMAIL</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="YOUR@EMAIL.COM"
                                required
                                className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm px-5 py-4 text-white text-[12px] placeholder-white/10 focus:border-primary outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-bold tracking-widest text-white/40 uppercase ml-1">MESSAGE</label>
                        <textarea
                            name="message"
                            rows="6"
                            placeholder="TELL ME ABOUT YOUR PROJECT OR ROLE..."
                            required
                            className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm px-5 py-4 text-white text-[12px] placeholder-white/10 focus:border-primary outline-none transition-all resize-none"
                        ></textarea>
                    </div>

                    <div className="flex flex-col items-center gap-6 pt-4">
                        <button
                            type="submit"
                            disabled={status === 'Sending...'}
                            className="w-full md:w-auto px-12 py-5 bg-transparent border-2 border-white/80 text-white text-[12px] font-bold tracking-[0.2em] rounded-sm hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
                        >
                            {status === 'Sending...' ? 'CONNECTING...' : 'SEND MESSAGE →'}
                        </button>

                        {status && status !== 'Sending...' && (
                            <p className={`text-[10px] font-bold tracking-widest uppercase animate-fade-in ${status.includes('SUCCESS') ? 'text-green-500' : 'text-red-500'}`}>
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
