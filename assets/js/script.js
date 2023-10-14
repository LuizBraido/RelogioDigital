const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const dataCompleta = document.getElementById('data');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();
    let indMes = dateToday.getMonth();
    let indDiaSemana = dateToday.getDay();

    var diasDaSemana = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado');
    var mesesDoAno = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    let fullDate = diasDaSemana[indDiaSemana] + ', ' + dateToday.getDate() + ' de ' + mesesDoAno[indMes] + ' de ' + dateToday.getFullYear();

    if  (hora < 10) hora = '0' + hora;

    if (minuto < 10) minuto = '0' + minuto;

    if (segundo < 10) segundo = '0' + segundo;

    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;
    dataCompleta.textContent = fullDate;

})