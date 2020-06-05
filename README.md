# Arkademy B16.3 - Tugas 2
## Reverse Word
[Source code : Reverse Word](https://github.com/dimasdompit/Arkademy-B16.3---Tugas-2/blob/master/reverse-word.js)
#### Algoritma :
* Mulai
* Deklarasi variabel *newStr* , *revWord*
* Masukkan input
* Cek kondisi jika tidak ada inputan atau input lebih kecil dari 1, maka cetak output *Inputan minimal harus mengandung 1 karakter* dan selesai
* Jika tidak, maka lanjutkan proses berikutnya
* Pecah inputnya menjadi per kata dan tampung dalam array, lalu masukkan ke variabel *newStr*
* Balik elemen yg ada di *newStr*, konversi elemennya menjadi string dan masukkan ke variabel *revWord*
* Cetak output
* Selesai

```
function reverseWord(str) { 
    if (str.length < 1) {
        return `Inputan minimal harus mengandung 1 Karakter`;
    }

    let newStr = str.split(' '); 
    let revWord = newStr.reverse().join(' ');

    return revWord;

}

console.log(reverseWord('')); // Apabila tidak ada inputan, maka akan outputnya 'Inputan minimal harus mengandung 1 Karakter'
console.log(reverseWord('aku cinta kamu')); // outputnya 'kamu cinta aku'
console.log(reverseWord('saya belajar javascript')); // outputnya 'javascript belajar saya'
```

## Screen Shot Output Tugas 2
![alt text](https://github.com/dimasdompit/Arkademy-B16.3---Tugas-2/blob/master/ss%20reverse-word.png)
