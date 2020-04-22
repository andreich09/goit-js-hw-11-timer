class CounterTime {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate.getTime();
        this.timeCalc = this.timeCalc.bind(this);
        this.start();
    }

    timeCalc() {
        const day = document.querySelector('[data-value="days"]');
        const hour = document.querySelector("[data-value='hours']");
        const minute = document.querySelector("[data-value='mins']");
        const second = document.querySelector("[data-value='secs']");
        const timeNow = Date.now();
        this.time = this.targetDate - timeNow;
        const days = Math.floor(this.time / (1000 * 60 * 60 * 24));
        day.textContent = days < 10 ? `${days}` : days;
        const hours = pad(Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        hour.textContent = hours < 10 ? `${hours}` : hours;
        const mins = pad(Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60)));
        minute.textContent = mins < 10 ? `${mins}` : mins;
        const secs = pad(Math.floor((this.time % (1000 * 60)) / 1000));
        second.textContent = secs < 10 ? `${secs}` : secs;
    }

    start() {
        setTimeout(this.timeCalc, 0);
        setInterval(this.timeCalc, 1000);
    }
}

function pad(value) {
    return String(value).padStart(2, '0');
}

const timer = new CounterTime({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2020')
});
