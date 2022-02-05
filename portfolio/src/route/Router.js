import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import projects from '../pages/Projects';
import Cv from '../pages/Cv';
import NoMatch from './NoMatch';
import Quiz from "../pages/Quiz";
import QuizSingle from "../pages/QuizSingle";

const Rooter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={projects} />
            <Route exact path="/cv" component={Cv} />
            <Route exact path="/quiz/:id" component={QuizSingle} />
            <Route exact path="/quiz" component={Quiz} />
            <Route path="*" component={NoMatch} />
        </Switch>
    </Router>
);

export default Rooter;
