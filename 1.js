/**
 * Bilangan Palindrom
 * Diberikan sebuah bilangan bulat x, kembalikan nilai truejika xadalah sebuah bilangan bulat.palindrom, dan falsesebaliknya .
 * 
 * Contoh 1:
 * Input: x = 121
 * Output: true
 * Penjelasan: 121 dibaca sebagai 121 dari kiri ke kanan dan dari kanan ke kiri.
 * 
 * Contoh 2:
 * Input: x = -121
 * Output: false
 * Penjelasan: Dari kiri ke kanan, dibaca -121. Dari kanan ke kiri, menjadi 121-. Oleh karena itu, ini bukan palindrom.
 * 
 * Contoh 3:
 * Masukan: x = 10
 * Keluaran: false
 * Penjelasan: Dibaca 01 dari kanan ke kiri. Oleh karena itu, ini bukan bilangan palindrom.
 * 
 * Batasan:
 * -231 <= x <= 231 - 1
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let before = Array.from(String(x))
    let after = [];
    for (let i = 0; i < before.length; i++) {
        after.unshift(before[i])
    }
    let hasilA = String(after)
    let hasilB = String(before)
  
    if(hasilA === hasilB){
        return true
    }else{
        return false
    }
};
isPalindrome(121)
isPalindrome(-121)
isPalindrome(10)
