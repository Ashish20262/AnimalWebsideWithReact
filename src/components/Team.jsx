import { FaAward, FaHandshake, FaHeart } from 'react-icons/fa';
import '../styles/Team.css';

import img1 from "../assets/images/Team1.jpg"
import img2 from "../assets/images/Team2.jpg"
import img3 from "../assets/images/Team3.jpg"
import img4 from "../assets/images/Team4.jpg"
const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      position: 'Founder & Head Groomer',
      description: 'With over 15 years of experience, Sarah founded Paws & Play with a vision to revolutionize pet care.',
      skills: ['Grooming', 'Training', 'Leadership'],
      image: img1
    },
    {
      id: 2,
      name: 'Marcus Chen',
      position: 'Senior Groomer',
      description: 'Marcus specializes in breed-specific cuts and has won multiple international grooming competitions.',
      skills: ['Breed Cuts', 'Styling', 'Competition'],
      image:img2
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Daycare Manager',
      description: 'Emily ensures every pet has a fun, safe, and engaging experience during their daycare stay.',
      skills: ['Pet Care', 'Activities', 'Management'],
      image:img3
    },
    {
      id: 4,
      name: 'James Wilson',
      position: 'Boarding Specialist',
      description: 'James creates a home-away-from-home experience for boarding pets with personalized attention.',
      skills: ['Boarding', 'Comfort', 'Care'],
      image: img4
    }
  ];

  const whyChooseUs = [
    {
      id: 1,
      icon: FaAward,
      title: 'Certified Excellence',
      description: 'Our team members hold professional certifications and undergo continuous training in the latest grooming techniques.'
    },
    {
      id: 2,
      icon: FaHandshake,
      title: 'Expert Experience',
      description: 'With over 50 combined years of experience, our team delivers exceptional results every single time.'
    },
    {
      id: 3,
      icon: FaHeart,
      title: 'Passionate Care',
      description: 'We love what we do and it shows in how we treat every pet with kindness, respect, and individual attention.'
    }
  ];

  return (
    <section className="team-page" id="team">
      {/* SECTION 1: Hero Banner */}
      <section className="team-hero">
        <div className="team-hero-content">
          <h1 className="team-hero-title">Meet Our Team</h1>
          <p className="team-hero-subtitle">
            Meet the talented and dedicated professionals behind Paws & Play who are passionate about providing the best care for your beloved pets.
          </p>
        </div>
      </section>

      {/* SECTION 2: Team Members Grid */}
      <section className="team-members-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title fw-bold mb-3">The Paws & Play Family</h2>
            <p className="section-subtitle">
              Meet the passionate professionals dedicated to your pet's wellbeing
            </p>
          </div>

          <div className="row g-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-lg-3 col-md-6 col-12">
                <div className="team-card">
                  <div className="team-image-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-image Team"
                    />
                    <div className="team-image-overlay"></div>
                  </div>
                  
                  <div className="team-card-content">
                    <h3 className="team-member-name fw-bold">{member.name}</h3>
                    <p className="team-member-position">{member.position}</p>
                    <p className="team-member-description">{member.description}</p>
                    
                    <div className="team-skills">
                      {member.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Choose Our Team */}
      <section className="why-choose-team">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title fw-bold mb-3">Why Choose Our Team</h2>
            <p className="section-subtitle">
              The best care for your precious companions
            </p>
          </div>

          <div className="row g-4">
            {whyChooseUs.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="col-lg-4 col-md-6 col-12">
                  <div className="why-card">
                    <div className="why-card-icon">
                      <IconComponent />
                    </div>
                    <h4 className="why-card-title fw-bold">{item.title}</h4>
                    <p className="why-card-description">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </section>
  );
};

export default Team;
