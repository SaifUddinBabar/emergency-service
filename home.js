function getElement(id)
{
   return document.getElementById(id)
}

// call btn 
document.getElementById('cardbox').addEventListener("click", function(e) {
    if (e.target.classList.contains("btn2")) {
        const maincoin = getElement("coin");
let coinValue = Number(maincoin.innerText); 

const totalcoin = coinValue - 20;

if (totalcoin< 0) {
    alert("Not enough coins");
    return;
} 
     
             const card = e.target.parentNode.parentNode.children[1]
    const contact =  e.target.parentNode.parentNode.children[2]
  

        
             const title = card.querySelector(".title").innerText
        const contactNUmber = contact.querySelector(".contact").innerText
       


        alert(title+contactNUmber);
      
      maincoin.innerText = totalcoin; 
      const container = getElement('containerforhistory')

    const newdiv = document.createElement('div')
newdiv.innerHTML = `
<div class="flex justify-between">
        <div>
          <h1 class="font-bold">${title}</h1>
          <p class="text-gray-400">${contactNUmber}</p>
        </div>
        <div>
         <p>${new Date().toLocaleTimeString()}</p>
        </div>

</div>
      
      `

container.appendChild(newdiv)


    }
});

getElement("clearbtn").addEventListener('click',function()
{
 const container = getElement('containerforhistory')
container.innerHTML = ""

})

// clearbtn
document.getElementById('cardbox').addEventListener("click", function(e) {
    if (e.target.classList.contains("btn1")) {
        
           const contact =  e.target.parentNode.parentNode.children[2]
            const contactNUmber = contact.querySelector(".contact").innerText
            navigator.clipboard.writeText(contactNUmber);

          

    }
});

// love button 
document.getElementById('cardbox').addEventListener("click", function(e) {
    if (e.target.classList.contains("lovebtn")) {
        const heartElement = document.getElementById('heartnumber');
        const heartcount = Number(heartElement.innerText) 
        const totalheart = heartcount + 1;
        heartElement.innerText = totalheart;
    }
});

