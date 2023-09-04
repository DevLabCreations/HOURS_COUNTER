const startTimeInput = document.getElementById("startTime");
const endTimeInput = document.getElementById("endTime");
const calculateBtn = document.getElementById("calculateBtn");
const durationElement = document.getElementById("duration");

function calculateDuration() {
    const startTime = parseTime(startTimeInput.value);
    const endTime = parseTime(endTimeInput.value);

    let duration = endTime - startTime;
    if (duration < 0) {
        // If endTime is earlier than startTime, it means it's past midnight.
        duration += 24 * 60; // Adding 24 hours worth of minutes
    }

    const hours = Math.floor(duration / 60);
    durationElement.textContent = hours;
}

function parseTime(timeString) {
    const [hours, minutes] = timeString.split(":");
    return parseInt(hours) * 60 + parseInt(minutes);
}

calculateBtn.addEventListener("click", calculateDuration);
