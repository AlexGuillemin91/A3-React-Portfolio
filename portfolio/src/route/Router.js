import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import projects from '../pages/Projects';
import Cv from '../pages/Cv';
import NoMatch from './NoMatch';

const Rooter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={projects} />
            <Route path="/cv" component={Cv} />
            <Route path="*" component={NoMatch} />
        </Switch>
    </Router>
);

export default Rooter;
