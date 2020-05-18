

const sections = document.querySelectorAll("section");
const demo = document.getElementById("demo");
const navigete = document.getElementById('navigete');
const all = document.getElementById('all');
const next = document.getElementById("next");
const back = document.getElementById("back");
const count = document.getElementById('whichSlide');


  


    function showAllSlide(e) {
         navigete.style.display = 'none'
         demo.classList.add('demo');
       
         var button;
         for (var b = 0; b < sections.length; b++) {
            var button = document.createElement('button');
            button.textContent  = 'Slide ' + (b + 1);
            button.classList.add("showSlide")
              sections[b].append(button);
              sections[b].className = 'forclick';
              sections[b].style.display = 'block';
          }
          var buttons = document.querySelectorAll('.showSlide');
          var parent ;
             for (var ii = 0; ii < buttons.length; ii++) {
                buttons[ii].onclick = (e) => {
                    parent =  e.target.parentNode;
                    demo.classList.remove("demo");
                    for(var k = 0; k < sections.length; k++) {
                        sections[k].classList.remove("forclick")
                        sections[k].classList.add("section")
                        sections[k].style.display = "none";
                        sections[k].removeChild(sections[k].lastElementChild)
                    }
                    parent.style.display = "block";
                    navigete.style.display ='block'
                    parent.setAttribute("date", 1)
                 
                } 
             }
    }


    
    var i = 0;
    function navigate(a = '') {
      all.addEventListener("click",  showAllSlide);
        if(typeof parent != "object") parent.style.display='none'
        sections[i].style.display = 'block'
     if (a === 1) {
        sections[i].style.display = 'block'
         i++ ;
         sections[i-1].style.display = 'none'
            if (i == sections.length) i = 0;
            sections[i].style.display = 'block'
           
     } else if(a === 0) {
        if (i == 0){
            sections[i].style.display = 'none'
             i = sections.length ;
        }
        if(i == sections.length){
        sections[i-1].style.display = 'none'
             } else {
        sections[i].style.display = 'none'
            }
        i--;    
        sections[i].style.display = 'block'
     }
    
     count.innerText = i+1;
     document.getElementById('howmanySlide').innerText = sections.length;
    }
    
    navigate()


function check(e) {
   var getId = e.getAttribute("id");
   if(getId === "allSlide") {
   all.removeAttribute('disabled');
    next.setAttribute("disabled", false)
    back.setAttribute("disabled", false)
   } else if (getId === "nextBack") {
      all.setAttribute('disabled', false);
      next.removeAttribute("disabled")
      back.removeAttribute("disabled");

      for (t = 0; t < sections.length; t++ ) {
         if(sections[t].hasAttribute('date')) {
            sections[t].removeAttribute('date');
            sections[t].style.display = 'none';
            
         }
      }
      sections[count.innerText  - 1].style.display = 'block'
   }
    
}

