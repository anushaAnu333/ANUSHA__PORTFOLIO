import React from "react";
import { Helmet } from "react-helmet";

import {
	Navbar,
	Footer,
	Landing,
	About,
	Skills,
	Testimonials,
	Blog,
	Education,
	Experience,
	Contacts,
	Projects,
	Services,
	Achievement,
} from "../../components";
import { headerData } from "../../data/headerData";
import GitHubCalendar from "react-github-calendar";
import Skill from "../skillcard.js/Skill";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

function Main() {
	const { theme } = useContext(ThemeContext);
	return (
		<div>
			<Helmet>
				<title>{headerData.name} - Porfolio</title>
			</Helmet>

			<Navbar />
			<Landing />
			<About />
			<Education />
			<Skills />
{/* 
			<Experience /> */}
			<Projects />

			<Services />
			<div
				className="services"
				id="services"
				style={{ backgroundColor: theme.secondary }}
			>
				<div className="services-header">
					<h1 style={{ color: theme.primary }}>My Github Contribution</h1>
				</div>
				<div className="services-body">
					<div className="services-bodycontainer">
						
                        <GitHubCalendar username="anushaAnu333" year={new Date().getFullYear()} />
					</div>
				</div>
			</div>
			<Contacts />
			<Footer />
		</div>
	);
}

export default Main;
