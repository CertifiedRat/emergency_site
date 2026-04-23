// Constants
const leftArea = document.querySelector("#leftArea");
const leftBaseColors = document.querySelectorAll("#left1, #left2, #left3, #left4");
const leftDetails = document.querySelectorAll("#l1, #l2, #l3, #l4");
const leftAll = [leftArea, ...leftBaseColors, ...leftDetails];

const middleArea = document.querySelector("#middleArea");
const middleBaseColors = document.querySelectorAll("#middle1, #middle2, #middle3, #middle4");
const middleDetails = document.querySelectorAll("#m1, #m2, #m3, #m4");
const middleAll = [middleArea, ...middleBaseColors, ...middleDetails];

const rightArea = document.querySelector("#rightArea");
const rightBaseColors = document.querySelectorAll("#right1, #right2, #right3, #right4");
const rightDetails = document.querySelectorAll("#r1, #r2, #r3, #r4");
const rightAll = [rightArea, ...rightBaseColors, ...rightDetails];

const infoText = document.querySelector(".info-text");
const efficiency = document.querySelector("#efficiency");
const requirement = document.querySelector("#requirement");

const html = document.querySelector("html");
const themeBtn = document.querySelector(".theme-btn");
const display = document.querySelector(".displayNone");

const bandaid = document.querySelector("#bandaid");
const bandaidBase = document.querySelector(".bandaidBase");

const tampon = document.querySelector("#tampon");
const tamponBase = document.querySelector(".tamponBase");

const gum = document.querySelector("#gum");
const gumBase = document.querySelector(".gumBase");

//----------------------------------------------------------------------------------------------------------------------------------
//Håber ik der er nogen der skal læse det her, i've been doing way too much...
//LEFT AREA
console.log("er der hul igennem eller hva");

leftArea?.addEventListener("mouseover", mouseoverLeft);
function mouseoverLeft() {
  console.log("mouseoverLeft");
  leftArea.style.cursor = "pointer";
  //Ved at bruge querySelectorAll og forEach kan jeg ændre farven på alle de elementer, der har den samme klasse, i stedet for at skulle kalde hvert enkelt element.
  leftBaseColors.forEach((item) => {
    item.style.fill = "#68e1ea";
  });
}
leftArea?.addEventListener("mouseout", mouseoutLeft);
function mouseoutLeft() {
  console.log("mouseoutLeft");
  leftBaseColors.forEach((item) => {
    item.style.fill = "#2c9ab0";
  });
}

leftArea?.addEventListener("click", clickLeft);
function clickLeft() {
  console.log("clickLeft");
  bandaid.style.display = "block";
  //Man kan endda kombinere en blanding af konstanter i en ny konstant!
  leftAll.forEach((item) => {
    item.style.display = "none";
  });
  infoText.querySelector("h2").textContent = "The Bandaid";
  infoText.querySelector(".placeholder").textContent = "Not just for scraped knees! A heavy-duty adhesive bandage can act as a quick-fix patch for hairline cracks. It's flexible, sticky, and buys you just enough time.";
  efficiency.classList.remove("displayNone");
  efficiency.innerHTML = `<img src="imgs/bandaid.webp" alt="bandaid illustration">`;
  requirement.textContent = "";
}
//Gentager processen for bandaid, fordi jeg syns det var sjovt hheehe
bandaid?.addEventListener("mouseover", mouseoverBandaid);
function mouseoverBandaid() {
  console.log("mouseoverBandaid");
  bandaid.style.cursor = "pointer";
  bandaidBase.style.opacity = "0.8";
}
bandaid?.addEventListener("mouseout", mouseoutBandaid);
function mouseoutBandaid() {
  console.log("mouseoutBandaid");
  bandaidBase.style.opacity = "1";
}
bandaid?.addEventListener("click", clickBandaid);
function clickBandaid() {
  console.log("clickBandaid");
  bandaid.style.display = "none";
  leftAll.forEach((item) => {
    item.style.display = "block";
  });
  console.log("AAAAAAAAAHHHHHHH");
  efficiency.innerHTML = `<img src="imgs/aaaaaah.jpg" alt="PANIC">`;
  requirement.textContent = "";
  infoText.querySelector("h2").textContent = "PUT IT BACK!!";
  infoText.querySelector(".placeholder").textContent = "";
}
//---------------------------------------------------------------------------------------------------------------------------------
//MIDDLE AREA
middleArea?.addEventListener("mouseover", mouseoverMiddle);
function mouseoverMiddle() {
  console.log("mouseoverMiddle");
  middleArea.style.cursor = "pointer";
  middleBaseColors.forEach((item) => {
    item.style.fill = "#68e1ea";
  });
}
middleArea?.addEventListener("mouseout", mouseoutMiddle);
function mouseoutMiddle() {
  console.log("mouseoutMiddle");
  middleBaseColors.forEach((item) => {
    item.style.fill = "#2c9ab0";
  });
}

