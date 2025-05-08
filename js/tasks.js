// ==============================================
// ================= 1-masala ==================
// ==============================================
// Topic: try {} catch {} finally {}
// Ibrohimjon o'zining "raqam kvadrati" kalkulyatorini sinab ko'rmoqda, lekin har doim
// noto'g'ri ma'lumot kiritadi! Funksiya son qabul qiladi va uning kvadratini hisoblaydi.
// Agar xato yuz bersa, "Ibrohimjon, yana xato qilding!" qaytariladi. Finally blokida
// "Hisoblash tugadi!" xabari chiqadi.
// Input: a = 5 в†’ Output: 25
// Input: a = "bes" в†’ Output: "Ibrohimjon, yana xato qilding!"
// Har doim finally xabari: "Hisoblash tugadi!"

export function squareNumber(a) {
}

// ==============================================
// ================= 2-masala ==================
// ==============================================
// Topic: try {} catch {} finally {}
// Zafarjon "string uzunligi" hisoblagichini yasadi, lekin u har doim null yoki son
// kiritadi! Funksiya string qabul qiladi va uning uzunligini qaytaradi. Agar xato
// yuz bersa, "Zafarjon, bu nima?!" qaytariladi. Finally blokida "Tahlil tugadi!"
// xabari chiqadi.
// Input: str = "salom" в†’ Output: 5
// Input: str = null в†’ Output: "Zafarjon, bu nima?!"
// Har doim finally xabari: "Tahlil tugadi!"

export function stringLength(str) {}

// ==============================================
// ================= 3-masala ==================
// ==============================================
// Topic: fill metodi
// Ne'matjon o'zining "raqamlar ro'yxati"ni to'ldirmoqchi, lekin u faqat chalkashadi!
// Funksiya raqamlar arrayini qabul qiladi va barcha elementlarni 42 bilan to'ldiradi.
// Agar array bo'sh bo'lsa, bo'sh array qaytariladi.
// Input: arr = [1, 2, 3] в†’ Output: [42, 42, 42]
// Input: arr = [] в†’ Output: []

export function fillWith42(arr) {
  // Mantiq yozing
}

// ==============================================
// ================= 4-masala ==================
// ==============================================
// Topic: splice metodi
// Hamidulloh o'z ro'yxatiga yangi element qo'shmoqchi, lekin har doim noto'g'ri joyga
// qo'shadi! Funksiya array qabul qiladi, 2-indeksdagi elementni o'chiradi va o'rniga
// 100 qo'shadi. Agar array uzunligi 3 dan kichik bo'lsa, [] qaytariladi.
// Input: arr = [10, 20, 30, 40] в†’ Output: [10, 20, 100, 40]
// Input: arr = [1, 2] в†’ Output: []

export function replaceWith100(arr) {
  // Mantiq yozing
}

// ==============================================
// ================= 5-masala ==================
// ==============================================
// Topic: sort metodi
// Shohrux o'zining "ism ro'yxati"ni saralamoqchi, lekin u tartibni chalkashtiradi!
// Funksiya stringlar arrayini qabul qiladi va ularni alfavit tartibida saralaydi.
// Agar array bo'sh bo'lsa, ["Shohrux, tartib yo'q!"] qaytariladi.
// Input: arr = ["Zafar", "Ibrohim", "Abubakr"] в†’ Output: ["Abubakr", "Ibrohim", "Zafar"]
// Input: arr = [] в†’ Output: ["Shohrux, tartib yo'q!"]

export function sortNames(arr) {
  // Mantiq yozing
}

// ==============================================
// ================= 6-masala ==================
// ==============================================
// Topic: Rest operatori
// Abubakr o'zining "mehmonlar ro'yxati"ni tuzmoqda, lekin u qo'shimcha mehmonlarni
// unutadi! Funksiya asosiy mehmon (string) va qo'shimcha mehmonlarni (...rest) qabul
// qiladi, barchasini bitta arrayga joylaydi va uzunligini qaytaradi.
// Input: main = "Abubakr", others = "Zafar", "Shohrux" в†’ Output: 3
// Input: main = "Abubakr" в†’ Output: 1

