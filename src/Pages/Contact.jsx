import React from 'react';

const Contact = () => {
    return (
        <div className='mt-8'>
            <div className="grid max-w-screen-xl bg-slate-100 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-2xl md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="dark:text-gray-600">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form noValidate="" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-lg">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded-lg" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-lg">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded-lg" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-lg">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded-lg"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-lg font-bold tracking-wide uppercase rounded-xl bg-green-400 text-white">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;