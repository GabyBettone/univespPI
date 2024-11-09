/* Database.php
  Create: 16/10/2024
  Author: Fagner Romão
*/


//import moment from 'js/moment.js';

var latitude;
var longitude;
var municipio;
var last_updated;
var horas;

var data_registro;
var cidade;
var data_atualizacao;
var condicao_tempo;
var temp_atual;
var temp_max;
var temp_min;
var pressao;
var umidade;
var vento_kmh;
var chance_chuva;
var nascer_sol;
var por_sol;

function buscarCidade(usuario){
    let cidade = document.getElementById('#cidadeSearch').value;
    if(cidade==="" || cidade===undefined){
        alert("Escolha uma cidade.")
    }else{
        document.getElementById('#cidadeSearch').textContent = '';
        getAPIClima(usuario)
    }

}

async function getAPIClima(usuario){
    let URLWheater;
    

    if (usuario === 0) {
        let cidade = document.getElementById('#cidadeSearch').value;
        let sigla = cidade.substr(-2);
        cidade = cidade.replace(sigla,"") + getEstadoPorSigla(sigla)
        URLWheater = "https://api.weatherapi.com/v1/forecast.json?key=15fd9fab1fe74628887140716242510&q=" + cidade + "&lang=pt";
        municipio = document.getElementById('#cidadeSearch').value;
    }
    if (usuario === 1) {
        // URLWheater = "https://api.weatherapi.com/v1/forecast.json?key=15fd9fab1fe74628887140716242510&q=" + latitude + "," + longitude + "&lang=pt";
        URLWheater = "https://api.weatherapi.com/v1/forecast.json?key=15fd9fab1fe74628887140716242510&q=-22.55,-47.9&lang=pt";
        municipio = "São Pedro - SP"
    }
    
    try {
        const responseWheater = await fetch(URLWheater)
        const respJsonWheater = await responseWheater.json()
        if (responseWheater.status === 200) {
        console.log(respJsonWheater)
        }

        const latid = respJsonWheater.location.lat
        const longit = respJsonWheater.location.lon
        
        let URLMeteo = "https://my.meteoblue.com/packages/basic-day_sunmoon?apikey=WorIH450lSXhkYx6&lat="+latid+"&lon="+longit+"&windspeed=kmh&tz=America/Sao_Paulo";
    // alert('URLMeteo: ' + URLMeteo);
        const responseMeteo = await fetch(URLMeteo)
        const respJsonMeteo = await responseMeteo.json()
        
        if (responseMeteo.status === 200) {
        console.log(respJsonMeteo)
        }
                
    exibirDados(respJsonWheater,respJsonMeteo);
    
    } catch (error) {
        alert("Erro getAPIClima:  " + error);
    }
      
}
function getEstadoPorSigla(sigla) {
    switch (sigla.toUpperCase()) {
        case 'AC': return 'Acre';
        case 'AL': return 'Alagoas';
        case 'AP': return 'Amapá';
        case 'AM': return 'Amazonas';
        case 'BA': return 'Bahia';
        case 'CE': return 'Ceará';
        case 'DF': return 'Distrito Federal';
        case 'ES': return 'Espírito Santo';
        case 'GO': return 'Goiás';
        case 'MA': return 'Maranhão';
        case 'MT': return 'Mato Grosso';
        case 'MS': return 'Mato Grosso do Sul';
        case 'MG': return 'Minas Gerais';
        case 'PA': return 'Pará';
        case 'PB': return 'Paraíba';
        case 'PR': return 'Paraná';
        case 'PE': return 'Pernambuco';
        case 'PI': return 'Piauí';
        case 'RJ': return 'Rio de Janeiro';
        case 'RN': return 'Rio Grande do Norte';
        case 'RS': return 'Rio Grande do Sul';
        case 'RO': return 'Rondônia';
        case 'RR': return 'Roraima';
        case 'SC': return 'Santa Catarina';
        case 'SP': return 'São Paulo';
        case 'SE': return 'Sergipe';
        case 'TO': return 'Tocantins';
        default: return 'Sigla inválida';
    }
}

