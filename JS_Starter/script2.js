//use strict ####################
"use strict";

// let ehliyetiVarMı = false;
// let testiGeçtiMi = true;

// if (testiGeçtiMi) ehliyetiVarMı = true;

// if (ehliyetiVarMı) {
//   console.log("Araba kullanabilir");
// }

// const interface = 'ses'
// const private = 123
// const if = 1234

//Functions ####################################

// function logger(){
//     console.log("Benim adım CAFER");
// }

// logger() //calling/running/invoking a function

// function meyveİşleme(elmalar, portakallar){
//     // console.log(elmalar, portakallar);
//     const meyveSuyu = `${elmalar} elma ve ${portakallar} portakal`
//     return meyveSuyu;
// }

// meyveİşleme(8, 2)

// const elmaSuyu = meyveİşleme(5, 0)
// console.log(elmaSuyu);

// console.log(meyveİşleme(5, 0));

// const elmaPortakalSuyu = meyveİşleme(2,4)

// console.log(elmaPortakalSuyu);

//Function declarations & ###################

// function yaşHesap1(doğumYılı){
//     return 2040 - doğumYılı
// }

// const yaş1 = yaşHesap1(1996)

// console.log(yaş1);

//Function expressions ######################

// const yaşHesap2 = function (doğumYılı){
//     return 2040 - doğumYılı
// }

// const yaş2 = yaşHesap2(1996)
// const yaş3 = yaşHesap2(1996)

// console.log(yaş1, yaş2);

//Ör ============================

// const dönüşYok = function(){
//no return
// }

// console.log(dönüşYok()); //undefined

//Arrow Functions ================================================

// const yaşHesap2 = function (doğumYılı) {
//   return 2040 - doğumYılı;
// };

// const yaşHesap3 = doğumYılı => 2040 - doğumYılı;

// const yaş3 = yaşHesap3(1996);
// console.log(yaş3);

// const emekliliğeKalanSüre = (doğumYılı, ad) => {
//     const yaş = 2022 - doğumYılı;
//     const emeklilik = 65 - yaş;
//     // return emeklilik;
//     return `${ad}'ın emekliliğine ${emeklilik} kadar yıl kaldı`
// } //sonsuza kadar

// console.log(emekliliğeKalanSüre(1996, 'efe'));


//Function calling other function =================================

// function meyveleriParçala(meyve){
//     return meyve * 4
// }

// function meyveiİşleme(elmalar, portakallar) {
//     const elmaParçaları = meyveleriParçala(elmalar);
//     const portakalParçaları = meyveleriParçala(portakallar);
//     const meyveSuyu = `${elmaParçaları} elma ve ${portakalParçaları} portakal`;
//     return meyveSuyu;
// }

// const meyveler = meyveiİşleme(2,3)

// console.log(meyveler);



//================== ARRAY ======================

// const arkadaş1 = 'namık';
// const arkadaş2 = 'Engin';
// const arkadaş3 = 'Ayşe';

// const arkadaş = ['namık', 'engin', 'ayşe']
// console.log(arkadaş);
// console.log(arkadaş[0]);
// console.log(arkadaş.length);
// console.log(arkadaş[arkadaş.length -1]);

// const yıl = new Array(1995, 1996, 1997)
// console.log(yıl);

// arkadaş[2] = 'Ela'
// console.log(arkadaş);

// const ad = "Efe";

// const murat = [ad, "Dallı", 2022 - 1996, "biyolog", arkadaş]
// // console.log(murat);

// const yaşHesap = function(doğumYılı){
//     return 2022 - doğumYılı;
// }

// const yıllar = [1986, 1967, 2002, 1996, 2010, 2015];

// console.log(yaşHesap(yıllar[2]));

// const yaş1 = yaşHesap(yıllar[0]);
// console.log(yaş1);

// const yaş2 = yaşHesap(yıllar[1]);
// const yaş3 = yaşHesap(yıllar[yıllar.length - 1])
// console.log(yaş1, yaş2, yaş3);

// const yaşlar = [
//     yaşHesap(yıllar[0]),
//     yaşHesap(yıllar[1]),
//     yaşHesap(yıllar[yıllar.length - 1])
// ]

// console.log(yaşlar);

//------------eleman ekleme----------------
//  const arkadaş = ['namık', 'engin', 'ayşe']
//  const yeniUzunluk = arkadaş.push('ela')
//  console.log(arkadaş);
//  console.log(yeniUzunluk);

//  arkadaş.unshift('yavuz')
//  console.log(arkadaş);
//------------eleman kaldırma----------------


// arkadaş.pop()
// console.log(arkadaş);
// arkadaş.pop()
// console.log(arkadaş);

// const kaldırılan = arkadaş.pop()
// console.log(kaldırılan);


// arkadaş.shift()
// console.log(arkadaş);

// console.log(arkadaş.indexOf('namık'));
// console.log(arkadaş.indexOf('celal'));

// console.log(arkadaş.includes('namık'));
// console.log(arkadaş.includes('celal'));

// arkadaş.push(23);
// console.log(arkadaş.includes(23));



//================== ARRAY END======================

//================== Object ========================
//----------intro--------------

// const efeDizi = [
//     'Efe',
//     'Dallı',
//     2022 - 1996,
//     'biyolog',
//     ['seda', 'berkay', 'ömer']
// ]

// const efe = {
//     isim : 'Efe',
//     soyisim : 'Dallı',
//     yaş : 2022-1996,
//     meslek : 'biyolog',
//     arkadaşları : ['seda', 'berkay', 'ömer'],
// }

// console.log(efeDizi);
// console.log(efe);


// const efe = {
//     isim : 'Efe',
//     soyisim : 'Dallı',
//     yaş : 2022-1996,
//     meslek : 'biyolog',
//     arkadaşlar : ['seda', 'berkay', 'ömer'],
// };

// console.log(efe);

// console.log(efe, soyisim);
// console.log(efe['soyisim']);

// const isim = 'ad';
// console.log(efe['soy' + isim]);

// const ilgili = prompt("Efe hakkında ne bilmek istiyorsunuz? isim, soyisim, yaş, meslek ve arkadaşlar arasında seçim yapın.")

// console.log(ilgili);
// console.log(efe[ilgili]);

// if(efe[ilgili]){
//     console.log(efe[ilgili]);
// }else{
//     console.log("yanlış istek. İsim, soyisim, yaş, meslek ve arkadaşlar arasında seçim yapın. ");
// }

// efe.konum = 'Ankara'
// efe['twitter'] = '@efe'

// console.log(efe);


// const efe = {
//         isim : 'Efe',
//         soyisim : 'Dallı',
//         doğumYılı : 1996,
//         meslek : 'biyolog',
//         arkadaşlar : ['seda', 'berkay', 'ömer'],
//         ehliyetiVarMı : true,
//         // yaşHesap: function(doğumYılı){
//         //     return 2022 - doğumYılı
//         // },
//         yaşHesap: function(){
//             console.log(this);
//             return 2022 - this.doğumYılı
//         },
//     };

// console.log(efe.yaşHesap());
// console.log(efe.yaşHesap(1996));
// console.log(efe['yaşHesap'](1996));

//-------this




//================== Object End ====================