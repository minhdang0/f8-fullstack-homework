function groupStudent(students) {
    let highest = students[0];
    let lowest = students[0];

    for(let student of students) {
        if(student.score > highest.score){
            highest = student;
        }
        if(student.score < lowest.score){
            lowest = student;
        }
    }
    const group = {};
    let evaluation;
    for(let student of students){
        if(student.score >=8){
            evaluation = 'A';
        }
        else if(student.score >=6){
            evaluation = 'B';
        }
        else if(student.score>=4) {
            evaluation='C'
        } else{
            evaluation ='D';
        }
        if(!group[evaluation]){
            group[evaluation] = []
        }
        group[evaluation].push(student);
    }
    const groupByStudent = {};
    groupByStudent.highest = highest;
    groupByStudent.lowest = lowest;
    groupByStudent.group = group;
    return groupByStudent;
}
const students = [
    { name: 'Nguyen Van A', score: 9 },
    { name: 'Tran Thi B', score: 7 },
    { name: 'Le Van C', score: 5 },
    { name: 'Pham Thi D', score: 3 },
    { name: 'Doan Van E', score: 10 },
    { name: 'Hoang Thi F', score: 6 },
];
console.log(groupStudent(students));



