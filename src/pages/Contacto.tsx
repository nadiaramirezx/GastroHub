import React from 'react';
import '../css/Contacto.css';
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";

const ContactUs: React.FC = () => {
  const teamMembers = [
    
    { 
      name: 'Anaya', 
      role: 'Frontend Developer', 
      email: 'Anaya@outlook.com', 
      photo: 'https://scontent.fcjs3-2.fna.fbcdn.net/v/t39.30808-6/449344773_1175517333585166_6636578767021378845_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFFjt0V3JIG14glWr2FYY0hZJ7jYrHZ2fNknuNisdnZ8z7WDfDVBhZAdjpN9BjzJXNEayRCYVdxrjpS67wg4H-h&_nc_ohc=My0gBkGCZfgQ7kNvgE3jy1w&_nc_zt=23&_nc_ht=scontent.fcjs3-2.fna&_nc_gid=AyizoDgD9OTKKrZOxpPNR0V&oh=00_AYAqkyVcjfn7lDDeE8TXjVHwFHzUfzm2IB7rWLMulwIkng&oe=675D6715' 
    },
    { 
      name: 'Apango Omar', 
      role: 'Backend Developer', 
      email: 'Omar@outlook.com', 
      photo: 'https://scontent.fcjs3-2.fna.fbcdn.net/v/t39.30808-1/456443208_7496603270441349_2374532010445295130_n.jpg?stp=c0.0.1152.1152a_dst-jpg_s100x100_tt6&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGymVAEXvbPpHzSOgCWzvcrfqoH1avbMDV-qgfVq9swNUs8-5Lbct0UPupJJYEcINnWZ7xRZmXYUZUgtSFRSOs3&_nc_ohc=-QVgedLXfYcQ7kNvgEJggyw&_nc_zt=24&_nc_ht=scontent.fcjs3-2.fna&_nc_gid=AHnN5sNanlRim3NtYl35kIL&oh=00_AYDgbKwtHbjV33TzMBAeBJCwXPkbiWAH8tluYFFN-vR98A&oe=675D5B90' 
    },
    { 
      name: 'Marco', 
      role: 'Frontend Developer', 
      email: 'Marco@outlook.com', 
      photo: 'https://scontent.fcjs3-1.fna.fbcdn.net/v/t39.30808-1/420150734_2053087901718767_7453660280354337019_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEkT331eq8najp0H5ePekWPZIHphrzDWkhkgemGvMNaSMU5I5mgGro0hHVSsqM7UpS9WJNEjWJmwuNS0wSOc4LF&_nc_ohc=tUz2g-1KFEkQ7kNvgGxRrDV&_nc_zt=24&_nc_ht=scontent.fcjs3-1.fna&_nc_gid=AivNCC9guelcxutvh9MawWo&oh=00_AYDUfBXfl9mZssm24SMNRcKKyOszOSdIXEtdJTannvEhUQ&oe=675D8877' 
    },
    { 
      name: 'Nadia', 
      role: 'UI/UX Designer', 
      email: 'Nadia@outlook.com', 
      photo: 'https://scontent.fcjs3-2.fna.fbcdn.net/v/t39.30808-6/287831122_2215758718571650_2354190532730581663_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHgKvWShoVBfl8waTseNdtWzPEyOXP6y_LM8TI5c_rL8jTxA13CRp1oqRodpWr-isDPa53fFNFiYlcqTtDCIGk2&_nc_ohc=ZhJ96I0XjFIQ7kNvgGCqLub&_nc_zt=23&_nc_ht=scontent.fcjs3-2.fna&_nc_gid=Au98lQNmdsbZqhR5ZuwssEM&oh=00_AYAHQLMkNyYtanhiD2cP2BIkYcyKSUT7wdCXs8K8n7IBSg&oe=675D8730' 
    },
    { 
      name: 'Brandon', 
      role: 'Frontend Developer', 
      email: 'Brandon@outlook.com', 
      photo: '' 
    },
    { 
      name: 'Gustavo', 
      role: 'Backend Developer', 
      email: 'Gustavo@outlook.com', 
      photo: 'https://scontent.fcjs3-2.fna.fbcdn.net/v/t39.30808-1/326296628_699920545012565_4251460375812196620_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGO_gdLVtEgIBTDJXkyDayoooNVCnqql4Sig1UKeqqXhH6Z9F7OKmNAstKHLTJV377RghYZvab-RxsF9brOwBYS&_nc_ohc=77IfWM9B7moQ7kNvgFBmPBE&_nc_zt=24&_nc_ht=scontent.fcjs3-2.fna&_nc_gid=A24oviUzXIsYAaMVz6Pau78&oh=00_AYDGpLKFIRtV_dWuWzNBefobClw5ltKTsr3Cpc66l0t0RA&oe=675D613E' 
    },
  ];

  return (
    <>
    <Header/>
    <div className="contact-us">
      <h1 className="contact-title">Contáctanos</h1>
      <p className="contact-subtitle">Conoce al equipo detrás de Gastro Hub</p>
      <div className="card-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.photo} alt={member.name} className="member-photo" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <a href={`mailto:${member.email}`} className="member-email">
              {member.email}
            </a>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
