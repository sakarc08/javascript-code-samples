const json = {
    "one": "prop1",
    "two": {
        "two1": ["1", "2"],
    },
    "three": [3,4]
}

// '{"one":"prop1","two":{"two1":["1","2"]},"three":[3,4]}'
JSON.__proto__.myStringify = obj => {
    const props = Object.keys(obj);
    let str = "'{";

    function stringify(key, value) {
        if (typeof value === 'string') {
            return `"${key}":"${value}"`;
        } else if (Array.isArray(value)) {
            return `"${key}":${value}`;
        }
        else if (typeof value === 'object'){
            return myStringify(value);
        } 
        return `"${key}":${value}`;
    }
    console.log(props)
    props.forEach((prop, index) => {
        let key = prop;
        let value = obj[prop];
        
        str += stringify(key,value);
        if (props.length - 1 != index) str+=',';
    })
    // props.forEach((prop, index) => {
    //     if (typeof obj[prop] === 'object') {
    //         str += myStringify(obj[prop]);
    //     } else {
    //         str = `${index === 0 ? '{' : ''}${str}"${prop}":"${obj[prop]}"${index != props.length-1 ? ',' : ''}${index === props.length-1 ? '}' : ''}`;
    //     }
    // });
    return str + "'}";
}

console.log(JSON.myStringify(json));