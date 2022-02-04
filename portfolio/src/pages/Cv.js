import Header from "../components/Header";
import Presentation from "../components/Presentation";
import About from "../components/AboutMe";
import ExperienceList from "../components/ExperienceList";
import Formations from "../components/Formations";
import SkillList from "../components/SkillList";
import Diplome from "../components/Diplome";

const Cv = () => {
    return ( 
        <div id="cv">
            <Header />
            <Presentation />
            <About />
            <ExperienceList />
            <Formations />
            <SkillList />
            <Diplome />
        </div>
     );
}
 
export default Cv;