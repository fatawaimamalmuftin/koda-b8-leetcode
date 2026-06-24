/**
 * Panjang Kata terahir
 * 
 * Diberikan sebuah string syang terdiri dari kata-kata dan spasi, kembalikan panjang kata terakhir dalam string tersebut.
 * Sebuah kata adalah maksimalsubstringhanya terdiri dari karakter selain spasi.
 * 
 * Contoh 1:
 * Input: s = "Hello World"
 * Output: 5
 * Penjelasan: Kata terakhir adalah "World" dengan panjang 5.
 * 
 * Contoh 2:
 * Masukan: s = " terbangkan aku ke bulan "
 * Keluaran: 4
 * Penjelasan: Kata terakhir adalah "bulan" dengan panjang 4.
 * 
 * Contoh 3:
 * Masukan: s = "luffy masih joyboy"
 * Keluaran: 6
 * Penjelasan: Kata terakhir adalah "joyboy" dengan panjang 6.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const kata =[s]   
    console.log(kata)
};
lengthOfLastWord("Hello World")
lengthOfLastWord("terbangkan aku ke bulan")
lengthOfLastWord("luffy masih joyboy")