var kb = 1024;
var mb = 102400;
var gb = 102400000;
var tb = 102400000000;
var pb = 102400000000000;

var tamanho = Number(300);

function Calcula(tamanho)
{
    if(isNaN(tamanho)){
        return "Valor deve ser um numero"
    }
    else if(tamanho < 1){ 
        return "O numero não pode ser menor que 1"
    }
    else if(tamanho >0 && tamanho <1024){
        return (tamanho).toFixed(2) + " B"
    }
    else if(tamanho => 1024 && tamanho < 102400)
    {
        tamanho = tamanho / kb;
        return (tamanho).toFixed(2) + " KB"
    }
    else if(tamanho > 102400 && tamanho < 102400000)
    {
        tamanho = tamanho / mb;
        return (tamanho).toFixed(2) + " MB"
    }
    else if(tamanho > 102400000 && tamanho < 102400000000){
        tamanho = tamanho / gb;
        return (tamanho).toFixed(2) + " GB"
    }

}

var resultado = Calcula(tamanho);
console.log(resultado);






