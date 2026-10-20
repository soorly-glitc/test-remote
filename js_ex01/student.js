#Git 첫 실습

const students: [
        { no: 1, name: "홍길동", age: 20, score: 85 },
        { no: 2, name: "김철수", age: 21, score: 90 },
        { no: 3, name: "이영희", age: 20, score: 95 },
        { no: 4, name: "박민수", age: 22, score: 78 },
        { no: 5, name: "최지우", age: 21, score: 88 },
        { no: 6, name: "정하늘", age: 20, score: 92 },
        { no: 7, name: "강민지", age: 23, score: 76 },
        { no: 8, name: "윤서준", age: 21, score: 83 },
        { no: 9, name: "장유진", age: 22, score: 97 },
        { no: 10, name: "조현우", age: 20, score: 81 }
    ];


function print_student() { //v1
    students.forEach(student => {
        console.log(student);
    });
}
