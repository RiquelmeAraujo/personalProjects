// Function resposavel por pegar as checkbox, adicionar em um array e mostrar ao usuario qual as escolhas dele
var valueList = document.getElementById('valueList'); // Pegar o P para exibir a mensagem
var text = '<span>Você escolheu:</span>' // Mensagem a ser exibida no paragráfo

var checkboxes = document.querySelectorAll('.checkbox') // Pegar as checkbox 
var userAlarms = []; //Array onde serão inseridos os horários 
var userAlarmsName = [];

for(var checkbox of checkboxes){
    checkbox.addEventListener('click', function(){
        if(this.checked == true){
            userAlarms.push(this.value);
            userAlarmsName.push(this.name);
            valueList.innerHTML = text + userAlarmsName.join(' , ')
            formatData()
        }else{
            userAlarms = userAlarms.filter(Event => Event !== this.value)
            userAlarmsName = userAlarmsName.filter(Event => Event !== this.id)
            valueList.innerHTML = text + userAlarmsName.join(' , ')
        }
    })
}

// função para mudar o valor que o usuário deseja ser despertado antes
var timeBefore = document.getElementById('minutesBefore');
var timeBeforeValue;

timeBefore.addEventListener('change', function(){
    timeBeforeValue = Number(timeBefore.value)
})

// Function responsável por pegar os valores do array formatar e transformar em inteiros 
var userAlarmsFormatado = []
function formatData(){
    for(var i = 0; i < userAlarms.length; i++){
        userAlarmsFormatado[i] = Number(userAlarms[i].replace(/:/g , ''))   
    }   
}

// função para pegar a hora de despertar
var calculate;
setInterval(function(){
        var data = new Date();
      
        var hour = data.getHours();
        var min = data.getMinutes();
        var seg = data.getSeconds();
    
        min = zero(min);
        seg = zero(seg);
    
        var time = Number(`${hour}${min}${seg}`)
    document.getElementById('realTime').textContent = `${hour}:${min}:${seg}`;
    
    for(var i = 0; i < userAlarmsFormatado.length; i++){
        calculate = userAlarmsFormatado[i] - timeBeforeValue
        console.log(calculate)

        if(calculate == time){
            const audio = document.getElementById('audio')
            audio.play() 
         }
    }  
}, 1000)

//function para adionar o 0 nos segundos e minutos abaixo de 10
function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}

//function para adicionar os elementos do check box no array e mostrar ao usuário 
const audio = document.getElementById('audio')
const button = document.getElementById('stop')
button.addEventListener('click', function(){
    audio.pause()
    audio.currentTime = 0;
})    


