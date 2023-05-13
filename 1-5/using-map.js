function citiesOnly(s){
    return s.map(obj => obj.city)
}

function upperCasingStates(s){
    return s.map(obj => obj.split(" ").map(
        word => capitalize(word)
    ).join(" "))
}

function fahrenheitToCelsius(arr){
    return arr.map(val => Math.floor((parseInt(val.slice(0, -2))-32)/1.8)+'°C')
}

function trimTemp(arr){
    return arr.map(obj => Object.assign(obj, {temperature: obj.temperature.replace(/\s+/g, '')}))
}

function tempForecasts(s){
    let message = s.map(obj => Math.floor((parseInt(obj.temperature.slice(0, -2))-32)/1.8) + '°Celsius ' + 'in ' + obj.city + ', ' +  obj.state.split(" ").map(
        word => capitalize(word)
    ).join(" "))
    return message
}
function capitalize(arr){
    return arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase()
}

