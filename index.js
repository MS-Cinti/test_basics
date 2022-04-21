const words = ["codecool", "cool cat", "frontend is so cool", "dog", "cool school", "day", "cool day", "bad day"];

//1.megoldás:
/*function searchString(term) {

    return words.filter(word => word.indexOf(term) !== -1).slice(0, 5)
}

console.log(searchString("cool"));*/

//2.megoldás:
function search(arr, word){

    const result = arr.filter(element => element.includes(word))

    return result;
}

//console.log(search(words, "cool"));

module.exports = search