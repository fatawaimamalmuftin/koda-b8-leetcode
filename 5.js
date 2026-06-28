/**
 * Valid Parentheses
 * 
 * Diberikan sebuah string syang hanya berisi karakter '(', ')', '{', '}', '['dan ']', tentukan apakah string masukan tersebut valid.
 * String input dianggap valid jika:
 * Tanda kurung buka harus ditutup dengan tanda kurung jenis yang sama.
 * Tanda kurung buka harus ditutup sesuai urutan yang benar.
 * Setiap tanda kurung tutup memiliki tanda kurung buka yang sesuai dengan tipe yang sama.
 * 
 * Contoh 1:
 * Masukan: s = "()"
 * Output: benar
 * 
 * Contoh 2:
 * Masukan: s = "()[]{}"
 * Output: benar
 * 
 * Contoh 3:
 * Masukan: s = "(]"
 * Output: false
 * 
 * Contoh 4:
 * Masukan: s = "([])"
 * Output: benar
 * 
 * Contoh 5:
 * Masukan: s = "([)]"
 * Output: false
 * 
 * Batasan:
 * 1 <= s.length <= 104
 * sterdiri dari tanda kurung saja '()[]{}'.
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stact = []

    for (const n of s) {
        if(n === '(' || n === '{' || n === '['){
            stact.push(n)
        }else{
            if(stact.length === 0) return console.log(false);
            let open = stact.at(-1)
            if(open === '(' && n === ')' || open === '{' && n === '}' || open === '[' && n === ']'){
                stact.pop()
            }else{
                return console.log(false);
            }
        }
    }
    if(stact.length === 0)return console.log(true);
}
isValid("()")
isValid("()[]{}")
isValid("(]")
isValid("([])")
isValid("([)]")
