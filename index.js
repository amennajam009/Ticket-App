let createcard=()=>{
 
    let first = document.querySelector('.First').value;
    let last=document.querySelector('.Last').value;
    let Total=document.querySelector('.Total').value;
    let Email=document.querySelector('.Email').value;
    let Seat=document.querySelector('.Seat').value;

    console.log(first,last);
    
    let createobject= new Object();
    createobject.Seat=Seat;
    createobject.first=first;
    createobject.last=last;
    createobject.Total=Total;
    createobject.Email=Email;
    createobject.Id=Math.floor(Math.random()*1000);
    createobject.points=0;
   
    console.log(createobject);

    let cardcontainer= document.querySelector('.card');
    
    cardcontainer.innerHTML = 
 
    `
    <div class="card-body" >
    <h4 style="color:green;" class="ms-5">Ticket Booked</h4>
    <h6 class="ms-5">Take a ScreenShot..</h6>
     <p><b>First Name:</b>${createobject.first}</p>
     <p><b>Last Name:</b>${createobject.last}</p>
     <p><b>Email:</b>${createobject.Email}</p>
     <p><b>Total Members:</b>${createobject.Total}</p>
     <p><b>Seating:</b>${createobject.Seat}</p>
     <p><b>Seat No:</b>${createobject.Id}</p>
  
     <button type = "button" class = "btn del" id = "delete-all-btn" >
           <span><i class = "fas fa-trash"></i></span>
             Delete
         </button>
    </div>`
    
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 2000);


    
    if(Seat!=='Front' && Seat!=='Back' && Seat!=='Middle' &&  Seat!=='Front-row' &&  Seat!=='Middle-row' && Seat!=='Back-row' && Seat!=='front' && Seat!=='back' && Seat!=='middle'){
        alert('Enter Valid Seating')
    }
  
    if(first==='' || last==='' || Total==='' || Email==='' || Seat==='' ){
      cardcontainer.alert('complete the following steps');
       
     

     
    }
    

    
    
}
 let delthecard=()=>{
    let cardcontainer= document.querySelector('.card-body');
    cardcontainer.remove()
 }


 function inputSelect(value)
      {
       if(document.getElementById("s_method_kerst_shipping_standard").checked===true)
       {
           alert("Corona Certificate Is essential");
       }
      }
 










 $(function () {

         

  $("#items-basket").text("(" + ($("#list-item").children().length) + ")");


  $(".item ").on("click", function () {
     
      $(this).addClass('disabled')  
          //add items to basket
          $(this).each(function () {
              var name = $(this).children(".item-detail").children("h4").text();
              var remove = "<button class='remove'> X </button>";
              var cena = "<span class='eachPrice'>" + (parseFloat($(this).children(".item-detail").children(".prices").children(".price").text())) + "</span>";
              $("#list-item").append("<li>" + name + "&#09; - &#09;" + cena + "$" + remove + "</li>");

              //number of items in basket
              $("#items-basket").text("(" + ($("#list-item").children().length) + ")");
              $("#items-basket").text();

              //calculate total price
              var totalPrice = 0;
              $(".eachPrice").each(function () {
                  var cenaEach = parseFloat($(this).text());
                  totalPrice += cenaEach;
              });
              $("#total-price").text(totalPrice + "$");
          });

      //remove items from basket
      $(".remove").on("click", function () {
          $(this).parent().remove();
          var totalPrice = 0;
          $(".eachPrice").each(function () {
              var cenaEach = parseFloat($(this).text());
              totalPrice += cenaEach;
          });
          $("#total-price").text(totalPrice + "$");
          $("#items-basket").text("(" + ($("#list-item").children().length) + ")");
      });
  });
})