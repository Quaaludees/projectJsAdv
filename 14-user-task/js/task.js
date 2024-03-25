'use strict';

export class Task {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(this.name);
    }
}