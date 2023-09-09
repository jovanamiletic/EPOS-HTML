$(document).ready(function(){
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  })

  $(window).on('load scroll', function(){
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
  })
})


document.getElementById("button").addEventListener("click", function(){
  document.querySelector(".popup").style.display="flex";
})

document.querySelector(".close-button").addEventListener("click",function(){
  document.querySelector(".popup").style.display="none";
})

window.onload=function(){
  document.getElementById('send').onclick = function(e){
    var vrednosti1=[];
    var vrednosti2=[];
    let radio=document.querySelectorAll('input[type="radio"]:checked');
    radio.forEach(element => {
      vrednosti2.push(element.value);
    });
    let cbs=document.querySelectorAll('input[type="checkbox"]:checked');
    cbs.forEach(element => {
      vrednosti1.push(element.value);
    });
    alert(`Ime: ${document.getElementById("name").value}
Email: ${document.getElementById("email" ).value}
Country: ${document.getElementById("country" ).value}
Gender: ${vrednosti2.toString()}
Hobbies: ${vrednosti1.toString()}
Message: ${document.getElementById("message" ).value}
    `)
    return false;
  }
}




