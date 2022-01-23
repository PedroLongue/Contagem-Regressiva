const time = () => { 
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const send = document.querySelector('.countdown-button'); //Botão de confirmar

    send.addEventListener("click", countDownDate);
    
        function countDownDate(){
            let timeOut = setInterval(() => {
                const dateEnd = document.querySelector('.countdown-date');
                const dateEndValue = dateEnd.value;
                
                if(dateEndValue !== '') {
                        let count_down = new Date(dateEndValue).getTime(); //Data desejada pelo usuário 
                        let now = new Date().getTime(); //Data atual
                        let distance = count_down - now; //Diferença entre a data desejada e a atual

                        if(distance <= 0) { //Verifica se a data digitada é anterior que a atual ou se é a mesma
                            clearInterval(timeOut);
                            document.querySelector('.countdown-days-end').innerHTML = '00';
                            document.querySelector('.countdown-hours-end').innerHTML = '00';
                            document.querySelector('.countdown-minutes-end').innerHTML = '00';
                            document.querySelector('.countdown-seconds-end').innerHTML = '00';

                        } else {
                            document.querySelector('.countdown-days-end').innerHTML = Math.floor(distance / day); 
                            document.querySelector('.countdown-hours-end').innerHTML = Math.floor(distance % day / hour);
                            document.querySelector('.countdown-minutes-end').innerHTML = Math.floor(distance % hour / minute);
                            document.querySelector('.countdown-seconds-end').innerHTML = Math.floor(distance % minute / second);
                            
                            saveDateLocalStorage(); //localStorage do input
                            saveDataLocalStorage(); //localStorage do cronometro
                        }
                    } else {
                        clearInterval(timeOut)
                        alert('Por favor, preencha os campos!')
                }
            }, second); 
        }

    function saveDateLocalStorage() {
        const localStorageDate = document.querySelector('.countdown-date').value;
        localStorage.setItem("days", localStorageDate);
    }

    function saveDataLocalStorage() {
        //localStorage dos dias e renderiza em tela
        const localStorageDays = document.querySelector('.countdown-days-end').innerHTML;
        const storedDays = parseInt(localStorageDays);

        //localStorage das horas e renderiza em tela
        const localStorageHours = document.querySelector('.countdown-hours-end').innerHTML;
        const storedHours = parseInt(localStorageHours);

        //localStorage dos minutos e renderiza em tela
        const localStorageMinutes = document.querySelector('.countdown-minutes-end').innerHTML;
        const storedMinutes = parseInt(localStorageMinutes);

        //localStorage dos segundos e renderiza em tela
        const localStorageSeconds = document.querySelector('.countdown-seconds-end').innerHTML;
        const storedSeconds = parseInt(localStorageSeconds);

        localStorage.setItem("day", storedDays);
        localStorage.setItem("hour", storedHours);
        localStorage.setItem("minute", storedMinutes);
        localStorage.setItem("second", storedSeconds)
    }

    onload = function showDataLocalStorage() {
        const date = localStorage.getItem("days");
        const day = localStorage.getItem("day");
        const hours = localStorage.getItem("hour");
        const minutes = localStorage.getItem("minute");
        const seconds = localStorage.getItem("second");
        
        if(day === null && hours === null && minutes === null && seconds === null) { //Verifica se os números do cronometro estão nulos
            document.querySelector('.countdown-days-end').innerHTML = '00';
            document.querySelector('.countdown-hours-end').innerHTML = '00';
            document.querySelector('.countdown-minutes-end').innerHTML = '00';
            document.querySelector('.countdown-seconds-end').innerHTML = '00';
        } else {
            document.querySelector('.countdown-date').value = date ;
            document.querySelector('.countdown-days-end').innerHTML = day;
            document.querySelector('.countdown-hours-end').innerHTML = hours;
            document.querySelector('.countdown-minutes-end').innerHTML = minutes;
            document.querySelector('.countdown-seconds-end').innerHTML = seconds;
        }
        countDownDate(); //Faz com que o cronometro continue rodando ao dar reload na página
    }
}

export default time;