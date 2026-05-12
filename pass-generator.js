
const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const strengthText = document.getElementById("strengthText");
const strengthLights = document.querySelectorAll(".signal");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{}[]<>?/";
const iconCopy = '<img src="ASSETS/copy-svgrepo-com.svg" class="ico">';
const iconCheckMark = '<img src="ASSETS/checkmark.svg" class="ico">';
const lengthSliderValue = lengthSlider.value;


copyBtn.innerHTML = iconCopy;
lengthValue.textContent = lengthSliderValue;

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});
//Generador de contrase;a
function generatePassword() {
  let characters = "";
  if (uppercase.checked) {
    characters += upperChars;
  }
  if (lowercase.checked) {
    characters += lowerChars;
  }
  if (numbers.checked) {
    characters += numberChars;
  }
  if (symbols.checked) {
    characters += symbolChars;
  }
  if (characters === "") {
    alert("Selecciona al menos una opción");
    return;
  }
  let password = "";
  for (let i = 0; i < lengthSlider.value; i++) {
    let randomChar = Math.floor(Math.random() * characters.length);
    password += characters[randomChar];
  }
  passwordInput.value = password;
  checkStrength(password);
}


//para chequear la seguridad de la constraseña
function checkStrength(password) {
  let strength = "Weak";
  strengthText.className = "strength weak";
  strengthLights.className = " weak";
  strengthLights.forEach(light => {
    light.className = "signal";
  });
  const tercios = Math.ceil(strengthLights.length / 3);
  for (let i = 0; i < tercios; i++) {
    setTimeout(() => {
      strengthLights[i].classList.add("weak");
    }, i * 25);
  }
  if (password.length >= 10) {
    strength = "Medium";
    strengthText.className = "strength medium";
    strengthLights.className = " medium";
    strengthLights[1].classList.add("medium");
    for (let i = 0; i < tercios * 2; i++) {
      setTimeout(() => {
        strengthLights[i].classList.add("medium");
      }, i * 25);
    }
  }
  if (
    password.length >= 14 && symbols.checked && numbers.checked) {
    strength = "Strong";
    strengthText.className = "strength strong";
    strengthLights.className = "strong";
    strengthLights[2].classList.add("strong");
    for (let i = 0; i < strengthLights.length; i++) {
      setTimeout(() => {
        strengthLights[i].classList.add("strong");
      }, i * 25);
    }
  }
  strengthText.textContent = `Strength: ${strength}`;
}
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", () => {
  if (passwordInput.value === "") {
    return;
  }
  navigator.clipboard.writeText(passwordInput.value);
  copyBtn.innerHTML = iconCheckMark;
  setTimeout(() => {
    copyBtn.innerHTML = iconCopy;
  }, 1500);
});

generatePassword();