let actualSpeed = 1;

const interval = setInterval(() => {
  const header = document.querySelector("._3All_ span");

  if (header) {
    clearInterval(interval);

    const button = document.createElement("button");
    button.setAttribute("id", "speedbutton");

    button.innerHTML = "1x";
    button.classList.add("twoTimesButton");

    button.addEventListener("click", () => {
      const speedbutton = document.getElementById("speedbutton");

      const audios = document.querySelectorAll("audio");
      if (audios.length > 0) {
        actualSpeed += 0.25;
        speedbutton.innerHTML = actualSpeed + "x";
      }

      if (actualSpeed > 2) {
        actualSpeed = 1;
        speedbutton.innerHTML = "1x";
      }

      audios.forEach((audio) => {
        audio.playbackRate = actualSpeed;
      });
    });

    const buttons = document.querySelectorAll(".PVMjB");
    header.removeChild(buttons[2]);
    header.appendChild(button);
    header.appendChild(buttons[2]);
  }
}, 1000);

const intervalAudios = setInterval(() => {
  const audioButtons = document.querySelectorAll("._2Y-Jy");

  if (audioButtons.length > 0) {
    // clearInterval(intervalAudios);

    audioButtons.forEach((audioButton) => {
      audioButton.addEventListener("click", () => {
        const audios = document.querySelectorAll("audio");
        audios.forEach((audio) => {
          audio.playbackRate = actualSpeed;
        });
      });
    });
  }
}, 1000);
