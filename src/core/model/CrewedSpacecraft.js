import {Spacecraft} from './Spacecraft';

class CrewedSpacecraft extends Spacecraft{
    constructor(name, weight, speed, crewCapacity){
        super(name, weight);
        this._speed = speed;
        this._crewCapacity = crewCapacity;
    }

    get speed(){
        return this._speed;
    }
    get crewCapacity(){
        return this._crewCapacity;
    }
}

export {CrewedSpacecraft}