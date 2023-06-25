AOS.init();

//Pegar o Mês e ano da maquina para o evento sempre estar em contagem regressiva
const date = new Date()
const month = date.getMonth() + 2;
const year = date.getFullYear();

const dataEvento = new Date(`${month} 10, ${year} 16:00:00`);

//Alterar a data no header do evento
document.getElementById('data').innerHTML=`10/${month}/${year}`;


const TimeStampEvent = dataEvento.getTime();

const CountTime = setInterval(function(){
    const now = new Date();
    const TimeStamp = now.getTime();

    const DistanceToFinal = TimeStampEvent - TimeStamp;//ms

    const DaysInMs = 1000 * 60 * 60 * 24;
    const HoursInMs =  1000 * 60 * 60;
    const MinsInsMs = 1000 * 60;

    const Days = Math.floor(DistanceToFinal / DaysInMs);
    const Hours = Math.floor(DistanceToFinal % DaysInMs / HoursInMs);
    const Mins = Math.floor((DistanceToFinal % HoursInMs) / MinsInsMs);
    const Seconds = Math.floor((DistanceToFinal % MinsInsMs) / 1000)

    document.getElementById('contador').innerHTML=`${Days}d ${Hours}h ${Mins}m ${Seconds}s`;

    if(DistanceToFinal < 0){
        clearInterval(CountTime);
        document.getElementById('contador').innerHTML="Evento Expirado"
    }
}, 1000)

