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

        idadeDias = Math.floor(30.416666666666666666666666666667 + idadeDias)

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
    console.log(`Year: ${idadeAnos} | Month: ${idadeMeses} | Day: ${idadeDias}`)

    // let quantidadeMeses = (idadeAnos * 12) + idadeMeses;

    // console.log(`Meses: ${quantidadeMeses} | Day: ${idadeDias}`)

    // let quantidadeSemanas = Math.ceil((quantidadeMeses*4.35) + (idadeDias/7))

    // console.log(`Semanas: ${quantidadeSemanas} | Day: ${Math.ceil(((quantidadeMeses*4.35) + (idadeDias/7)) - quantidadeSemanas)}`)

}
  
document.getElementById("button").addEventListener("click", calcularIdade);