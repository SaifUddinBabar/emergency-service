function getElement(id)
{
   return document.getElementById(id)
}



// btn hover effect 
const btns = document.querySelectorAll(".btn2");

for (const btn of btns) {

  btn.addEventListener("mouseenter", function () {
    btn.style.backgroundColor = "gray"; 
    btn.style.transition = "background-color 0.3s ease"; 
  });

  btn.addEventListener("mouseleave", function () {
    btn.style.backgroundColor = "#16a34a";
  });
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
       


        alert(title+ " " +contactNUmber);
      
      maincoin.innerText = totalcoin; 
      const container = getElement('containerforhistory')

    const newdiv = document.createElement('div')
newdiv.innerHTML = `
<div class="flex justify-between border border-gray-200 rounded-xl p-5">
        <div>
          <h1 class="font-bold">${title}</h1>
          <p class="font-bold text-black-800">${contactNUmber}</p>
        </div>
        <div>
         <p>${new Date().toLocaleTimeString()}</p>
        </div>

</div>
      
      `

container.appendChild(newdiv)


    }
});

// clearbtn
getElement("clearbtn").addEventListener('click',function()
{
 const container = getElement('containerforhistory')
container.innerHTML = ""

})
 
// copy button
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



