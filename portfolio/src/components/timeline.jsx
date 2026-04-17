import { useEffect, useRef, useState } from 'react';
import utahTech from '../assets/utah_techu_cover.jpeg';
import buzz from '../assets/buzz_financial_logo.jpeg';

function TimelineItem({ item, index }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const isLeft = index % 2 === 0;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative flex items-center w-full my-8">

            {/* Left side */}
            <div className={`w-1/2 pr-12 flex ${isLeft ? 'justify-end' : ''}`}>
                {isLeft && (
                    <div
                        ref={ref}
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateX(0)' : 'translateX(-50px)',
                            transition: 'opacity 0.6s cubic-bezier(0.25,0.8,0.25,1), transform 0.6s cubic-bezier(0.25,0.8,0.25,1)',
                        }}
                        className="bg-white rounded-2xl shadow-md p-6 max-w-sm w-full border border-gray-100"
                    >
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">{item.date}</p>
                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                        <div className="mt-3 rounded-xl h-32">
                             <img src={item.img} alt={item.company} className="w-full h-full rounded-xl" />
                        </div>
                        {item.description && <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.description}</p>}
                    </div>
                )}
            </div>

            {/* Center dot */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div
                    style={{
                        transform: visible ? 'scale(1)' : 'scale(0)',
                        transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1) 0.2s',
                    }}
                    className="w-4 h-4 rounded-full bg-gray-900 border-4 border-white shadow-md"
                />
            </div>

            {/* Right side */}
            <div className={`w-1/2 pl-12 flex ${!isLeft ? 'justify-start' : ''}`}>
                {!isLeft && (
                    <div
                        ref={ref}
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateX(0)' : 'translateX(50px)',
                            transition: 'opacity 0.6s cubic-bezier(0.25,0.8,0.25,1), transform 0.6s cubic-bezier(0.25,0.8,0.25,1)',
                        }}
                        className="bg-white rounded-2xl shadow-md p-6 max-w-sm w-full border border-gray-100"
                    >
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">{item.date}</p>
                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                        <div>
                             <img src={item.img} alt={item.company} />
                        </div>
                        {item.description && <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.description}</p>}
                    </div>
                )}
            </div>
        </div>
    );
}

function Timeline() {
    const timelineData = [
        {
            date: '2021 - 2024',
            company: "Utah Tech University",
            title: 'Batchelor of Science Software Engineering',
            description: 'Magna cum laude graduate with a strong foundation in software development principles and practices. Specialized in DevOps track, gaining experience developing full stack applications and apps.',
            img: utahTech,
        },
        {
            date: '2025 - Present',
            company: 'Buzz Financial',
            title: 'Full Stack Developer',
            description: 'Lead developer of a Fitness CRM platform, and contirbuted to the devel[onet of our paymnet gateway software assiting more than 100 + merchnats.',
            img: buzz,
        },
    ];

    const containerRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !lineRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const totalHeight = containerRef.current.offsetHeight;
            const scrolled = Math.min(Math.max(-rect.top + window.innerHeight * 0.3, 0), totalHeight);
            const pct = (scrolled / totalHeight) * 100;
            lineRef.current.style.height = `${pct}%`;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex flex-col w-full px-12 py-16 gap-8 bg-gray-50">
            <h2 className="text-3xl font-bold text-center">Experience</h2>

            <div ref={containerRef} className="relative w-full">

                {/* Track (background line) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-gray-200" />

                {/* Animated fill line */}
                <div
                    ref={lineRef}
                    className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-gray-900"
                    style={{ height: '0%', transition: 'height 0.1s linear' }}
                />

                {/* Items */}
                {timelineData.map((item, index) => (
                    <TimelineItem key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    );
}

export default Timeline;
