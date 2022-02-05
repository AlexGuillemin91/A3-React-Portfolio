import QuizCard from "./QuizCard";

function QuizList({quizs}) {
    return quizs.map((quiz, i) => {
        return (
            <div className='quiz-container' key={i}>
                <QuizCard title={quiz.title} desc={quiz.desc} id={quiz.id} />
            </div>
        )
    })
}

export default QuizList;