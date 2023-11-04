
# Age Calculator

Esse é um projeto "simples" feito para calcular a idade do usuário.




## Desafios

Acredito que meu principal problema nessa projeto foi subestimá-lo, pois acreditava que fosse apenas subtrair datas e pronto, porém havia esquecido de algumas variáveis como: Anos bissextos, meses com 30 dias, meses com 31 dias e Fevereiro mês que por "padrão" tem 28 dias, mas a cada 4 anos tem 29 dias...




## Aprendizados

Por final aprendi algumas coisas interessantes como: 


#### Criar um objeto "Date" já passando uma data como parâmetro

```javascript
var dataNascimento = new Date(document.getElementById("year").value);
var dataAtual = new Date();
```

#### Subtração entre "keys" do objeto "Date"

```javascript
var idadeAnos = (dataAtual.getFullYear() - dataNascimento.getFullYear())

var idadeMeses = ((dataAtual.getMonth()) - (dataNascimento.getMonth()))
```

#### Criação de uma fórmula

```
Acabei criando uma fórmula para deixar o cálculo ainda mais preciso, seguindo a seguinte lógica:

Meses com 31 dias: 7
Meses com 30 dias: 4
Meses com 28/29 dias: 1

Para o caso de Fevereiro, adicionei algo extra:
Anos Bissextos ocorrem a cada 4 anos, logo 1 entre 4 anos são bissextos, 
que é equivalente a 25% ou 0.25.

Fórmula:
( (qtde de meses com 31 dias * 31) 
+ (qtde de meses com 30 dias * 30)
+ (qtde de meses com 28/29 dias * 28.25)) / quantidade de meses em 1 ano.
```

#### Fórmula na prática
```javascript
var idadeDias = (dataAtual.getDate() - dataNascimento.getDate())

if(idadeDias < 0){

    let variacao = ((7*31 + 4*30 + 1*28.25) / 12)
    idadeDias = Math.floor(variacao + idadeDias)
        
    if(idadeMeses > 0){

        idadeMeses-=1;

    }

}
```

## React Laches+
![Home](https://github.com/Victor-Lis/Age-Calculator/blob/main/Screenshots/Home.png)

## Autores

- [@Victor-Lis](https://github.com/Victor-Lis)

