const Answer = ({title, id, isCorrect, verify}) => {
    return (
        <button onClick={() => verify(id, isCorrect)}>
            {title}
        </button>
    );
}

export default Answer;