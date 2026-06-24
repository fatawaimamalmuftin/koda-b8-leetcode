/**
 * FizzBuzz
 * Diberikan sebuah bilangan bulat n, kembalikan sebuah array string answer( berindeks 1 ) di mana :
 * answer[i] == "FizzBuzz"jika ihabis dibagi oleh 3dan 5.
 * answer[i] == "Fizz"jika ihabis dibagi 3.
 * answer[i] == "Buzz"jika ihabis dibagi 5.
 * answer[i] == i(sebagai string) jika tidak satu pun dari kondisi di atas terpenuhi.
 * 
 * Contoh 1:
 * Masukan: n = 3
 * Keluaran: ["1","2","Fizz"]
 * 
 * Contoh 2:
 * Masukan: n = 5
 * Keluaran: ["1","2","Fizz","4","Buzz"]
 * 
 * Contoh 3:
 * Masukan: n = 15
 * Keluaran: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 * 
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let value = [];

    for (let i = 0; i < n; i++) {
        let angka = i + 1
        if(angka % 3 === 0 && angka % 5 === 0){
            value.push("FizzBuzz")
        }else if(angka % 3 === 0){
            value.push("Fizz")
        }else if(angka % 5 === 0){
            value.push("Buzz")
        }else{
            value.push(String(angka))
        }
    }

    return value;
    // return console.log(value);
};

fizzBuzz(3)
fizzBuzz(5)
fizzBuzz(15)