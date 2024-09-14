import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {
        logo: "https://www.achieversit.com/assets/images/logo-white.png", 
        description: "AchieversIT - Provides a wide group of opportunities for freshers and Experienced candidates who can develop their skills and build their career opportunities across multiple Companies."
      },
      links: {
        companyLinks: [
          { label: "Home", href: "/" },
          { label: "Placements", href: "/placements" },
          { label: "Corporate Training", href: "/corporate-training" },
          { label: "Contact Us", href: "/contact" }
        ],
        trendingCourses: [
          { label: "UI Development Course", href: "/ui-development" },
          { label: "Angular JS Course", href: "/angular-js" },
          { label: "React JS Course", href: "/react-js" },
          { label: "Digital Marketing Course", href: "/digital-marketing" },
          { label: "Python Course", href: "/python" }
        ]
      },
      contactInfo: {
        address: "#63, 1st Floor, 16th Main, 8th Cross, BTM 1st Stage, Bangalore, India - 560029",
        phone: "+91 8431-040-457",
        email: "info@achieversit.com"
      }
    };
  }

  render() {
    const { company, links, contactInfo } = this.state;

    return (
      <footer className="footer">
        <div className="footer-section company-info">
          <img src={company.logo} alt="AchieversIT Logo" className="footer-logo" />
          <p>{company.description}</p>
        </div>

        <div className="footer-section">
          <h3>COMPANY</h3>
          <ul className="footer-links">
            {links.companyLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>TRENDING COURSES</h3>
          <ul className="footer-links">
            {links.trendingCourses.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>CONTACT INFO</h3>
          <p>{contactInfo.address}</p>
          <p>India : {contactInfo.phone}</p>
          <p>Email : <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
        </div>
      </footer>
    );
  }
}

export default Footer;
