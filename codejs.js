try{
document.getElementsByClassName('services-list__item services-list__item--group')[0].remove()
document.getElementsByClassName('services-list__item services-list__item--group')[1].remove()
document.getElementsByClassName('services-list__item services-list__item--group')[0].remove()
document.getElementsByClassName('services-list__item services-list__item--group')[0].remove()
document.getElementsByClassName('services-list__item services-list__item--group')[1].remove()
document.getElementsByClassName('services-shortcut__item')[3].remove()
document.getElementsByClassName('services-shortcut__item')[5].remove()
document.getElementsByClassName('services-shortcut__item')[5].remove()

//HEURE
var heure = document.createElement('div');
heure.id ="time"
heure.style.textAlign='center'
heure.style.marginTop='75px'
heure.style.fontSize='45px'
document.getElementsByClassName('menu js-menu')[0].append(heure)

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getUTCMinutes();
    var s = today.getUTCSeconds();
    if (s<10){
        s = '0' + s.toString();
    }
    if (h<10){
        h = '0' + h.toString();
    }
    var d = today.getUTCDate();
    var mo = today.getUTCMonth() + 1;
    var a = today.getUTCFullYear();
    if (d<10){
        d = '0' + d.toString();
    }
    if (mo<10){
        mo = '0' + mo.toString();
    }
    m = checkTime(m);
    document.getElementById('time').innerHTML =
    d + '/'+ mo + '/'+  a + '</br>'+ '</br>'+ '</br>'+ '<h2>'+ h + ":" + m +':' + s + '</h2>' ;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
   
  startTime();
} catch(e){}

try{
    
    var header2 = document.createElement('h1');  //travail à faire
    Recommence();
    function Recommence() {
    header2.textContent = "Chargement en cours";
    document.getElementById('js-travail-a-faire-container').getElementsByClassName('h5-like')[0].innerText = header2.textContent
    setTimeout(document.getElementById('js-travail-a-faire-container').getElementsByClassName('h5-like')[0].innerText = header2.textContent,100) 
    setTimeout(fonctionAExecuter, 1000);
    document.getElementById('tabs_flux_informations').getElementsByTagName('ul')[0].remove()
    function fonctionAExecuter(){
    console.log(document.getElementById('js-travail-a-faire-container').getElementsByClassName('h5-like')[0].innerText = header2.textContent )
    var oNodeList= document.getElementsByClassName('form__label')
    console.log(oNodeList)
    t=0
    for (var e=0;e < oNodeList.length - 2; e++) {
        if (document.getElementsByClassName('form__label')[e].innerText == 'Travail à faire')
        t=t+1;
    }
    if (t === 1){
    header2.textContent = "Tu as 1 travail";
    } 
    if (t > 1) {
    header2.textContent = "Tu as " + t + " travaux";
    }
    if (t === 0){
        header2.textContent = "Tu n'as pas de travail, WOW"
    }
    console.log(t);
    document.getElementById('js-travail-a-faire-container').getElementsByClassName('h5-like')[0].innerText = header2.textContent
    try {
        console.log(a=document.getElementsByClassName("text--right-sm")[5].getElementsByTagName("a")[0].innerText)
        console.log(b=a[25])
        if (b!= undefined){
        header2.textContent = header2.textContent + " et " + b + " " +"mail(s)" 
        document.getElementById('js-travail-a-faire-container').getElementsByClassName('h5-like')[0].innerText = header2.textContent
        }
    } catch (e) {
    }
    

}
    }
} catch(e){
}

try{
    console.log(couleur = document.getElementById('screenreader-contenu').style.color)   
couleur = '#FFFFFF'
    setTimeout(fctcouleur, 1000); //cahier de texte
    function fctcouleur(){
    couleur = document.getElementById('screenreader-contenu').style.color
    if (couleur != '#FFFFFF' ){
        couleur = '#FFFFFF'
    }}
} catch(e){

}
try{
nom=document.getElementById('js_boite_reception').getElementsByClassName('text--ellipsis')  //boite de réception
time=document.getElementsByClassName('col--xs-2 text--right')
for (var x=0;x<nom.length;x++){
    nom[x*3].style.color = 'white'
    time[x].style.color='white'
}

for (var y=0;y<time.length;y++) {

}
}catch(e){

}

try{ //devoir page
    if(document.getElementsByClassName('h6-like semibold-like slug slug--md')[0].innerText == 'Travail à faire pour la séance'){
        document.getElementById('screenreader-contenu').style.color = '#FFFFFF'
    }
}catch(e){

}
try{
    console.log(document.getElementsByTagName('legend')[0].remove())
}catch(e){
    
}
try{
const elt = document.getElementsByClassName('contexte_service dsi')[0];    // On récupère l'élément sur lequel on veut détecter le clic
elt.addEventListener('click', function() {  
    try{
    Recommence();
    } catch(e){}
});
}catch(e){}