function exibirDados(respJsonWheater, respJsonMeteo){
    
    document.getElementById('#cidadeSearch').value = ""
    data_registro = `${respJsonWheater.location.localtime}`;
    dtHoje = new Date(Date.now()).toLocaleString().split(',')[0];
    horas = `${respJsonWheater.current.last_updated}`;
    horaPM = `${respJsonWheater.forecast.forecastday[0].astro.sunset}`
    const currentDate = parseInt(horaPM.substring(2,0))+12
    horaPM = currentDate + horaPM.substring(2,5) //horário do por do sol

    latitude = `${respJsonWheater.location.lat}`;
    longitude = `${respJsonWheater.location.lon}`;
    data_atualizacao = `${respJsonWheater.current.last_updated}`;
    condicao_tempo = `${respJsonWheater.current.condition.text}`
    temp_atual = `${Math.floor(respJsonWheater.current.temp_c)}`
    temp_max = `${Math.floor(respJsonWheater.forecast.forecastday[0].day.maxtemp_c)}`
    temp_min = `${Math.floor(respJsonWheater.forecast.forecastday[0].day.mintemp_c)}`
    pressao = `${respJsonWheater.current.pressure_mb}`
    umidade = `${respJsonWheater.current.humidity}`
    vento_kmh = `${respJsonWheater.current.wind_kph}`
    chance_chuva = `${Math.floor(respJsonWheater.forecast.forecastday[0].day.daily_chance_of_rain)}`
    nascer_sol = `${respJsonWheater.forecast.forecastday[0].astro.sunrise}`.substring(0,5)
    por_sol = horaPM
    
    
    //document.getElementById('#cidadeSearch').textContent = "";//limpar campo tela
   
    document.getElementById('#cidade').textContent =" " + municipio;
    //document.getElementById('#dtHoje').textContent = dtHoje;
    document.getElementById("#condition_text").textContent = `${respJsonWheater.current.condition.text}`
    document.getElementById("#icon_current").src = 'https:' + `${respJsonWheater.current.condition.icon}`
    document.getElementById("#last_updated").textContent = " " + dtHoje + " às " + horas.substr(-5) + " Hs"

    document.getElementById("#temp_c").textContent = temp_atual + " °C"
    
    document.getElementById("#day_maxtemp_c").textContent = temp_max + " °C"
    document.getElementById("#day_mintemp_c").textContent = temp_min + " °C"
    
    document.getElementById("#pressure_mb").textContent = pressao + " hPA"
    document.getElementById("#precip_mm").textContent = chance_chuva + " %"
    document.getElementById("#humidity").textContent = umidade + " %"
    document.getElementById("#wind_kph").textContent = vento_kmh + " Km/h"
    document.getElementById("#sunrise").textContent = nascer_sol + " Hs"
    document.getElementById("#sunset").textContent = por_sol + " Hs"

    //Exibir Temp C° Max-Min dos dias seguintes  
    //document.getElementById("#dia1").textContent = getDiaSemana(1)
    document.getElementById("#data1").textContent = getData(1)
    document.getElementById("#dia2").textContent = getDiaSemana(2)
    document.getElementById("#data2").textContent = getData(2)
    document.getElementById("#dia3").textContent = getDiaSemana(3)
    document.getElementById("#data3").textContent = getData(3)
    document.getElementById("#dia4").textContent = getDiaSemana(4)
    document.getElementById("#data4").textContent = getData(4)
    document.getElementById("#dia5").textContent = getDiaSemana(5)
    document.getElementById("#data5").textContent = getData(5)
    document.getElementById("#dia6").textContent = getDiaSemana(6)
    document.getElementById("#data6").textContent = getData(6)
    document.getElementById("#dia1_temp_max").textContent = "MAX  " + `${Math.floor(respJsonMeteo.data_day.temperature_max[1])}` + " °C"
    document.getElementById("#dia1_temp_min").textContent = "MIN  " + `${Math.floor(respJsonMeteo.data_day.temperature_min[1])}` + " °C"
    document.getElementById("#dia2_temp_max").textContent = "MAX  " + `${Math.floor(respJsonMeteo.data_day.temperature_max[2])}` + " °C"
    document.getElementById("#dia2_temp_min").textContent = "MIN  " + `${Math.floor(respJsonMeteo.data_day.temperature_min[2])}` + " °C"
    document.getElementById("#dia3_temp_max").textContent = "MAX  " + `${Math.floor(respJsonMeteo.data_day.temperature_max[3])}` + " °C"
    document.getElementById("#dia3_temp_min").textContent = "MIN  " + `${Math.floor(respJsonMeteo.data_day.temperature_min[3])}` + " °C"
    document.getElementById("#dia4_temp_max").textContent = "MAX  " + `${Math.floor(respJsonMeteo.data_day.temperature_max[4])}` + " °C"
    document.getElementById("#dia4_temp_min").textContent = "MIN  " + `${Math.floor(respJsonMeteo.data_day.temperature_min[4])}` + " °C"
    document.getElementById("#dia5_temp_max").textContent = "MAX  " + `${Math.floor(respJsonMeteo.data_day.temperature_max[5])}` + " °C"
    document.getElementById("#dia5_temp_min").textContent = "MIN  " + `${Math.floor(respJsonMeteo.data_day.temperature_min[5])}` + " °C"
    document.getElementById("#dia6_temp_max").textContent = "MAX  " + `${Math.floor(respJsonMeteo.data_day.temperature_max[6])}` + " °C"
    document.getElementById("#dia6_temp_min").textContent = "MIN  " + `${Math.floor(respJsonMeteo.data_day.temperature_min[6])}` + " °C"

    document.getElementById("#dataGraficoPrevisao").textContent = getData(0)
    document.getElementById("#dataGraficoPrevisaoDia").textContent = " - " + getDiaSemana(0)

    
}

