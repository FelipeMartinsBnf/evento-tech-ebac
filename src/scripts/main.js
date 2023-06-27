AOS.init();

//Pegar o Mês e ano da maquina para o evento sempre estar em contagem regressiva
const date = new Date()
const year = date.getFullYear()+1;
//Calcular a minha idade
const Age = (year - 2005);
const dataEvento = new Date(`4 3, ${year} 0:00:00`);

//Alterar a data no header do evento
document.getElementById('data').innerHTML=`3/4/${year}`;
//Alterar a minha idade
document.getElementById('idade').innerHTML=Age

const TimeStampEvent = dataEvento.getTime();

//Contagem regressiva
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

