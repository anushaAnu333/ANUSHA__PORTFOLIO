import React, { useState } from "react";
import "./navbar.css";
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
function Navbar2() {
  
	const [showMediaIcons, setShowMediaIcons] = useState(false);
	return (
		<>
			<nav className="main-nav">
				{/* 1st logo part  */}

				{/* 2nd menu part  */}
				<div
					className={
						showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
					}
				>
					<ul>
						<li>
							<Link
								activeClass="active"
								to="/"
								spy={true}
								smooth={true}
								offset={50}
								duration={500}
							
							>
								Home
							</Link>
						</li>
            <li>
							<Link
								activeClass="active"
								to="about"
								spy={true}
								smooth={true}
								offset={50}
								duration={500}
							
							>
							About
							</Link>
						</li>
            <li>
							<Link
								activeClass="active"
								to="education"
								spy={true}
								smooth={true}
								offset={50}
								duration={500}
							
							>
						Education
							</Link>
						</li>
            <li>
							<Link
								activeClass="active"
								to="skills"
								spy={true}
								smooth={true}
								offset={50}
								duration={500}
							
							>
								Skills
							</Link>
						</li>
            <li>
							<Link
								activeClass="active"
								to="projects"
								spy={true}
								smooth={true}
								offset={50}
								duration={500}
							
							>
								Projects
							</Link>
						</li>
            <li>
							<Link
								activeClass="active"
								to="contacts"
								spy={true}
								smooth={true}
								offset={50}
								duration={500}
							
							>
								Contact
							</Link>
						</li>
					
					</ul>
				</div>

				{/* 3rd social media links */}
				<div className="social-media">
					{/* hamburget menu start  */}
					<div className="hamburger-menu">
						<a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
							<GiHamburgerMenu />
						</a>
					</div>
				</div>
			</nav>

			{/* hero section  */}
			{/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
		</>
	);
}

export default Navbar2;
