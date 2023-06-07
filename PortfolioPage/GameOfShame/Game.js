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

var GameName = ["Jeux1","Jeux2","beep","TireGroupe","Rules","Competition","NeverHaveIEver","MostLikely","DoYouKnowMe","Juduku","Debat","TopTen","MidTruth","DeepTruth","HotTruth","WouldYouRather","Base","DareAssis","DareDebour","DareHot"]
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

    const rows = data.split('\n');

    rows.forEach(item => {

        //if columns[1] == id game checked 
        const columns = item.split(',');
        if (columns[1] == GameSelected){
            console.log(columns[1])
            Questions.push(columns[0])
            print(Questions)
        }
        
    })
    console.log(Questions)
    return Questions
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
        //console.log(document.getElementById(GameName[i]).checked)
        if (document.getElementById(GameName[i]).checked == true){
            GameSelected.push(GameName[i])
            Questions.push()
        }
    }
    return GameSelected
    
}
////////////////////////////////////////////////////////////////////
//////////////// Button action 
////////////////////////////////////////////////////////////////////
function NextQuestion(){
    console.log("new question")
    if (HasGameStarted){
        randomQuestion = Math.floor(Math.random() * Questions.length)
        console.log("the question are here")
        console.log(Questions[randomQuestion])
        document.getElementById("Question").innerHTML = Questions[randomQuestion];
        delete Questions[randomQuestion]
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

