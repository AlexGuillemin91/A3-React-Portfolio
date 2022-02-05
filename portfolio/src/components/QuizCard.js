import { Link } from "react-router-dom";

const QuizCard = ({ title, desc, id }) => {
    return (
        <div className="quiz">
            <Link to={`/quiz/${id}`}><h2>{title}</h2></Link>
            <p>{desc}</p>
            <p>10 questions</p>
        </div>
    );
}

export default QuizCard;