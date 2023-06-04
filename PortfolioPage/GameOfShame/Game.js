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
var gameQuestion = $.csv.toObjects(csv)
var HasGameStarted = false

const btnStart = document.querySelector('#start')

const btnNext = document.querySelector('#Next')
const btnRestart = document.querySelector('#Restart')


////////////////////////////////////////////////////////////////////
//////////////// Variable 
////////////////////////////////////////////////////////////////////

// get id checkbox jeux 1 ...
// get 
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
        GameQuestion.push(columns[0]);
        Game.push(columns[1]);
    })
}

////////////////////////////////////////////////////////////////////
//////////////// Question 
////////////////////////////////////////////////////////////////////
function init(){
    print('hello')
}
////////////////////////////////////////////////////////////////////
//////////////// Button action 
////////////////////////////////////////////////////////////////////
function NextQuestion(){
    console.log("new question")
    if (HasGameStarted){
        console.log("the question are here")
        document.getElementById("Question").innerHTML = "Hello World";
    }
}


function StartGame(){
    console.log("The party is starting")
    HasGameStarted = true;
    getData()
}

function Restart(){
    console.log("restart")

    document.getElementById("myCheck").checked = false;
}

