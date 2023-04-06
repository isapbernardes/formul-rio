const form = document.querySelector ("#form");
const nameInput = document.querySelector ("#name");
const emailInput = document.querySelector ("#email")
const passwordInput = document.querySelector ("#password");
const messageTextarea = document.querySelector ("#message");

form.addEventListener ("submit", (event) => {
    vent.preventDefault();
    if (nameInput.value === ""){
        alert ("por favor, preencha o campo nome");
        return;
    }
    if (emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert ("Preencha com seu email");
        return;
     } 
        if (!validatePassword(passwordInput.value, 8)){
        alert ("A senha precisa ter no mínimo 8 caracteres")
        return;
        }
                 
         if (messageTextarea.value === ""){
            alert ("por favor preencha o campo Email");
            return;
             }
   
           form.submit();
             

});

function isEmailValid (email){
    const emailRegex = new RegExp (
        /^[a-zA-Z0-9._-]+ @[a-zA-Z]{2,}$/
    );
    if (emailRegex.text(email)){
         return true
    } 
    return false

}

function validatePassword (password, minDigits){
    if(password.length >= minDigits) {
        return true
    }
    return false
}