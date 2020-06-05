// REVERSE WORD
function reverseWord(str) { // Validasi input, minimal harus mengandung 1 karakter
    if (str.length <= 1) {
        return `Inputan minimal harus mengandung 1 Karakter`;
    }

    let newStr = str.split(' '); // membuat variabel untuk memecah string jadi per KATA, dan menampungnya didalam Array.
    let revWord = newStr.reverse().join(' '); // variabel strRev untuk membalikan elemen yg ada didalam array newStr, lalu di koversi menjadi string.

    return revWord;

}

console.log(reverseWord('')); // Apabila tidak ada inputan, maka akan outputnya `Inputan minimal harus mengandung 1 Karakter`
console.log(reverseWord('aku cinta kamu')); // outputnya `kamu cinta aku`
console.log(reverseWord('saya belajar javascript')); // outputnya `javascript belajar saya`