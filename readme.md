Qs number 1:--- difference between getElementById, getElementsByClassName, and querySelector  querySelectorAl
ans:-
 getelementById --- getelementById is return only one element and must be have unique id 
 getElementsByClassName  ---- return all elements with same class and can be many
 querySelector ---- return first element match css selector
 querySelectorAll ----return all elements match css selector and can use forEach




 qs number 2 --- How do you create and insert a new element into the DOM?
Ans: 1st we need to write

document.createElement("element name like div, p")
then we can add text or attributes if needed

newElement.textContent = "text"
newElement.className = "classname"
lastly we insert it into parent element

parent.appendChild(newElement)



qs number 3:-What is Event Bubbling and how does it work?
            Ans: 1st we need to know event bubbling is when an event starts from the child element and goes up to the parent element.
2nd when we click a child element, the event first triggers on the child.
3rd then it goes to the parent, then grandparent, and so on.
this process is called bubbling

child.addEventListener("click", function(){
 console.log("child clicked")
       })
       parent.addEventListener("click", function(){
    console.log("Parent clicked")
}) 






qs number 4:-What is Event Delegation in JavaScript? Why is it useful? 

ans---
We put one event listener on parent element and handle children events from parent.It works because of event bubbling , event goes up from child to parent automatically.
It is useful when many child elements exist, no need to add listener on each, just use one on parent.
Benefits --- save memory, easy handle dynamic elements, code easy to maintain.




qs 5:-What is the difference between preventDefault() and stopPropagation() methods?
ans---
preventDefault() ----browser normally do something, example click link or submit form. if you not want that, use preventDefault(). browser stop normal work.
stopPropagation() ----- event normally go to parent element. if you not want that, use stopPropagation(). event stay only in this element, not go parent.
