function countVowels(word) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        let char = word[i].toLowerCase();

        if ("aeiou".includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("JavaScript"));
console.log(countVowels("EDUCATION"));
console.log(countVowels("Hello"));
