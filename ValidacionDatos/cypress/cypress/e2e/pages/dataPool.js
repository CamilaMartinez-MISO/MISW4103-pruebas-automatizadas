import random_data from '../../../../data/random_data.json'
import navigation_data from '../../../../data/navigation_data.json'

class dataPool {

    getRandomElement() {
        let index = this.generateRandomNumber(1, 1000) - 1;
        return random_data[index].value;
    }

    getRandomLabelNavigation() {
        let index = this.generateRandomNumber(1, 1000) - 1;
        return navigation_data[index].label;
    }

    getRandomUrlNavigation() {
        let index = this.generateRandomNumber(1, 1000) - 1;
        return navigation_data[index].url;
    }

    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

module.exports = new dataPool();
