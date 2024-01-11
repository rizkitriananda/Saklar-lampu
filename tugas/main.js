function saklar(name, number, numberLampInGroup) {
  // mengambil elemen img kedalam array
  const lamps = {
    lampuKel: document.querySelectorAll("#lampuK"),
    lampuMkn: document.querySelectorAll("#lampuM"),
    lampuTm: document.querySelectorAll("#lampuT"),
    lampuTdr: document.querySelectorAll("#lampuTR"),
  };

  const btns = document.querySelectorAll("#button");
  const btn = btns[number - 1];

  const lampk = lamps["lampuKel"][numberLampInGroup - 1];
  const lampM = lamps["lampuMkn"][numberLampInGroup - 1];
  const lampT = lamps["lampuTm"][numberLampInGroup - 1];
  const lampTR = lamps["lampuTdr"][numberLampInGroup - 1];

  if (btn.checked) {
    if (name == "kel") {
      lampk.src = "../assets/images/on.gif";
    } else if (name == "mkn") {
      lampM.src = "../assets/images/on.gif";
    } else if (name == "tm") {
      lampT.src = "../assets/images/on.gif";
    } else if (name == "tdr") {
      lampTR.src = "../assets/images/on.gif";
    }
  } else {
    if (name == "kel") {
      lampk.src = "../assets/images/off.gif";
    } else if (name == "mkn") {
      lampM.src = "../assets/images/off.gif";
    } else if (name == "tm") {
      lampT.src = "../assets/images/off.gif";
    } else if (name == "tdr") {
      lampTR.src = "../assets/images/off.gif";
    }
  }

  const controlBtns = document.querySelectorAll(".control-btn");
  const controlBtn = controlBtns[number - 1];
  const lampGroups = ["lampuKel", "lampuMkn", "lampuTm", "lampuTdr"];
  const labelBtnCheckBox = document.querySelectorAll("#label-ctrl-btn");
  const labelBtn = labelBtnCheckBox[number - 1];

  const btnChecked = {
    buttonCheckedKel: [btns[0], btns[1], btns[2]],
    buttonCheckedMkn: [btns[3]],
    buttonCheckedTm: [btns[4], btns[5], btns[6], btns[7]],
    buttonCheckedTdr: [btns[8], btns[9]],
  };
  const btnGroups = ["buttonCheckedKel", "buttonCheckedMkn", "buttonCheckedTm", "buttonCheckedTdr"];

  if (controlBtn.checked) {
    if (numberLampInGroup == "kel") {
      labelBtn.textContent = "ON";
      btnChecked["buttonCheckedKel"].forEach((e) => {
        e.checked = true;
      });
      lamps["lampuKel"].forEach((e) => {
        e.src = "../assets/images/on.gif";
      });
    } else if (numberLampInGroup == "mkn") {
      labelBtn.textContent = "ON";
      btnChecked["buttonCheckedMkn"].forEach((e) => {
        e.checked = true;
      });
      lamps["lampuMkn"].forEach((e) => {
        e.src = "../assets/images/on.gif";
      });
    } else if (numberLampInGroup == "tm") {
      labelBtn.textContent = "ON";
      btnChecked["buttonCheckedTm"].forEach((e) => {
        e.checked = true;
      });
      lamps["lampuTm"].forEach((e) => {
        e.src = "../assets/images/on.gif";
      });
    } else if (numberLampInGroup == "tdr") {
      labelBtn.textContent = "ON";
      btnChecked["buttonCheckedTdr"].forEach((e) => {
        e.checked = true;
      });
      lamps["lampuTdr"].forEach((e) => {
        e.src = "../assets/images/on.gif";
      });
    } else if (numberLampInGroup == "all") {
      labelBtnCheckBox.forEach((e) => {
        e.textContent = "ON";
      });

      // Melakukan iterasi melalui setiap grup lampu menggunakan forEach
      lampGroups.forEach((group) => {
        // Mengambil elemen lampu dari grup tertentu
        lamps[group].forEach((e) => {
          // Mengubah sumber gambar lampu menjadi "assets/images/off.gif"
          e.src = "../assets/images/on.gif";
        });
      });

      btnGroups.forEach((group) => {
        // Mengambil elemen button dari grup tertentu
        btnChecked[group].forEach((e) => {
          e.checked = true;
        });
      });
    }
  } else {
    if (numberLampInGroup == "kel") {
      labelBtn.textContent = "OFF";
      btnChecked["buttonCheckedKel"].forEach((e) => {
        e.checked = false;
      });
      lamps["lampuKel"].forEach((e) => {
        e.src = "../assets/images/off.gif";
      });
    } else if (numberLampInGroup == "mkn") {
      labelBtn.textContent = "OFF";
      btnChecked["buttonCheckedMkn"].forEach((e) => {
        e.checked = false;
      });
      lamps["lampuMkn"].forEach((e) => {
        e.src = "../assets/images/off.gif";
      });
    } else if (numberLampInGroup == "tm") {
      labelBtn.textContent = "OFF";
      btnChecked["buttonCheckedTm"].forEach((e) => {
        e.checked = false;
      });
      lamps["lampuTm"].forEach((e) => {
        e.src = "../assets/images/off.gif";
      });
    } else if (numberLampInGroup == "tdr") {
      labelBtn.textContent = "OFF";
      btnChecked["buttonCheckedTdr"].forEach((e) => {
        e.checked = false;
      });
      lamps["lampuTdr"].forEach((e) => {
        e.src = "../assets/images/off.gif";
      });
    } else if (numberLampInGroup == "all") {
      labelBtnCheckBox.forEach((e) => {
        e.textContent = "OFF";
      });

      // Melakukan iterasi melalui setiap grup lampu menggunakan forEach
      lampGroups.forEach((group) => {
        // Mengambil elemen lampu dari grup tertentu
        lamps[group].forEach((e) => {
          // Mengubah sumber gambar lampu menjadi "assets/images/off.gif"
          e.src = "../assets/images/off.gif";
        });
      });

      btnGroups.forEach((group) => {
        // Mengambil elemen button dari grup tertentu
        btnChecked[group].forEach((e) => {
          e.checked = false;
        });
      });
    }
  }
}
