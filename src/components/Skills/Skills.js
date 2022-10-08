import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <div className="skills" id="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsHeader">
                <h2 style={{color: theme.primary}}>Technical Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} >
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                            
                        ))}
                         {/* <div className="skill--box" >
                                <img src="https://www.clipartmax.com/png/middle/310-3102762_cla-dsa-icon-stop-sign.png" alt=""/>
                                <h3 style={{color: theme.tertiary}}>
                                Data Structure & Algorithm
                                </h3>
                            </div>
                            <div className="skill--box" >
                                <img src="https://www.clipartmax.com/png/middle/49-490693_7-c-icon-communication-skill.png" alt=""/>
                                <h3 style={{color: theme.tertiary}}>
                                Communication Skill
                                </h3>
                            </div> */}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills
