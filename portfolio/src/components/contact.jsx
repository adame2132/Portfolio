import testImg from '../assets/profileTemp.jpg';
function Contact() {
    return (
        <div className="flex items-center justify-center w-full min-h-screen px-12 py-16">
            <div className="flex flex-col md:flex-row items-center gap-16 max-w-4xl w-full">

                {/* Profile image */}
                <div className="flex-shrink-0">
                    <img src={testImg} alt="Profile" className="w-64 h-64 object-cover rounded-2xl shadow-lg" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-4xl font-bold">Let's Get Connected</h2>
                    <p className="text-gray-500 leading-relaxed max-w-md">Whether you have a question, want to collaborate on a project, or just want to say hi, feel free to reach out! I'm always open to connecting with fellow developers, potential employers, or anyone interested in my work.</p>
                    <div className="flex gap-4">
                        <button className="px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-200">Email Me</button>
                        <button className="px-6 py-2.5 border border-gray-900 text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-200">LinkedIn</button>
                        <button className="px-6 py-2.5 border border-gray-900 text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-200">GitHub</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Contact