function getDiaSemana(days) {
    date = new Date(Date.now());
    date.setDate(date.getDate() + days);
    return date.toLocaleString('pt-BR', {weekday: 'long'}).toUpperCase();
}
function getData(days) {
    date = new Date(Date.now())
    date.setDate(date.getDate() + days);//addDays(date,days).toLocaleString().split(',')[0].substring(0,5);
    return date.toLocaleString().split(',')[0].substring(0,5);
}

function trataURL(urlValues) {
	var values = urlValues.split('//');
	if (values.length === 2) {
		return values[1];
	} else {
		return values[0];
	}
}

/* Função faz o acesso do frontend com backend e insere os dados na tabela "historico_clima" */

function incluirHistoricoClima(){
    
    let data = {
            
        data_registro : data_registro,
        cidade : municipio,
        latitude : latitude,
        longitude : longitude,
        data_atualizacao : horas,
        condicao_tempo : condicao_tempo,
        temp_atual : temp_atual,
        temp_max : temp_max,
        temp_min : temp_min,
        pressao : pressao,
        umidade : umidade,
        vento_kmh : vento_kmh,
        chance_chuva : chance_chuva,
        nascer_sol : nascer_sol,
        por_sol : por_sol        
        }

    let ajax = new XMLHttpRequest();
    ajax.open('post', 'incluir.php');

    ajax.onreadystatechange = function(){
        if (
            ajax.readyState == 4
            && ajax.status >= 200
            && ajax.status <= 400
        ) {
            let respostaAjax = ajax.responseText;
            console.log(respostaAjax);
            alert("Dados do clima de hoje enviados para Histórico Meteorológico com sucesso!")          
        }
    }
    ajax.send(JSON.stringify(data));
}

