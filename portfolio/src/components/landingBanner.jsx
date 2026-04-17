import { useState, useEffect } from 'react';

function LandingBanner() {
  const labels = ["Frontend", "Backend", "Fullstack", "Mobile"];
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('visible');

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase('exit');
      setTimeout(() => {
        setIndex(prev => (prev + 1) % labels.length);
        setPhase('enter');
        setTimeout(() => setPhase('visible'), 400);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col items-start bg-cover bg-center w-full h-[90vh] justify-end gap-4 pb-12 pl-12"
    >
        <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-4">
                <h1 className="text-5xl font-bold text-white leading-tight">
                    <span
                        className={`inline-block ${
                        phase === 'exit' ? 'roll-out' :
                        phase === 'enter' ? 'roll-in' : ''
                        }`}
                    >
                    {labels[index]}
                    </span>
                    {' '}Developer
                </h1>
            </div>
            <p className="text-xl text-gray-300">Building the Future, One Line at a Time</p>
        </div>
       
    </div>
  );
}
export default LandingBanner;
