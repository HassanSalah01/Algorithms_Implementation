const x = "cvpbPGS{arkg_gvzr_V'yy_gel_2_ebhaqf_bs_ebg13_GYpXOHqX}";
const rot13 = (str) => {
    let newWord = "";
    for (let i in str) {
        let charCode = "";
        const charAscii = str[i].charCodeAt(0);
        if (charAscii >= 97 && charAscii <= 122) {
            if (charAscii <= 110) {
                charCode = str[i].charCodeAt(0) + 13;
            } else if (charAscii >= 110) {
                charCode = str[i].charCodeAt(0) - 13;
            }
            newWord += String.fromCharCode(charCode);
        } else {
            newWord += str[i];
        }
    }
    return newWord;
};
const main = () => {
    rot13(x);
    console.log(rot13(x));
};
main();
