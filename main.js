// function saklar(params) {
//   const lampu1 = document.getElementById("lampu1");
//   const lampu2 = document.getElementById("lampu2");
//   const lampu3 = document.getElementById("lampu3");

//   const btns = document.querySelectorAll("#button");

//   const btn = btns[params - 1];

//   if (btn.classList.contains("ON")) {
//     if (params == 1) {
//       lampu1.src = "assets/images/on.gif";
//       btn.classList.replace("ON", "OFF");
//       btn.textContent = "OFF";
//       return lampu1;
//     } else if (params == 2) {
//       lampu2.src = "assets/images/on.gif";
//       btn.classList.replace("ON", "OFF");
//       btn.textContent = "OFF";
//       return lampu2;
//     } else if (params == 3) {
//       lampu3.src = "assets/images/on.gif";
//       btn.classList.replace("ON", "OFF");
//       btn.textContent = "OFF";
//       return lampu3;
//     }
//   }

//   if (btn.classList.contains("OFF")) {
//     if (params == 1) {
//       lampu1.src = "assets/images/off.gif";
//       btn.classList.replace("OFF", "ON");
//       btn.textContent = "ON";
//       return;
//     } else if (params == 2) {
//       lampu2.src = "assets/images/off.gif";
//       btn.classList.replace("OFF", "ON");
//       btn.textContent = "ON";
//       return;
//     } else if (params == 3) {
//       lampu3.src = "assets/images/off.gif";
//       btn.classList.replace("OFF", "ON");
//       btn.textContent = "ON";
//       return;
//     }
//   }
// }

// CHAT GPT
function saklar(params) {
  // mengambil elemen img kedalam array
  const lamps = [
    document.getElementById("lampu1"),
    document.getElementById("lampu2"),
    document.getElementById("lampu3"),
    [document.getElementById("lampu1"), document.getElementById("lampu2"), document.getElementById("lampu3")],
  ];

  // mengambil semua button / saklar
  const btns = document.querySelectorAll("#button");

  //agar mengetahui element button yang diklik sesuai dengan parameter yang dikirimkan
  const btn = btns[params - 1];

  if (btn) {
    // agar mengetahui element image lamp yang diklik sesuai dengan parameter yang dikirimkan
    const lamp = lamps[params - 1];

    if (params == 4) {
      if (btn.classList.contains("ON")) {
        btns[3].classList.replace("bg-[#727272]", "bg-green-600");
        lamps.forEach((e) => {
          e.src = "assets/images/on.gif";
        });

        btns.forEach((e) => {
          e.classList.replace("ON", "OFF");
          e.textContent = "ON";
        });
        return;
      } else if (btn.classList.contains("OFF")) {
        btns[3].classList.replace("bg-green-600", "bg-[#727272]");
        lamps.forEach((e) => {
          e.src = "assets/images/off.gif";
        });

        btns.forEach((e) => {
          e.classList.replace("OFF", "ON");
          e.textContent = "OFF";
        });
        return;
      }
    }

    // mengecek class pada button
    if (btn.classList.contains("ON")) {
      lamp.src = "assets/images/on.gif";
      btn.classList.replace("ON", "OFF");
      btn.textContent = "ON";
      return;
    } else if (btn.classList.contains("OFF")) {
      lamp.src = "assets/images/off.gif";
      btn.classList.replace("OFF", "ON");
      btn.textContent = "OFF";
      return;
    }
  }
}
