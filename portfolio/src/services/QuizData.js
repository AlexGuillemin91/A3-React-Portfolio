const QuizData = [{
    id: "1",
    title: "Quiz KFC",
    desc: "testez vos connaissances en matuère de kfc",
    questions: [{
        id: '1',
        title: "Quel est le maximum de tenders possible dans un bucket ?",
        answers: [{
            id: '1',
            title:'12',
        },{
            id: '2',
            title:'20',
        },{
            id: '3',
            title:'32',
        },{
            id: '4',
            title:'50',
        }],
        correct: '2',
    },{
        id: '2',
        title: "Quel est le maximum de hot wings possible dans un bucket ?",
        answers: [{
            id: '1',
            title:'12',
        },{
            id: '2',
            title:'20',
        },{
            id: '3',
            title:'32',
        },{
            id: '4',
            title:'50',
        }],
        correct: '4',  
    }]
},{
    id: "2",
    title: "Quiz Volley",
    desc: "Réponds à ce quiz sur le volleyball",
    questions: [{
        id: '1',
        title: "Qui est le joueur portant le numéro 11 dans l'équipe nationale du Japon?",
        answers: [{
            id: '1',
            title:'Yuji Nishida',
        },{
            id: '2',
            title:'Yuki Ishikawa',
        },{
            id: '3',
            title:'Ran Takahashi',
        },{
            id: '4',
            title:'Jenia Grebennikov',
        }],
        correct: '1',
    },{
        id: '2',
        title: "Qui a remporté les JO 2020 de volleyball",
        answers: [
            {
                id: '1',
                title:'La Pologne',
            },
            {
                id: '2',
                title:'Le Brésil',
            },
            {
                id: '3',
                title:'La Russie',
            },
            {
                id: '4',
                title:'La France',
            }],
        correct: '4',  
    }]
}]

const quiz = {
    getQuizData() {
        return QuizData
    },
    getQuiz(id) {
        return QuizData.find(q => q.id === id)
    }
}

export default quiz;