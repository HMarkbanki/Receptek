export default class Recepie {
    #name;
    #desc;
    #time;
    #difficulty;
    #picture;

    constructor(name, desc, time, difficulty, picture) {
        this.setName(name);
        this.setDesc(desc);
        this.setTime(time);
        this.setDifficulty(difficulty);
        this.setPicture(picture);

        this.getName = this.getName.bind(this);
        this.getDesc = this.getDesc.bind(this);
        this.getTime = this.getTime.bind(this);
        this.getDifficulty = this.getDifficulty.bind(this);
        this.getPicture = this.getPicture.bind(this);


        this.setName = this.setName.bind(this);
        this.setDesc = this.setDesc.bind(this);
        this.setTime = this.setTime.bind(this);
        this.setDifficulty = this.setDifficulty.bind(this);
        this.setPicture = this.setPicture.bind(this);
    }

    getPicture() {
        return this.#picture
    }

    setPicture(picture) {
        this.#picture = picture
    }

    getName() {
        return this.#name;
    }

    getDesc() {
        return this.#desc;
    }

    getTime() {
        return this.#time;
    }

    getDifficulty() {
        return this.#difficulty;
    }

    setName(name) {
        this.#name = name;
    }

    setDesc(desc) {
        this.#desc = desc;
    }

    setTime(time) {
        this.#time = time;
    }

    setDifficulty(difficulty) {
        this.#difficulty = difficulty;
    }


}