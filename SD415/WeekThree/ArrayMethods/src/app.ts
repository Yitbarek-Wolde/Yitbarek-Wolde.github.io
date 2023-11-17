type Student = { sid: number, answers: Answer[] };
type Answer = { qid: number, ans: string };
type Key = Answer[];

type Quiz = {
    students: Student[],
    key: Key,
    answerComparator: (ans1: Answer, ans2: Answer) => number,
    scoreStudent: (sid: number) => number,
    getAverage: () => number
};
export const quiz = {} as Quiz;
quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
{ sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
{ sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

/**
 * 
 * @param {Object} ans1 is an answer object
 * @param {Object} ans2 is an answer object 
 * @returns {number} difference of the identifiers
 */
function answerComparator(ans1: Answer, ans2: Answer): number {
    //IMPLEMENT THIS
    return ans1.qid - ans2.qid
}

/**
 * 
 * @param {*} sid student id
 * @returns {number} score for student
 * find this student
 * sort the student answers
 * compare them against key and add up matches
 */
quiz.scoreStudent = function (sid): number {
    //IMPLEMENT THIS
    let StId = quiz.students.find((findID) => findID.sid === sid)
    if (!StId)
        return 0
    let answerOfStudent = StId.answers.sort(answerComparator) //sort using qid
    let score = 0;
    for (let i = 0; i < answerOfStudent.length; i++) {
        const studentAnswer = answerOfStudent[i];
        const correctAnswer = quiz.key[i];
        console.log(studentAnswer, "  ", correctAnswer)
        if(studentAnswer.ans === correctAnswer.ans) {
            score++;
        }
    }

    return score;

};

/**
 * @returns {number} average score of all students
 * go through list of students and get score of each, then the average
 */
// quiz.getAverage = function(){
// //IMPLEMENT THIS

// };

quiz.getAverage = function(){
    //IMPLEMENT THIS
    let Ans = quiz.students.flatMap(findAnswers => findAnswers.answers)
    if(!Ans)
        return 0
    let answerOfStudent = Ans.sort(answerComparator)
    let score = 0;

    for (let i = 0; i < answerOfStudent.length; i++) {
        let j = 0
        const studentAnswer = answerOfStudent[i].ans;
        const correctAnswer = quiz.key[j++].ans;
        if(j == 2)
            j=0
    
        if(studentAnswer === correctAnswer) {
            score++;
         }
    }
    return score / answerOfStudent.length
};
console.log(quiz.getAverage())
