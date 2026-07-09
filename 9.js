
/**
 * Mengembalikan Panjang Argumen yang Diteruskan
 * 
 * Tulis sebuah fungsi  argumentsLengthyang mengembalikan jumlah argumen yang diberikan kepadanya.
 * 
 * Contoh 1:
 * Masukan: args = [5]
 * Keluaran: 1
 * Penjelasan:
 * panjang argumen(5); // 1
 * Satu nilai diberikan ke fungsi tersebut, jadi seharusnya fungsi tersebut mengembalikan nilai 1.
 * 
 * Contoh 2:
 * Masukan: args = [{}, null, "3"]
 * Keluaran: 3
 * Penjelasan: 
 * argumentsLength({}, null, "3"); // 3
 * Tiga nilai diberikan ke fungsi tersebut, jadi seharusnya fungsi tersebut mengembalikan nilai 3.
 * 
 * Batasan:
 * args merupakan array JSON yang valid
 * 0 <= args.length <= 100
 */
/**
* @param {...(null|boolean|number|string|Array|Object)} args
* @return {number}
*/
var argumentsLength = function (...args) {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */