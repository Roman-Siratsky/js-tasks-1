const students = [
    {name: 'Olha', gender: 'female'},
    {name: 'Oleh', gender: 'male'},
    {name: 'Kristi', gender: 'female'}
];

const sortByGender = (students) => {
    const result = {};
    result.male = students.filter(student => {
        return student.gender === 'male';
    })
    result.female = students.filter(student => {
        return student.gender === 'female';
    })
    return result;
}

console.log(sortByGender(students));

// console.log(result);