middleArea?.addEventListener("click", clickMiddle);
function clickMiddle() {
  console.log("clickMiddle");
  gum.style.display = "block";
  middleAll.forEach((item) => {
    item.style.display = "none";
  });
  infoText.querySelector("h2").textContent = "The Gum";
  infoText.querySelector(".placeholder").textContent = "Stuck in a pinch? A piece of chewed gum makes for a surprisingly airtight (and minty) temporary seal. Just stretch, press, and hold until the flow stops.";
  efficiency.classList.remove("displayNone");
  efficiency.innerHTML = `<img src="imgs/gum.webp" alt="Gum Illustration">`;
  requirement.textContent = "";
}

gum?.addEventListener("mouseover", mouseoverGum);
function mouseoverGum() {
  console.log("mouseoverGum");
  gum.style.cursor = "pointer";
  gumBase.style.opacity = "0.8";
}
gum?.addEventListener("mouseout", mouseoutGum);
function mouseoutGum() {
  console.log("mouseoutGum");
  gumBase.style.opacity = "1";
}
gum?.addEventListener("click", clickGum);
function clickGum() {
  console.log("clickGum");
  gum.style.display = "none";
  middleAll.forEach((item) => {
    item.style.display = "block";
  });
  console.log("AAAAAAAAAHHHHHHH");
  efficiency.innerHTML = `<img src="imgs/aaaaaah.jpg" alt="PANIC">`;
  requirement.textContent = "";
  infoText.querySelector("h2").textContent = "PUT IT BACK!!";
  infoText.querySelector(".placeholder").textContent = "";
}
//---------------------------------------------------------------------------------------------------------------------------------
//RIGHT AREA
rightArea?.addEventListener("mouseover", mouseoverRight);
function mouseoverRight() {
  console.log("mouseoverRight");
  rightArea.style.cursor = "pointer";
  rightBaseColors.forEach((item) => {
    item.style.fill = "#68e1ea";
  });
}
rightArea?.addEventListener("mouseout", mouseoutRight);
function mouseoutRight() {
  console.log("mouseoutRight");
  rightBaseColors.forEach((item) => {
    item.style.fill = "#2c9ab0";
  });
}

rightArea?.addEventListener("click", clickRight);
function clickRight() {
  console.log("clickRight");
  tampon.style.display = "block";
  rightAll.forEach((item) => {
    item.style.display = "none";
  });
  infoText.querySelector("h2").textContent = "The Tampon";
  infoText.querySelector(".placeholder").textContent = "The ultimate absorption tool. Because they are designed to expand when wet, plugging a leak with a tampon creates a tight, pressurized seal that stops water in its tracks.";
  efficiency.classList.remove("displayNone");
  efficiency.innerHTML = `<img src="imgs/tampon.webp" alt="tampon illustration">`;
  requirement.textContent = "Preferably not used";
}
console.log("der er sku hul endnu");

tampon?.addEventListener("mouseover", mouseoverTampon);
function mouseoverTampon() {
  console.log("mouseoverTampon");
  tampon.style.cursor = "pointer";
  tamponBase.style.opacity = "0.8";
}
tampon?.addEventListener("mouseout", mouseoutTampon);
function mouseoutTampon() {
  console.log("mouseoutTampon");
  tamponBase.style.opacity = "1";
}
tampon?.addEventListener("click", clickTampon);
function clickTampon() {
  console.log("clickTampon");
  tampon.style.display = "none";
  rightAll.forEach((item) => {
    item.style.display = "block";
  });
  console.log("AAAAAAAAAHHHHHHH");
  efficiency.innerHTML = `<img src="imgs/aaaaaah.jpg" alt="PANIC">`;
  requirement.textContent = "";
  infoText.querySelector("h2").textContent = "PUT IT BACK!!";
  infoText.querySelector(".placeholder").textContent = "";
}

//HOW TO ADD PICTURES
//   efficiency.innerHTML = `<img src="imgs/" alt="">`;

//-----------------------------------------------------------------------------------------------------------------------------------
//FORMS

// form?.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//   //undgå refresh
//   event.preventDefault();
//   // 1. samle data op
//   const formData = new FormData(form);
//   console.log(formData.get("first_name"));
//   console.log(formData.get("speech_bubble"));
//   // 2. vise data
//   outputName.textContent = formData.get("first_name");
//   outputSpeechBubble.textContent = formData.get("speech_bubble");
//   // 3. evt. nustil formular
//   form.reset();
// }
// const form = document.querySelector("form");
// const outputName = document.querySelector("#first_name_output");
// const outputSpeechBubble = document.querySelector("#speech_bubble_output");

const form = document.querySelector("#webform");
// Select the SVG elements you want to change
const outputName = document.querySelector("#nameTxtPlaceholder");
const outputSpeechText = document.querySelector("#SpeechBubbleTxt");
const speechBubbleGroup = document.querySelector("#SpeechBubbleSVG");
const svg = document.querySelector("#stickerSVG");
const downloadBtn = document.querySelector("#dwnloadBtn");

