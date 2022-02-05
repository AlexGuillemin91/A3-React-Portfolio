import Header from "../components/Header";
import quiz from "../services/QuizData";
import QuizList from "../components/QuizList";

const Quiz = () => {
    return ( 
        <div id="quiz">
            <Header />
            <h2>Quiz</h2>
            <div className="quiz-list">
                <QuizList quizs={quiz.getQuizData()} />
            </div>
        </div>
     );
}
 
export default Quiz;