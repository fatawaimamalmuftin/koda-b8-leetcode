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
        stact.push(n)
        if(stact[stact.length -2] === "(" && stact[stact.length -1] === ")"){
            stact.pop()
            stact.pop()
        }else if(stact[stact.length -2] === "{" && stact[stact.length -1] === "}"){
            stact.pop()
            stact.pop()
        }else if(stact[stact.length -2] === "[" && stact[stact.length -1] === "]"){
            stact.pop()
            stact.pop()
        }
    }
    if(stact.length === 0){
        return console.log(true)
    }else{
        return console.log(false)
    }
}
isValid("()")
isValid("()[]{}")
isValid("(]")
isValid("([])")
isValid("([)]")
