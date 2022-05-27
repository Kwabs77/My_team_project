
let form = document.querySelector("#form");
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let company = document.querySelector('#company');
let title = document.querySelector('#title');
let text = document.querySelector('#text');
let hasError;




// main 


form.addEventListener('submit', event=>{

    event.preventDefault();

    checkingInputs();
})


 let button = document.getElementsByClassName('btn-secondary');

  function color (){
      button[0].style.color ="#004017";
  }
button[0].addEventListener( "click", color);

function checkingInputs(){
   
    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let companyValue = company.value.trim();
    let titleValue = title.value.trim();
    let textValue = text.value.trim();
    hasError =false;

        if (nameValue === "" ){

            settingErrorFor (name, "Name field is required");
        }


        if ( emailValue === ''){

         settingErrorFor ( email , 'Email must be field');
        }  else if  (!isValid(emailValue)){
         settingErrorFor ( email , 'Email is not valid, entere a valid mail');

        }



        if( companyValue === ''){
         settingErrorFor( company,"Company field is required" );

        }


        if(titleValue === ""){

           settingErrorFor( title, "title field is required"); 
        }



        if( textValue === ""){

            settingErrorFor( text , "Text cannot be blank")
        }


        if(!hasError){

            clearInputs();
        }

}



    function settingErrorFor( input, message){
        const small = input.parentNode.querySelector('small');
        small.style.display = 'block';
        small.style.color ='#f67e7e';
        small.style.fontStyle ="italic";

        small.innerText = message;
        hasError =true;

    }


    function clearInputs(){
        name.value ="";
        email.value='';
        company.value ="";
        title.value ="";
        text.value="";

    }


function isValid(email){
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    
