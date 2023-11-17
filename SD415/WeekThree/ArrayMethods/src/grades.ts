/*
This file contains  code for a quiz object. The quiz object has a key property that contains Answer objects that
each have a property for the correct answer and another for an identifier of the question.  The way to calculate scores 
for this data structure is to order the answers for a given student according to the qid property and do the same 
for the key.  Then compare the two lists of answers (parallel arrays) and add up the number of matches.  

You need to implement the three methods.

This is a good example of using a comparator function to sort an array of objects and working with a data structure of nesed
arrays and objects.

*/

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
    let answerOfStudent = StId.answers.sort(answerComparator)
    let score = answerOfStudent.reduce((acc, curr, i) => {
        const studentAnswer = curr.ans;
        const correctAnswer = quiz.key[i].ans;
        if (studentAnswer === correctAnswer) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
    return score;

};

/**
 * @returns {number} average score of all students
 * go through list of students and get score of each, then the average
 */
quiz.getAverage = function () {
    //IMPLEMENT THIS
    const score = quiz.students.reduce((sum, student) => sum + quiz.scoreStudent(student.sid), 0);
    return score / quiz.students.length;
};

