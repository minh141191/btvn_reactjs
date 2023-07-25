export default class Student {
    id;
    name;
    image;
    age;
    gender;
    email;
    avg;
    address;
    constructor(id, name, image, age, gender, email, avg, address) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.avg = avg;
        this.address = address;
    }
}