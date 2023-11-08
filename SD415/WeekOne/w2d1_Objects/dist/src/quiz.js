export function gradeStudent(studentAnswers, correct) {
    let counter = 0;
    for (let i = 0; i < studentAnswers.length; i++) {
        if (studentAnswers[i] === correct[i])
            counter++;
    }
    return counter;
}
export function gradeQuiz(StudentsObject, correctAnswer) {
    let returnArray = [];
    for (let i = 0; i < StudentsObject.length; i++) {
        returnArray.push(gradeStudent(StudentsObject[i].quizAnswers, correctAnswer));
    }
    return returnArray;
}
//IMPLEMENT THIS
export function gradeQuizLabeled(studentAll, correctAnswer) {
    let labeledScores = [];
    for (let i = 0; i < studentAll.length; i++) {
        labeledScores.push({ id: studentAll[i].studentId, score: gradeStudent(studentAll[i].quizAnswers, correctAnswer) });
    }
    return labeledScores;
}
//IMPLEMENT THIS
