
export interface StudentQuiz {
    studentId: number,
    quizAnswers: number[]
}

export function gradeStudent(studentAnswers: number[], correct: number[]): number {
    let counter = 0;
    for(let i = 0; i < studentAnswers.length; i++){
        if(studentAnswers[i]===correct[i])
          counter++;
    }
    return counter
}

export function gradeQuiz(StudentsObject: any[], correctAnswer: number[]):number[]{
    let returnArray=[];
    for(let i = 0; i < StudentsObject.length; i++){
        returnArray.push(gradeStudent(StudentsObject[i].quizAnswers, correctAnswer));
    }
    return returnArray
}
//IMPLEMENT THIS



export function gradeQuizLabeled(studentAll: any[], correctAnswer:number[]):any[]{
    let labeledScores: { id: number, score: number }[] = [];
    for (let i = 0; i < studentAll.length; i++) {
        labeledScores.push({ id: studentAll[i].studentId, score: gradeStudent(studentAll[i].quizAnswers, correctAnswer) });
    }
    return labeledScores;
}
//IMPLEMENT THIS

