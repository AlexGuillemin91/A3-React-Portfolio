import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import quiz from "../services/QuizData";
import Question from "../components/Question";


const QuizSingle = () => {
    const { id } = useParams();
    const [quizz, setQuizz] = useState(null);
    const [actualQuestion, setActualQuestion] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        setQuizz(quiz.getQuiz(id));
    }, [id]);

    const VerifyAnswer = (id, correct) => {
        setActualQuestion(actualQuestion + 1);
        if (id === correct) {
            setScore(score + 1);
            return true;
        }
        else {
            return false;
        }
    }

    return quizz ?
        <div>
            <Header />
            <h2>{quizz.title} {id} </h2>
            {actualQuestion < quizz.questions.length ?
                <Question title={quizz.questions[actualQuestion].title}
                    answers={quizz.questions[actualQuestion].answers}
                    correct={quizz.questions[actualQuestion].correct}
                    verify={VerifyAnswer} />
                : <div>
                    {score}/10
                </div>}
        </div>
        : null;
}

export default QuizSingle;