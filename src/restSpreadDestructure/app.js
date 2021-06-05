//let,var,const => değişken tanımlama key word'u
// let sayi1=10;
// sayi1="Sedat KOÇ";
// let student={id:1,name:"Sedat"};
// console.log(student);

// function save(ogrenci,puan=10) {
//     console.log(ogrenci.name+":"+puan);
// }

// save(student,100);

// let students=["Sedat KOÇ","Nihal KOÇ","Zerya KOÇ","Enes KOÇ","Zana KOÇ"];
// console.log(students);
// let students2=[student,{id:2,name:"Sedat","Ankara",{city:"Diyarbakır"}}];
// console.log(students2);

//rest=>istenilen sayıda parametre gönderilirken bu parametreleri array olarak tutar
//params =>c#
//varArgs
let showProducts=function (id,...products) {
    console.log(id)
    console.log(products[0])
}

//console.log(typeof showProducts())
//showProducts(10,"Elma","Armut","Karpuz")

//spread => gönderilen array'ı ayrıştırır
let points=[1,36,25,14,15,57,2]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Dectructuring =>array'ı değişkenlere aktarırı

let populations=[10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category={id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name}=category
console.log(id)
console.log(name);