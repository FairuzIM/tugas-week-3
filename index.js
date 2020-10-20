class Student {
    constructor({ name, age, dateOfBirth, gender, studentID, hobbies }) {
        this.name = name
        this.age = age
        this.dateOfBirth = dateOfBirth
        this.gender = gender
        this.studentID = studentID
        this.hobbies = hobbies
        switch (gender) {
            case 'male':
                this.gender = 'male'
                break;
            case 'female':
                this.gender = 'female'
                break;
            default:
                this.gender = 'Not Valid'
                break;
        }
    }
    setName(name) {
        this.name = name
    }
    setAge(age) {
        this.age = age
    }
    setDateOfBirth(dateOfBirth) {
        this.dateOfBirth = dateOfBirth
    }
    setGender(gender) {
        switch (gender) {
            case 'male':
                this.gender = 'male'
                break;
            case 'female':
                this.gender = 'female'
                break;
            default:
                this.gender = 'Not Valid'
                break;
        }
    }
    addHobby(hobby) {
        this.hobbies.push(hobby)
    }
    removeHobby(hobby) {
        const index = this.hobbies.indexOf(hobby);
        this.hobbies.splice(index, 1)
    }
    getData(){
        return this;
    }
}

const fairuz = new Student ({
    name : 'Fairuz',
    age : '24',
    dateOfBirth : '15 December 1996',
    gender : 'male',
    studentID : '0082020054',
    hobbies : ['Audiot', 'Gaming', 'Coding', 'Not a vvibu']
})