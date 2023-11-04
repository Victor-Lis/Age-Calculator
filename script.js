function calcularIdade() {

    if(!document.getElementById("year").value){

        return

    }

    var dataNascimento = new Date(document.getElementById("year").value);
    var dataAtual = new Date();

    var idadeAnos = (dataAtual.getFullYear() - dataNascimento.getFullYear())

    var idadeMeses = ((dataAtual.getMonth()) - (dataNascimento.getMonth()))

    if(idadeMeses < 0){

        idadeMeses = 12 + idadeMeses
        idadeAnos-=1;

    }

    if(idadeMeses > 12){

        idadeMeses = idadeMeses - 12;

    }

    var idadeDias = (dataAtual.getDate() - dataNascimento.getDate())

    if(idadeDias < 0){

        let variacao = ((7*31 + 4*30 + 1*28.25) / 12)
        idadeDias = Math.floor(variacao + idadeDias)

        if(idadeMeses > 0){

            idadeMeses-=1;

        }

    }

    document.querySelector("body").innerHTML = `
    
    <div class="form">

        <input id="year" type="date">
        <button id="button" onclick="calcularIdade()"> Calcular </button>

    </div>
    <div id='age'> 
        <p> ${idadeAnos > 1? "Years": "Year"}: ${idadeAnos} </p> 
        <p> ${idadeMeses > 1? "Months": "Month"} : ${idadeMeses} </p>
        <p> ${idadeDias > 1? "Days": "Day"}: ${idadeDias} </p> 
    </div>`

}
  
document.getElementById("button").addEventListener("click", calcularIdade);