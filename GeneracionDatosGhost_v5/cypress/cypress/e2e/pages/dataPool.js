import random_data from '../../../../data/random_data.json'

class dataPool {

    getRandomElement() {
        let index = this.generateRandomNumber(1, 1000) - 1;
        return random_data[index].value;
    }

    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

module.exports = new dataPool();
