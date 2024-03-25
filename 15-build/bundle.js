class Task {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(this.name);
    }
}

class User {
    constructor(task) {
        this.task = task;
    }
    do() {
        this.task.run();
    }
}

const task = new Task('Tutya');
const user = new User(task);
user.do();
