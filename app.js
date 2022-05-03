var alphBoxDOM = document.querySelector(".alphBox");
var questDOM = document.querySelector(".question");

//butonları yaratma 
var alfabe = ["a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "q", "r", "s", "ş", "t", "u", "ü", "v", "w", "x", "y", "z"];
alfabe.forEach(element => {
    let newElement = document.createElement("button");
    newElement.innerText = element;
    newElement.classList.add("alphBtn");
    alphBoxDOM.appendChild(newElement)
});

var kelimeler = [
    { word: 'macaroni', type: "Food", tip: "Looks like long strings" },
    { word: 'pizza', type: "Food", tip: "Round made of triangular slices" },
    { word: 'france', type: "Country", tip: "Freedom!!!" },
    { word: 'america', type: "Country", tip: "50 stars?" },
    { word: 'realmadrid', type: "Footbal Team", tip: "The team with the most win champions league" },
];

//rastgele kelime seç
var rnd = Math.floor((Math.random()) * (kelimeler.length))
var rndWord = kelimeler[rnd].word;
var type = kelimeler[rnd].type;
var tip = kelimeler[rnd].tip;

var kelimeHarfleri = []
var aranan = [];
function ilkOlusun() {
    
    var dene = `${rndWord}`
    for (let index = 0; index < dene.length; index++) {
        kelimeHarfleri.push(dene.charAt(index))
    }
    for (let index = 0; index < kelimeHarfleri.length; index++) {
        aranan.push("_")
        let spn = document.createElement("span");
        spn.innerText = "_";
        spn.classList.add(`olur${index}`);
        spn.classList.add("spns")
        questDOM.appendChild(spn)
    }
}
ilkOlusun();

var kalan = 10; 
var lose = document.createElement("h1");
lose.innerText = `${kalan} hakkın kaldı!`;
document.querySelector(".result").appendChild(lose);

var pic_sayac = 10;
function kelimeyiEkranaYaz() {
    var tut = false
    kelimeHarfleri.forEach((element, index) => {
        //kelime harfleri listesiyle, basılan harfler arasında eşleşen bir eleman olduğunda if koşulu içerisinde bu harfi/harfleri aranan listesindeki olması gereken indexine koyucagız.
        if(sectim.indexOf(element) != -1 && kalan > 0){
            //classı buradaki indexe eşit olanın innertextine elementi yazdır
            document.querySelector(`.olur${index}`).innerText = element;
            bir_kere = true;
        }
        else if(kalan-1 == 0){
            lose.innerText = "Kaybettin!";
            document.querySelector(".img").src = `/img/Adsız${pic_sayac-1}.png`
        }
        else if(kelimeHarfleri.indexOf(sectim[sectim.length -1]) != -1){
        }
        else{
            tut = true
            lose.innerText = `${kalan-1} hakkın kaldı!`;
        }
    });
    if(tut === true){
        kalan--;
        pic_sayac--;
        document.querySelector(".img").src = `/img/Adsız${pic_sayac}.png`
    }
    var sayiyorum = 0;
    var deneme = document.querySelectorAll("span")
    var okey = false;
    deneme.forEach(dom => {
        if(dom.innerText == "_"){
            okey = true
        }
    });
    if(okey == false){
        lose.innerText = `KAZANDIN!`;
    }
}

var sectim = [];
document.querySelectorAll(".alphBtn").forEach(element => {
    element.addEventListener("click", () => {
        debugger
        element.setAttribute("disabled", false)
        sectim.push(element.innerText)
        kelimeyiEkranaYaz();
    })
})
document.querySelector(".plyagn").addEventListener("click", ()=>{
    debugger
    pic_sayac = 10;
    rnd = Math.floor((Math.random()) * (kelimeler.length))
    rndWord = kelimeler[rnd].word;
    type = kelimeler[rnd].type;
    tip = kelimeler[rnd].tip;
    var dene = `${rndWord}`
    kelimeHarfleri = [];
    aranan = [];
    kalan = 10;
    lose.innerText = `${kalan} hakkın kaldı!`;
    document.querySelector(".img").src = `/img/Adsız${pic_sayac}.png`
    var allButtons = document.querySelectorAll(".alphBtn")
    allButtons.forEach(element => {
        element.removeAttribute("disabled")
    });
    
    var silinecekler = document.querySelectorAll("span");
    silinecekler.forEach(element => {
        element.remove();
    });
    for (let index = 0; index < dene.length; index++) {
        kelimeHarfleri.push(dene.charAt(index))
    }
    for (let index = 0; index < kelimeHarfleri.length; index++) {
        aranan.push("_")
        let spn = document.createElement("span");
        spn.innerText = "_";
        spn.classList.add(`olur${index}`);
        spn.classList.add("spns")
        questDOM.appendChild(spn)
    }
})
document.querySelector(".tip").addEventListener("click", ()=>{
    alert(`\n\n\n\n\n\nType: ${type}\nInfo: ${tip}`);
})