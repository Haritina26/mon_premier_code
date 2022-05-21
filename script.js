/* Renvoie des données du formulaire */
const form = document.getElementById("form");
const ticker = form.elements["ticker"];
const date_debut = form.elements["date_debut"];
const date_fin = form.elements["date_fin"];


/* API */
async function maFonction () {
  let lien_api = "http://api.marketstack.com/v1/"
  let access_key = "5672c74f428b8bea4fb5f70393aca7ea"
  let response 
  let data 
  let date_debutV = document.getElementById('date_debut_rslt');
  alert('date' + date_debutV)
  let date_finV = document.getElementById('date_fin_rslt');
 
  //response = await fetch(lien_api);
  //data = await response.json();
  
  //console.log(data);
  let rendement
  let rdmtD
  let rdmtF
  
  lien_api = lien_api +'/eod/[${date_debutV}]?access_key=${access_key}&symbols=${tickerV}'
  response = await fetch(lien_api);
  data = await response.json();
  rdmtD = data.data[3]
  
    
  lien_api = lien_api +'/eod/[${date_finV}]?access_key=${access_key}&symbols=${tickerV}'
  response = await fetch(lien_api);
  data = await response.json();
  rdmtF = data.data[3]
  
  /*
  if (date_debutV === "") { //intraday
    lien_api = lien_api + 'intraday?access_key=${access_key}&symbols=${tickerV}'
    response = await fetch(lien_api);
    data = await response.json();
  
    rdmtD = data.data[3]
    rdmtF = data.data[6]
  } else {
    lien_api = lien_api +'/eod/[${date_debutV}]?access_key=${access_key}&symbols=${tickerV}'
    response = await fetch(lien_api);
    data = await response.json();
    rdmtD = data.data[3]
    
    lien_api = lien_api +'/eod/[${date_finV}]?access_key=${access_key}&symbols=${tickerV}'
    response = await fetch(lien_api);
    data = await response.json();
    rdmtF = data.data[3]
  } */
  
  rendement = (rdmtF/rdmtD) - 1
  
  document.getElementById("rendement").textContent = rendement;
  return rendement
}

//document.getElementById("montrer").addEventListener("click", function() {
  //maFonction();



form.addEventListener("submit", function (event) {
  event.preventDefault(); //Enlever la méthode post
  let tickerV = ticker.value;
  let date_debutV = date_debut.value; //RAJOUTER T00:00:00+0000
  let date_finV = date_fin.value; //RAJOUTER T00:00:00+0000
  let rendement = maFonction()

  document.getElementById('ticker_rslt').textContent = tickerV;
  document.getElementById('date_debut_rslt').textContent = date_debutV;
  document.getElementById('date_fin_rslt').textContent = date_finV;
  document.getElementById('rendement').textContent = rendement;
  
  /*
  if (date_debutV === "") {
    document.getElementByClassName('rslt').textContent = tickerV;
    document.getElementByClassName('rslt').textContent = date_finV;
  } else {
    //alert('Le ticker est ${tickerV}, la date de début est ${date_debutV}, date fin = ${date_finV}')
    document.getElementByClassName('rslt').textContent = tickerV;
    document.getElementByClassName('rslt').textContent = date_debutV;
    document.getElementByClassName('rslt').textContent = date_finV;
  } */
  
  //document.getElementById("montrer").addEventListener("click", function() {
  //maFonction()
    
});


