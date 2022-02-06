const Answer = ({title, id, isCorrect, verify}) => {
    return (
        <div onClick={() => verify(id, isCorrect)} className="answer">
            {title}
        </div>
    );
}

export default Answer;