form?.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  document.querySelector(".formPlaceholder").textContent = "Save it, forget it, burn it! It's up to you.";
  svg.classList.remove("displayNone");
  downloadBtn.classList.remove("displayNone");
  // 1. Collect all data at once
  const formData = new FormData(form);
  console.log(formData.get("first_name"));
  console.log(formData.get("speech_bubble"));
  console.log(formData.get("fishType"));

  // 2. Text Data
  outputName.textContent = formData.get("first_name");

  const speechContent = formData.get("speech_bubble");
  if (speechContent) {
    outputSpeechText.querySelector("div").textContent = speechContent;
    speechBubbleGroup.style.display = "block"; // Show bubble if there's text
  }

  // 3. Handle the "Alive vs Dead" Logic (Radio buttons)
  const isAlive = formData.get("fishType"); // Gets "yes" or "no"
  if (isAlive === "yes") {
    document.querySelector("#liveFish").style.display = "block";
    document.querySelector("#deadFish").style.display = "none";
    document.querySelector("#SavedOrFinalWitness").textContent = "Saved by:";
  } else {
    document.querySelector("#liveFish").style.display = "none";
    document.querySelector("#deadFish").style.display = "block";
    document.querySelector("#SavedOrFinalWitness").textContent = "Final Witness:";
  }

  // 4. Accessories (Select dropdown)
  const accessory = formData.get("accessory_selection");

  if (accessory === "hat") {
    document.querySelector("#propellerHat").style.display = "block";
  } else if (accessory === "glasses") {
    document.querySelector("#sunglasses").style.display = "block";
  } else if (accessory === "cigar") {
    document.querySelector("#cigar").style.display = "block";
  } else if (accessory === "none") {
    document.querySelector("#accessories").style.display = "none";
  }
  // En anden måde man kan gøre det på, som jeg ikke helt fatter endnu, så gjorde det på den måde vi har lært det^
  // if (accessory !== "none") {
  //   document.querySelector(`#${accessory}_path`).style.display = "block";
  // }

  // 5. Color
  const chosenColor = formData.get("fish_color");
  document.querySelector(".fishColor").style.fill = chosenColor;
  // 6. Reset form if you want
}

//DOWNLOAD FUNCTION - AI generated, jeg kunne ikke få det til at virke selv:')
//Hvilket ville være synd, da det var mit sidste step.
downloadBtn?.addEventListener("click", function () {
  const svg = document.getElementById("stickerSVG");

  // 1. Serialize SVG to XML text
  const svgData = new XMLSerializer().serializeToString(svg);

  // 2. Convert XML to Base64 Data URI
  // btoa() encodes the string to base64.
  // unescape(encodeURIComponent()) handles special characters (like emojis or symbols)
  const svgBase64 = window.btoa(unescape(encodeURIComponent(svgData)));
  const dataUri = "data:image/svg+xml;base64," + svgBase64;

  const img = new Image();
  img.onload = function () {
    const canvas = document.createElement("canvas");
    // Use fixed dimensions or match the viewBox
    canvas.width = 1000;
    canvas.height = 1000;
    const ctx = canvas.getContext("2d");

    // Draw the image onto the canvas
    ctx.drawImage(img, 0, 0, 1000, 1000);

    try {
      // 3. Export as PNG (This should now work without the security error)
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "sticker.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (e) {
      console.error("Download failed:", e);
      alert("Security error: The canvas is still tainted. Check for external images in your SVG.");
    }
  };
  img.src = dataUri;
});

form?.addEventListener("invalid", cancelPopup, true);
function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}
console.log("forsatan det virker");
//---------------------------------------------------------------------------------------------------------------------------------
//THEME TOGGLE
// 1. Tjek localStorage for darkMode
if (localStorage.getItem("darkMode")) {
  html.classList.toggle("dark");
  themeBtn.textContent = "Light";
}
// 2. Tilføj eventlistener til knappen
function toggleTheme() {
  console.log("scallywag yarrrr");
  html.classList.toggle("dark");
  // 3. Opdater knaptekst/ikon/whatever you got og localStorage
  if (html.classList.contains("dark")) {
    themeBtn.textContent = "Light";
    localStorage.setItem("darkMode", true);
  } else {
    themeBtn.textContent = "Dark";
    localStorage.setItem("darkMode", false);
  }
}
themeBtn.addEventListener("click", toggleTheme);

//---------------------------------------------------------------------------------------------------------------------------------
//What i learned/note to self

//Tilføj ? efter det element du kalder, hvis det ikke findes alle steder i HTML'en!
//Så undgår du Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
//Troede ikke man måtte lave et nyt js dokument....... Det måtte man så gerne:')

// function handleSubmit(event) {
// const formData = new FormData(form);
//}

//Husk aria labels i HTML
