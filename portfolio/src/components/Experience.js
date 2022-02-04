const Experience = ({ name, company, duration }) => {
    return (
        <div className="experience">
            <h3>Poste : {name}</h3>
            <p>Entreprise : {company}</p>
            <p>Durée : {duration}</p>
        </div>
    );
}

export default Experience;