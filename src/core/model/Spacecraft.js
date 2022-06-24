class Spacecraft{

    constructor(name, weight){
        this._name = name;
        this._weight = weight;
    }
    
    get name(){
        return this._name;
    }
    get weight(){
        return this._weight;
    }

}

export {Spacecraft}