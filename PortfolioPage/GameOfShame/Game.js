// quand le jeux start, on prends les catégories sélecté et on les ajoute aux []
// le jeux sélectionne une question en random 
// la question est affiché ainsi que la catégorie et la possible conséquence
// la conséquences est traité à côté avec une sélection en dose possible 
//au next une nouvelle question est sélectionner en enlevant la précédente de la liste de question possible 
// lorsque la liste est vide le jeux est terminé 

// le jeux peut être reset avec de nouvelle question 

////////////////////////////////////////////////////////////////////
//////////////// Variable 
////////////////////////////////////////////////////////////////////
console.log('js linked')
var HasGameStarted = false

var GameName = ["Jeux1","Jeux2","beep"]
var GameSelected = []
var Questions = []  

var randomQuestion = null

const btnStart = document.querySelector('#start')
const btnNext = document.querySelector('#Next')
const btnRestart = document.querySelector('#Restart')

var checkBoxesGame = document.querySelectorAll('input[name="Game"]:checked')
////////////////////////////////////////////////////////////////////
//////////////// Get CVS DATA
////////////////////////////////////////////////////////////////////

async function getData(){
    console.log('get data is working');

    const response = await fetch('./Game.csv');
    const data = await response.text();

    console.log('get data is working');
    const rows = data.split('\n');

    rows.forEach(item => {
        //if columns[1] == id game checked 
        const columns = item.split(',');
        if (columns[1] == GameSelected){
            console.log(columns[1])
            Questions.push()
        }
        
    })
}

////////////////////////////////////////////////////////////////////
//////////////// Question 
////////////////////////////////////////////////////////////////////
function init(){
    print('hello')
}

async function getCheckBoxValue(){
    console.log('working')
    for (var i = 0; i<GameName.length; i++){
        console.log(i)
        console.log(document.getElementById(GameName[i]).checked)
        if (document.getElementById(GameName[i]).checked == true){
            GameSelected.push(GameName[i])
        }
    }
    return GameSelected
    
}
////////////////////////////////////////////////////////////////////
//////////////// Button action 
////////////////////////////////////////////////////////////////////
function NextQuestion(){
    console.log("new question")
    if (HasGameStarted && Questions.length > 0){
        randomQuestion = Math.floor(Math.random() * Questions.length)
        console.log("the question are here")
        document.getElementById("Question").innerHTML = Questions[randomQuestion];
        delete Questions[randomQuestion]
    }
    if (Questions.length == 0){
        document.getElementById("Question").innerHTML = "The Game has ended, start again with a new set of questions";       
    }
}


function StartGame(){
    console.log("The party is starting")
    HasGameStarted = true;

    getCheckBoxValue()

    console.log(GameSelected)
    getData()
}

function Restart(){
    console.log("restart")

    document.getElementById("myCheck").checked = false;
}

