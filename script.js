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
    if(num<1331){
    fetch(`https://api-thirukkural.vercel.app/api?num=${num}`)
    .then((response) => response.json())
    .then((data) => {
       
        let result="";
      
        result +=`<div class=card>
      <h5>${data.line1}</h5>
      <h5>${data.line2}</h5>
      <h6 class="author">-திருவள்ளுவர்</h6>
      <p class="para">விளக்கம்: ${data.tam_exp}</p>
      <button class="button1" type="submit" id="forbtn" onClick="srcProductsE()">English</button>
      <button class="nxtbutton" id="forbtn" type="submit" onClick="srcProductsnxt()">Next</button>
      <button class="prebutton" id="forbtn" type="submit" onClick="srcProductspre()">Previous</button>

      </div>
`
cards.innerHTML=result;

    }) } else{
        cards.innerHTML=`<h4>The kural number should be "1" to "1330" only</h4>`
    }
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
      <button class="button" id="forbtn" type="submit" onClick="srcProducts()">தமிழ்</button>
      <button class="nxtbutton" id="forbtn" type="submit" onClick="srcProductsnxtE()">Next</button>
      <button class="prebutton" id="forbtn" type="submit" onClick="srcProductspreE()">Previous</button>
      
      </div>
`
cards.innerHTML=result;
    })

}

function srcProductsnxt(){

    let num = document.getElementById("text").value++
    let nums=++num;
    fetch(`https://api-thirukkural.vercel.app/api?num=${nums}`)
    .then((response) => response.json())
    .then((data) => {
     console.log(data)
        let result="";
        result +=`<div class=card>
      <h5>${data.line1}</h5>
      <h5>${data.line2}</h5>
      <h6 class="author">-திருவள்ளுவர்</h6>
      <p class="para">விளக்கம்: ${data.tam_exp}</p>
      <button class="button1" type="submit" onClick="srcProductsE()">English</button>
      <button class="nxtbutton" id="forbtn" type="submit" onClick="srcProductsnxt()">Next</button>
      <button class="prebutton" id="forbtn" type="submit" onClick="srcProductspre()">Previous</button>
      </div>
`
cards.innerHTML=result;
    })

}


function srcProductsnxtE(){

    let num = document.getElementById("text").value++
    let nums=++num;
     
    fetch(`https://api-thirukkural.vercel.app/api?num=${nums}`)
    .then((response) => response.json())
    .then((data) => {

        let result="";
        result +=`<div class=card>
      <h3>${data.eng}</h3>
      <h5 class="author1">-Thiruvalluvar</h5>
      <p class="para1">Explanation: ${data.eng_exp}</p>
      <button class="button" id="forbtn" type="submit" onClick="srcProducts()">English</button>
      <button class="nxtbutton" id="forbtn" type="submit" onClick="srcProductsnxtE()">Next</button>
      <button class="prebutton" id="forbtn" type="submit" onClick="srcProductspreE()">Previous</button>
      </div>
`
cards.innerHTML=result;
    })

}


function srcProductspre(){

    let num = document.getElementById("text").value--
    let nums= --num;
    fetch(`https://api-thirukkural.vercel.app/api?num=${nums}`)
    .then((response) => response.json())
    .then((data) => {
     console.log(data)
        let result="";
        result +=`<div class=card>
      <h5>${data.line1}</h5>
      <h5>${data.line2}</h5>
      <h6 class="author">-திருவள்ளுவர்</h6>
      <p class="para">விளக்கம்: ${data.tam_exp}</p>
      <button class="button1" type="submit" onClick="srcProductsE()">English</button>
      <button class="nxtbutton" id="forbtn" type="submit" onClick="srcProductsnxt()">Next</button>
      <button class="prebutton" id="forbtn" type="submit" onClick="srcProductspre()">Previous</button>
      </div>
`
cards.innerHTML=result;
    })

}

function srcProductspreE(){

    let num = document.getElementById("text").value--
    let nums= --num;
    fetch(`https://api-thirukkural.vercel.app/api?num=${nums}`)
    .then((response) => response.json())
    .then((data) => {
     console.log(data)
        let result="";
        result +=`<div class=card>
      <h3>${data.eng}</h3>
      <h5 class="author1">-Thiruvalluvar</h5>
      <p class="para1">Explanation: ${data.eng_exp}</p>
      <button class="button" id="forbtn" type="submit" onClick="srcProducts()">தமிழ்</button>
      <button class="nxtbutton" id="forbtn" type="submit" onClick="srcProductsnxtE()">Next</button>
      <button class="prebutton" id="forbtn" type="submit" onClick="srcProductspreE()">Previous</button>
      </div>
`
cards.innerHTML=result;
    })

}
