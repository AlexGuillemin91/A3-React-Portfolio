import AnswerList from "./AnswerList";

const Question = ({title, answers, correct, verify}) => {

    const shuffleArray = (array) => {
        let new_arr = [];
        while (new_arr.length < array.length) {
            let random_item = array[Math.floor(Math.random() * (array.length))];
            if (!new_arr.includes(random_item)) { new_arr.push(random_item) }
        }
        return new_arr
    }

    answers = shuffleArray(answers);

    return (
        <div className="question">
            <h3>{title}</h3>
            <div className="answers-list">
                <AnswerList answers={answers} isCorrect={correct} verify={verify} />
            </div>
        </div>
    );
}

export default Question;