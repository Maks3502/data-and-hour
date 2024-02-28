class CountdownTimer {
  constructor({ selector, targetDate }) {
      this.targetDate = new Date(targetDate).getTime();
      this.timerDisplay = document.querySelector(selector);

      this.updateTimer();
  }

  updateTimer() {
      setInterval(() => {
          const currentTime = new Date().getTime();
          const timeDifference = this.targetDate - currentTime;

          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const mins = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const secs = Math.floor((timeDifference % (1000 * 60)) / 1000);

          this.timerDisplay.querySelector('[data-value="days"]').textContent = days.toString().padStart(2, '0');
          this.timerDisplay.querySelector('[data-value="hours"]').textContent = hours.toString().padStart(2, '0');
          this.timerDisplay.querySelector('[data-value="mins"]').textContent = mins.toString().padStart(2, '0');
          this.timerDisplay.querySelector('[data-value="secs"]').textContent = secs.toString().padStart(2, '0');
      }, 1000);
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: 'Jul 29, 2024 18:28:00', 
});