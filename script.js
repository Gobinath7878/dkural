let division = document.createElement('div');
document.body.append(division)
division.setAttribute("class","container")

var division2 = document.createElement('div')
division2.innerHTML=`
      <input class="form" type="form" placeholder="type ' Kural ' number in degits ..." id="text">
      <button class="button" type="submit" onClick="srcProducts()">Search</button>
`;
division.appendChild(division2);
division2.setAttribute("class","pro-container");

var cards = document.createElement('div')
division2.appendChild(cards);
cards.setAttribute("id","cards");

function srcProducts(){

    let num = document.getElementById("text").value 
     
    fetch(`https://api-thirukkural.vercel.app/api?num=${num}`)
    .then((response) => response.json())
    .then((data) => {
       
        let result="";
      
        result +=`<div class=card>
      <h5>${data.line1}</h5>
      <h5>${data.line2}</h5>
      <h6 class="author">-திருவள்ளுவர்</h6>
      <p class="para">விளக்கம்: ${data.tam_exp}</p>
      <button class="button1" type="submit" onClick="srcProductsE()">For english</button>

      </div>
`
cards.innerHTML=result;

    })
}



function srcProductsE(){

    let num = document.getElementById("text").value 
     
    fetch(`https://api-thirukkural.vercel.app/api?num=${num}`)
    .then((response) => response.json())
    .then((data) => {

        let result="";
        result +=`<div class=card>
      <h3>${data.eng}</h3>
      <h5 class="author1">-Thiruvalluvar</h5>
      <p class="para1">Explanation: ${data.eng_exp}</p>
      <button class="button" id="forbtn" type="submit" onClick="srcProducts()">For tamil</button>

      </div>
`
cards.innerHTML=result;
    })

}

