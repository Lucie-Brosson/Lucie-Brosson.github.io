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

var GameSelected = []
var Questions = []  

var randomQuestion = null

const btnStart = document.querySelector('#start')
const btnNext = document.querySelector('#Next')
const btnRestart = document.querySelector('#Restart')

var checkBoxRetreiver = document.getElementById("#HolderOfTheGame")
var checkBoxes = checkBoxRetreiver.querySelectorAll('input[type=checkbox]')

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
    checkBoxes.forEach(item=>{
        if (item.checked){
            console.log(item.value)
            GameSelected.push(item.value)
        }
    })
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
    getData()
}

function Restart(){
    console.log("restart")

    document.getElementById("myCheck").checked = false;
}

