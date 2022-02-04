import Skill from './Skill';
import html from '../img/html.svg';
import css from '../img/css.svg';
import sass from '../img/sass.svg';
import js from '../img/js.svg';
import react from '../img/react.svg';
import git from '../img/git.svg';
import mysql from '../img/mysql.svg';
import mongodb from '../img/mongodb.svg';

const skills = [{
    name: 'html5',
    img: html
}, {
    name: 'css3',
    img: css
}, {
    name: 'sass',
    img: sass
}, {
    name: 'javascript',
    img: js
}, {
    name: 'react',
    img: react
}, {
    name: 'git',
    img: git
}, {
    name: 'mysql',
    img: mysql
}, {
    name: 'mongodb',
    img: mongodb
}]

function SkillList() {
    return ( 
        <div className="skill-list">
            <div className="title">
                <h2>Mes skills</h2>
            </div>
            <div className='list'>
                {skills.map((skill, i) =>{
                    return (
                        <Skill key={i} name={skill.name} img={skill.img}/>
                    )
                })}
            </div>
        </div>
     );
}
 
export default SkillList;