export function countGuests(main, ...others) {
  // Mantiq yozing
}

// ==============================================
// ================= 7-masala ==================
// ==============================================
// Topic: Spread operatori
// Muhammadhasan o'zining "raqamlar to'plami"ni birlashtirmoqchi, lekin u faqat
// chalkashtiradi! Funksiya ikkita raqamlar arrayini qabul qiladi, ularni spread
// operatori yordamida birlashtiradi va o'sish tartibida saralaydi.
// Input: arr1 = [3, 1], arr2 = [2, 4] в†’ Output: [1, 2, 3, 4]
// Input: arr1 = [], arr2 = [] в†’ Output: []

export function mergeAndSort(arr1, arr2) {
  // Mantiq yozing
}

// ==============================================
// ================= 8-masala ==================
// ==============================================
// Topic: Autoboxing
// Hayitali string bilan metod ishlata olmayapti, chunki u primtive stringlar bilan
// adashmoqda! Funksiya string qabul qiladi, uning birinchi harfini katta harfga
// aylantiradi (toUpperCase). Agar input string bo'lmasa, "Hayitali, bu string emas!"
// qaytariladi.
// Input: str = "salom" в†’ Output: "Salom"
// Input: str = 123 в†’ Output: "Hayitali, bu string emas!"

export function capitalizeFirst(str) {
  // Mantiq yozing
}

// ==============================================
// ================= 9-masala ==================
// ==============================================
// Topic: Autoboxing
// Abdulmo'min string uzunligini hisoblamoqchi, lekin u noto'g'ri ma'lumot kiritadi!
// Funksiya string qabul qiladi, uning uzunligini qaytaradi. Agar input string bo'lmasa,
// "Abdulmo'min, yana adashding!" qaytariladi.
// Input: str = "hello" в†’ Output: 5
// Input: str = undefined в†’ Output: "Abdulmo'min, yana adashding!"

export function getStringLength(str) {
  // Mantiq yozing
}

// ==============================================
// ================= 10-masala =================
// ==============================================
// Topic: Spread va sort
// Asilbek, Dostonbek va Azizbek o'zlarining "ballar ro'yxati"ni tartiblamoqchi, lekin
// ular doimo ro'yxatni chalkashtiradilar! Funksiya ikkita ballar arrayini qabul qiladi,
// spread yordamida birlashtiradi va kamayish tartibida saralaydi.
// Input: arr1 = [50, 30], arr2 = [40, 60] в†’ Output: [60, 50, 40, 30]
// Input: arr1 = [], arr2 = [] в†’ Output: []

export function mergeAndSortDescending(arr1, arr2) {
  // Mantiq yozing
}

// ==============================================
// ================= Savollar ==================
// ==============================================
// 1. Try-catch bloklari qanday xatolarni ushlashda foydali va Ibrohimjon yoki Zafarjon
//    qanday xatolarni keltirib chiqarishi mumkin?

// 2. Fill, splice va sort metodlari arrayga qanday ta'sir qiladi va Ne'matjon yoki
//    Hamidulloh bu metodlarni noto'g'ri ishlatganda nima bo'ladi?

// 3. Rest va spread operatorlari o'rtasidagi farq nima va Abubakr yoki Muhammadhasan
//    ularni chalkashtirsa, qanday muammolar yuzaga keladi?

// 4. Autoboxing jarayoni JavaScriptda qachon yuz beradi va Hayitali yoki Abdulmo'min
//    primtive stringlar bilan metod ishlatganda nima uchun xato qilmaydi?

// 5. Agar Shohrux arrayni saralashda sort metodini noto'g'ri ishlatib, raqamlar o'rniga
//    stringlar bilan ishlasa, qanday natija oladi?
