function dogYears(planet, age){

    switch (planet) {
        case 'earth':
            return parseFloat((age / 31557600 * 7).toFixed(2))
        case 'mercury':
            return parseFloat((age / (31557600 * 0.2408467)*7).toFixed(2))
        case 'venus':
            return parseFloat((age / (31557600 * 0.61519726)*7).toFixed(2))
        case 'mars':
            return parseFloat((age / (31557600 * 1.8808158)*7).toFixed(2))
        case 'jupiter':
            return parseFloat((age / (31557600 * 11.862615)*7).toFixed(2))
        case 'saturn':
            return parseFloat((age / (31557600 * 29.447498)*7).toFixed(2))
        case 'uranus':
            return parseFloat((age / (31557600 * 84.016846)*7).toFixed(2))
        case 'neptune':
            return parseFloat((age / (31557600 * 164.79132)*7).toFixed(2))
    }

}
