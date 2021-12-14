function calcular(){
    var height = document.getElementById('height');
    var weight = document.getElementById('weight');
    var resImc = document.getElementById('resImc');

    var heightN = Number (height.value.replace(',','.'));
    var weightN = Number(weight.value.replace(',','.'));

    var result = weightN / (heightN * 2);

    var element = document.getElementById("ImcTable"); //pegar o id da tabela 

    var index = 0;

    switch(true){
    
        case (result < 18.5):
            index = 1;
            break;
        
        case(result >= 18.5 && result < 24.9):
            index = 2;
            break;
        
        case (result >= 25.0 && result < 29.9):
            index = 3;
            break;
               
        case (result >= 30.0 && result < 39.9):
            index = 4;
            break;
            
        case (result > 40.0):
            index = 5;
            break;
    }
    if(index > 0){
        element.rows[index].classList.add('contrastRow');
        removeClassOtherRows(index);
    }
    

    resImc.innerHTML =  `<p>Seu IMC é: <strong>${result.toFixed(2)}</strong></p>`;
}

    function removeClassOtherRows (index){
        var element = document.getElementById("ImcTable");

        for (var i = 1; i <= 5 || i <= 0; i++){
            if(index != i){
                element.rows[i].classList.remove('contrastRow')
            }
        }
    }


