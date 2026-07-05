/**
 * Reverse Integer
 * 
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * 
 * Example 1:
 * Input: x = 123
 * Output: 321
 * 
 * Example 2:
 * Input: x = -123
 * Output: -321
 * 
 * Example 3:
 * Input: x = 120
 * Output: 21
 * 
 * Constraints:
 * -231 <= x <= 231 - 1
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let angka = Math.abs(x);

    let hasil = Number(
        String(angka)
            .split("")
            .reverse()
            .join("")
    );

    if (x < 0) {
        hasil = -hasil;
    }
    // batas 32bit
    const batasBawah = -(2 ** 31);
    const batasAtas = (2 ** 31) - 1;

    if (hasil < batasBawah || hasil > batasAtas) {
        return 0;
    }

    console.log(hasil);
    // return hasil;
};

reverse(123)
reverse(-123)
reverse(120)