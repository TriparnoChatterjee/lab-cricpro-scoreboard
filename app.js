const backdrop = document.getElementById("backdrop");
const player = document.querySelectorAll("#player");
const popUp = document.getElementById("pop-up");
const returnImageName = (pname) => {
  if (pname === "Virendra shewag") {
    return "Player6.png";
  } else if (pname === "Sachin") {
    return "Player5.png";
  } else if (pname === "Gautam Gambhir") {
    return "Player4.png";
  } else if (pname === "Virat Kohli") {
    return "Player3.png";
  } else if (pname === "Msdhoni") {
    return "Player2.png";
  } else if (pname === "Yuvraj") {
    return "Player1.png";
  } else if (pname === "Suresh Raina") {
    return "Player1-1.jpg";
  } else if (pname === "Harbhajan Singh") {
    return "Player1-2.jpg";
  } else if (pname === "Zaheer Khan") {
    return "Player1-3.jpg";
  } else if (pname === "Munaf Patel") {
    return "Player1-4.jpg";
  } else if (pname === "S Sreesanth") {
    return "Player1-5.jpg";
  }
};
const managePopUp = () => {};
const closeModal = () => {
  backdrop.classList.remove("visible");
  popUp.classList.remove("pop_up__vis");
};
console.log(player);
for (let it of player) {
  it.addEventListener("click", (event) => {
    backdrop.classList.toggle("visible");
    popUp.classList.toggle("pop_up__vis");
    var imgName = returnImageName(event.target.outerText);
    popUp.innerHTML = `
        <img src="./assets/${imgName}" alt="" srcset="" >
        `;
    console.log(event.target.outerText);
    //   console.log(popUp);
    //   console.log();
  });
}
// player.addEventListener("click", (event) => {
//   backdrop.classList.toggle("visible");
//   popUp.classList.toggle("pop_up__vis");
//   var imgName = returnImageName(event.target.outerText);
//   popUp.innerHTML = `
//   <img src="./assets/${imgName}" alt="" srcset="" >
//   `;
//   console.log(event.target.outerText);
//   //   console.log(popUp);
//   //   console.log();
// });

backdrop.addEventListener("click", closeModal);
