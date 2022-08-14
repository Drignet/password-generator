function passwordFunc(){
let firstName = document.getElementById("first-name").value;
let lastName = document.getElementById("last-name").value;
let lengthOfPassword = document.getElementById("password-length").value;
let number = '0123456789';
let symbol = '@#£&?!';
let firstNameUpper = firstName.toUpperCase();
let lastNameUpper = lastName.toUpperCase();
let passwordMix = `${symbol}${firstNameUpper}${lastName}${number}${lastNameUpper}${firstName}`;
let password = "";
for(let i = 0; i < lengthOfPassword ; i++){
  let index = Math.floor(Math.random() * passwordMix.length);
  password += passwordMix[index];
}
document.getElementById("show-password").value = password;
}

//copy function
document.querySelector("#btn").onclick = function(){
    const pass = document.querySelector("#show-password");
    pass.select()
    document.execCommand('copy');
}


//slider
let slider = document.getElementById("password-length");
let output = document.getElementById("show");
output.innerHTML = slider.value;


slider.oninput = function() {
  output.innerHTML = this.value;
}

