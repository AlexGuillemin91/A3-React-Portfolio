import Answer from "./Answer";

function AnswerList({answers, isCorrect, verify}) {
    return answers.map((answer, i) => {
        return (
            <div className='answer-container' key={i}>
                <Answer title={answer.title} id={answer.id} isCorrect={isCorrect} verify={verify} />
            </div>
        )
    })
}

export default AnswerList;