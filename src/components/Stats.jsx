import { useState, useEffect } from 'react';
import '../styles/Stats.css';

const Stats = () => {
  const [counters, setCounters] = useState({
    pets: 0,
    experience: 0,
    rating: 0,
    services: 0
  });

  const statsData = [
    { key: 'pets', final: 10000, label: 'Happy Pets', suffix: '+' },
    { key: 'experience', final: 8, label: 'Years Experience', suffix: '+' },
    { key: 'rating', final: 4.9, label: 'Average Rating', suffix: '' },
    { key: 'services', final: 50, label: 'Services', suffix: '+' }
  ];

  useEffect(() => {
    const animationDuration = 2000; // 2 seconds
    const startTime = Date.now();

    const animateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      setCounters({
        pets: Math.floor(10000 * progress),
        experience: Math.floor(8 * progress),
        rating: Math.round((4.9 * progress) * 10) / 10,
        services: Math.floor(50 * progress)
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      }
    };

    const animationFrame = requestAnimationFrame(animateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <div className="row g-4">
          {statsData.map((stat) => (
            <div key={stat.key} className="col-lg-3 col-md-6 col-12">
              <div className="stat-card">
                <div className="stat-number">
                  {stat.key === 'rating' 
                    ? counters[stat.key].toFixed(1) 
                    : formatNumber(counters[stat.key])
                  }
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
