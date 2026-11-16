export default class Recepie{
    #name;
    #desc;
    #time;
    #difficulty;

    constructor(name, desc, time, difficulty){
        this.setName(name);
        this.setDesc(desc);
        this.setTime(time);
        this.setDifficulty(difficulty);

        this.getName = this.getName.bind(this);
        this.getDesc = this.getDesc.bind(this);
        this.getTime = this.getTime.bind(this);
        this.getDifficulty = this.getDifficulty.bind(this);

        this.setName = this.setName.bind(this);
        this.setDesc = this.setDesc.bind(this);
        this.setTime = this.setTime.bind(this);
        this.setDifficulty = this.setDifficulty.bind(this);
    }

    getName(){
        return this.#name;
    }

    getDesc(){
        return this.#desc;
    }

    getTime(){
        return this.#time;
    }

    getDifficulty(){
        return this.#difficulty;
    }

    setName(name){
        this.#name = name;
    }

     setDesc(desc){
        this.#desc = desc;
    }

     setTime(time){
        this.#time = time;
    }

     setDifficulty(difficulty){
        this.#difficulty = difficulty;
    }

    
}