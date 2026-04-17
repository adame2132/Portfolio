import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    const socials = [
        {
            name: "github",
            link: "",
            icon: faGithub
        },
        {
            name: "linkedin",
            link: "",
            icon: faLinkedin
        },
        {
            name: "facebook",
            link: "",
            icon: faFacebook
        }
    ]
    return(
        <div className="flex flex-col w-full bg-gray-900 text-white px-12 pt-12 pb-6 gap-8">

            {/* Top — tagline + contact + socials */}
            <div className="flex flex-col md:flex-row justify-between gap-8 pb-8 border-b border-gray-700">

                {/* Tagline */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-5xl font-bold tracking-tight">Turning Ideas Into Reality</h1>
                    <p className="text-gray-400 text-2xl">Let's Build Together</p>
                </div>

                {/* Contact */}
                <div className="flex gap-10">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-gray-400 text-sm uppercase tracking-wider mb-1">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email</span>
                        </div>
                        <p className="text-sm">hectorjadame213@gmail.com</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-gray-400 text-sm uppercase tracking-wider mb-1">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Phone</span>
                        </div>
                        <p className="text-sm">+1 (385) 528-8309</p>
                    </div>
                </div>

                {/* Socials */}
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Socials</p>
                    <div className="flex gap-4">
                        {socials.map((social) => (
                            <a href={social.link || '#'} key={social.name} aria-label={social.name}
                               className="text-2xl text-gray-300 hover:text-white transition-colors duration-200">
                                <FontAwesomeIcon icon={social.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom — nav + copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <div className="flex gap-6">
                    <button className="hover:text-white transition-colors duration-200">Home</button>
                    <button className="hover:text-white transition-colors duration-200">About</button>
                    <button className="hover:text-white transition-colors duration-200">Projects</button>
                    <button className="hover:text-white transition-colors duration-200">Contact</button>
                </div>
                <p>© 2026 Hector Adame. All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer;