import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import Skilldatacard from './Skilldatacard';

import { Skilldata } from '../../data/Skilldata'

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="resume" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Education</h1>
                    {Skilldata.map(edu => (
                        <Skilldatacard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={theme.eduimg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Education
