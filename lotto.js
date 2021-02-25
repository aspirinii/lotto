var list = [];
var possibility = [];
var displayList = [1, 2, 3, 4, 5, 6];
for (var i = 1; i <= 45; i++) {
    list.push(i);
}

for (var i = 1; i <= 45; i++) {
    possibility.push(1);
}

for (var i = 0; i < displayList.length; i++) {
    var res = chance.weighted(list, possibility);
    displayList[i] = res;
}

function generateNumber() {
    for (var i = 0; i < displayList.length; i++) {
        var res = chance.weighted(list, possibility);
        displayList[i] = res;
    }
    checkSameNum();
    sortingNum();
}

function checkSameNum() {
    let findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index); //filter check every item and index
    var check = false;
    check = findDuplicates(displayList).length;
    console.log(findDuplicates(displayList)); // All duplicates
    console.log([...new Set(findDuplicates(displayList))]); // Unique duplicates
    if (check) {
        console.log('redice');

        generateNumber();
    } else {
        console.log('done');
    }
}

function sortingNum() {
    displayList.sort(function (a, b) {
        return a - b;
    });
}
function applyBallColor(res, i) {
    switch (true) {
        case res > 0 && res <= 10:
            document.getElementById('ball' + i).className = 'ball_645 lrg ball1';
            break;
        case res > 10 && res <= 20:
            document.getElementById('ball' + i).className = 'ball_645 lrg ball2';
            break;
        case res > 20 && res <= 30:
            document.getElementById('ball' + i).className = 'ball_645 lrg ball3';
            break;
        case res > 30 && res <= 40:
            document.getElementById('ball' + i).className = 'ball_645 lrg ball4';
            break;
        case res > 40 && res <= 45:
            document.getElementById('ball' + i).className = 'ball_645 lrg ball5';
            break;

        default:
            document.getElementById('ball' + i).className = 'ball_645 lrg ball5';
            console.log('Color Error');
            break;
    }
}

function display() {
    generateNumber();

    for (var i = 0; i < displayList.length; i++) {
        document.getElementById('ball' + i).innerHTML = displayList[i];
        applyBallColor(displayList[i], i);
    }
}