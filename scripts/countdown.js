const countDown = () => {
    
    const count = document.querySelector('.countdown-page');
    let countStrucuture = `
        <div class="countdown-wrapper">
            <div class="countdown-time-end">
                <span class="countdown-days-end"></span>
                <span>:</span>
                <span class="countdown-hours-end"></span>
                <span>:</span>
                <span class="countdown-minutes-end"></span>
                <span>:</span>
                <span class="countdown-seconds-end"></span>
            </div>

            <div class="countdown-date-wrapper">
                <input class="countdown-date" type="datetime-local"/>
            </div>

            <div class="countdown-button-wrapper">
                <button class="countdown-button">Começar</button>
            </div>
        </div>

    `
    count.innerHTML = countStrucuture;
}

export default countDown;