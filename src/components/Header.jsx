import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: "https://www.achieversit.com/assets/images/logo-white.png",
      title: "Clothing Store",
      links: [
        { label: "All Courses", href: "/courses" },
        { label: "Placements", href: "/placements" },
        { label: "Internship", href: "/internship" },
        { label: "Existing Students", href: "/students" },
        { label: "About Us", href: "/about" },
        { label: "Reviews", href: "/reviews" },
        { label: "Blog", href: "/blog" }
      ]
    };
  }

  render() {
    const { logo, title, links } = this.state;

    return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt={title} className="logo-img"/>
        </div>
        
        <nav>
          <ul className="nav-links">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
