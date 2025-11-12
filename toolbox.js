export class Toolbox {

    //gets a random number 0 -> array.length, given an array.
    getRandomIndex(array) {
        return Math.floor(
            Math.random() * array.length
        );
    }

    //gets a random item from an array
    getRandomItem(array) {
        let randomIndex = this.getRandomIndex(array);
        return array[randomIndex];
    }
}
