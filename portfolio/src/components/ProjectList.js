import ProjectCard from './ProjectCard';
import fleur from '../img/fleur.png';
import montgolfiere from '../img/montgolfiere.png';

const projects = [{
    name:'Fonder une famille',
    desc:"2 mioches avec une bonne femme et le tour est joué. Ma famille est fondée, je vais évidemment les former au volley et aux blagues nulles pour que malgré la contrainte d'avoir des enfants je puisse me divertir tout de même car l'égoïsme est une valeur à laquelle je tiens particulièrement.",
    image:{ src: fleur, alt: 'fleur' },
    url:{ title: 'En savoir plus', href: '#' },
}, {
    name:'Devenir riche',
    desc:"Avoir beaucoup d'argent car je suis une personne vénale désirant se sentir supérieur aux autres. Ainsi je pourrai m'acheter un gymanse me permettant de jouer au volleyball jusqu'à la fin de mes jours. Sans oublier les KFC à gogo. La base c'est de manger du poulet après tout.",
    image:{ src: montgolfiere, alt: 'montgolfiere' },
    url:{ title: 'En savoir plus', href: '#' },
}]

function ProjectList() {
    return projects.map((project, i) => {
        return (
            <div className='project-container' key={i}>
                <ProjectCard name={project.name} desc={project.desc} image={{ src: project.image.src, alt: project.image.alt }} url={{ title: project.url.title, href: project.url.href }} />
            </div>
        )
    })
}

export default ProjectList;