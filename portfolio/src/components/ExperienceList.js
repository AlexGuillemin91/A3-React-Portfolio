import Experience from './Experience';

const experiences = [{
    name: 'Directeur de kfc',
    company: 'kfc',
    duration: '6mois',
}, {
    name: 'Joueur pro de volley',
    company: 'Equipe de France',
    duration: 'toute une vie'
}]

function ExperienceList() {
    return ( 
        <div className="experience-list">
            <div className="title">
                <h2>Mes expériences</h2>
            </div>
            <div className='list'>
                {experiences.map((experience, i) =>{
                    return (
                        <Experience key={i} name={experience.name} company={experience.company} duration={experience.duration}/>
                    )
                })}
            </div>
        </div>
     );
}
 
export default ExperienceList;