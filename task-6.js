function anagramma(word1, word2, word3) {
    const str1 = word1.toLowerCase().split('').sort().join('');
    const str2 = word2.toLowerCase().split('').sort().join('');
    const str3 = word3.toLowerCase().split('').sort().join('');
    // console.log(str1,str2,str3);
    if (str1 === str2 && str1 === str3) {
        console.log(`${word1}, ${word2}, ${word3} это слова анаграммы`);
    } else {
        console.log(`это не аннаграммы`);
    }
}

anagramma('окт', 'кот', 'ток');