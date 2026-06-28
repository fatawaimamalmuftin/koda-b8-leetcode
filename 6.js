/**
 * Menghapus Duplikat dari Array yang Sudah Diurutkan
 * 
 * Diberikan sebuah array bilangan bulat numsyang diurutkan dalam urutan tidak menurun , hapus duplikatnya di tempat sehingga setiap elemen unik hanya muncul sekali . Urutan relatif elemen harus tetap sama .
 * Misalkan jumlah elemen unik dalam  numsadalah ​​​​​​​. Setelah menghapus duplikat, kembalikan jumlah elemen unik  .k​​​​​​​k
 * Elemen pertama  k dari  nums harus berisi angka unik dalam urutan terurut . Elemen yang tersisa setelah indeks  k - 1 dapat diabaikan.
 * Hakim Khusus:
 * Juri akan menguji solusi Anda dengan kode berikut:
 * int[] nums = [...]; // Array input
 * int[] expectedNums = [...]; // Jawaban yang diharapkan dengan panjang yang benar
 * int k = removeDuplicates(nums); // Memanggil implementasi Anda
 * assert k == expectedNums.length;
 * untuk (int i = 0; i < k; i++) {
 * assert nums[i] == expectedNums[i];
 * }
 * Jika semua pernyataan terpenuhi, maka solusi Anda akan diterima .
 * 
 * Contoh 1:
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Penjelasan: Fungsi Anda seharusnya mengembalikan k = 2, dengan dua elemen pertama dari nums masing-masing adalah 1 dan 2.
 * Tidak masalah apa yang Anda tinggalkan setelah huruf k yang dikembalikan (karena itu huruf k tersebut berupa garis bawah).
 * 
 * Contoh 2:
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * Penjelasan: Fungsi Anda seharusnya mengembalikan k = 5, dengan lima elemen pertama dari nums masing-masing adalah 0, 1, 2, 3, dan 4.
 * Tidak masalah apa yang Anda tinggalkan setelah huruf k yang dikembalikan (karena itu huruf k tersebut berupa garis bawah).
 * 
 * Batasan:
 * 1 <= nums.length <= 3 * 104
 * -100 <= nums[i] <= 100
 * numsdiurutkan dalam urutan yang tidak menurun .
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
};