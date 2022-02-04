const ProjectCard = ({ name, desc, url, image }) => {
    return (
        <div className="project">
            <div className="project-image">
                <img src={image.src} alt={image.alt}></img>
            </div>
            <div className="project-infos">
                <div className="project-text">
                    <h2>{name}</h2>
                    <p>{desc}</p>
                </div>
                <div className="project-link">
                    <a href={url.href}>{url.title}</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;