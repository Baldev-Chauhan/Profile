function updateClock() {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const second = now.getSeconds();

      const hourAngle = (hour % 12 + minute / 60) * 30;
      const minuteAngle = (minute + second / 60) * 6;
      const secondAngle = second * 6;

      document.getElementById("hour").style.transform = `rotate(${hourAngle}deg)`;
      document.getElementById("minute").style.transform = `rotate(${minuteAngle}deg)`;
      document.getElementById("second").style.transform = `rotate(${secondAngle}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock();