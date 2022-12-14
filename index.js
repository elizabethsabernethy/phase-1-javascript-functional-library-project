
function myEach(collection, callback){
    //if the collection is an object, do the param thing
    if(typeof collection === 'object'){
        let newArray = Object.values(collection);
        for (let i=0; i<newArray.length; i++){
            let param = newArray[i];
            callback(param);
        }
        return collection;
    }
    //if the collection is an array, do the otherParam thing
    if(Array.isArray(collection)){
        for(let i=0; i<collection.length; i++){
            let otherParam = collection[i];
            callback(otherParam);
        }
        return collection;
    }
}

function myMap(collection, callback){
    if(typeof collection === 'object'){
        let array = Object.values(collection);
        let newArray = [];
        for (let i=0; i<array.length; i++){
            let param = array[i];
            newArray[i] = callback(param);
        }
        return newArray;
    }
    //if the collection is an array, do the otherParam thing
    if(Array.isArray(collection)){
        let newArray = [];
        for(let i=0; i<collection.length; i++){
            let otherParam = collection[i];
            callback(otherParam);
            newArray[i] = callback(otherParam);
        }
        return newArray;
    }
}

function myReduce(collection, callback, acc){
    if(acc){
        if(typeof collection === 'object'){
            let newArray = Object.values(collection);
            for (let i=0; i<newArray.length; i++){
                let param = newArray[i];
;               acc = callback(acc,param,newArray);
            }
            return acc;
        }
        if(Array.isArray(collection)){
            for(let i=0; i<collection.length; i++){
                let param = collection[i];
                acc = callback(acc,param,collection);
            }
            return acc;
        }
    }
    else{
        if(typeof collection === 'object'){
            let newArray = Object.values(collection);
            acc = newArray[0];
            for (let i=1; i<newArray.length; i++){
                let param = newArray[i];
;               acc = callback(acc,param,newArray);
            }
            return acc;
        }
        if(Array.isArray(collection)){
            acc = collection[0];
            for(let i=1; i<collection.length; i++){
                let param = collection[i];
                acc = callback(acc,param,collection);
            }
            return acc;
        }
    }
}

function myFind(collection, predicate){
    if(typeof collection === 'object'){
        let newArray = Object.values(collection);
        for (let i=0; i<newArray.length; i++){
            let param = newArray[i];
            if(predicate(param)){
                return param;
            };
        }
    }
    if(Array.isArray(collection)){
        for(let i=0; i<collection.length; i++){
            let param = collection[i];
            if(predicate(param)){
                return param;
            };
        }
    }
}

function myFilter(collection, predicate){
    if(typeof collection === 'object'){
        let array = [];
        let newArray = Object.values(collection);
        for (let i=0; i<newArray.length; i++){
            let param = newArray[i];
            if(predicate(param)){
                array.push(param);
            };
        }
        return array;
    }
    if(Array.isArray(collection)){
        let array = [];
        for(let i=0; i<collection.length; i++){
            let param = collection[i];
            if(predicate(param)){
                array.push(param);
            };
        }
    }
    return array;
}

function mySize(collection){
    if(typeof collection === 'object'){
        let size = 0;
        let newArray = Object.values(collection);
        for (let i=0; i<newArray.length; i++){
            size+=1;
        }
        return size;
    }
    if(Array.isArray(collection)){
        let size = 0;
        for(let i=0; i<collection.length; i++){
           size+=1;
        }
        return size;
    }
}

function myFirst(array, int){
    if(int){
        let newArray = [];
        for(let i=0; i<int;i++){
            let element = array[i];
            newArray.push(element);
        }
        return(newArray);
    }
    if(!int){
        return array[0];
    }
}

function myLast(array, int){
    if(int){
        let lastSet = array.length - int;
        return (array.slice(lastSet));
    }
    if(!int){
        let last = array.length - 1;
        return array[last];
    }
}

function myKeys(object){
    return Object.keys(object);
}

function myValues(object){
    return Object.values(object);
}