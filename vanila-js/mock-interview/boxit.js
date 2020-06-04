//Initialize box width
const words = process.argv.slice(2)

let maxLength = 0;
for(let i = 0; i < words.length; i++) {
    if(words[i].length > maxLength) {
        maxLength = words[i].length;
    }
}

// drawLine 
function drawLine(length) {
    let line = '';
    for(let i = 0; i < length; i++) {
        line += '-'
    }
    return line;
}

// console.log(drawLine(maxLength));


// create top border
function topBorder(length) {
    const topLeftBar = "┌";
    const topRightBar = "┐";

    const topBar = topLeftBar + drawLine(length) + topRightBar;
    return topBar;
}
// console.log(topBorder(maxLength));

// create MiddleBorder

function middleBorder(length) {
    const middleLeftBar = "├";
    const middleRightBar = "┤";

    const middleBar = middleLeftBar + drawLine(length) + middleRightBar;
    return middleBar;
}

// console.log(middleBorder(maxLength));

function bottomBorder(length) {
    const bottomLeftBar = "└";
    const bottomRightBar = "┘";

    bottomBar = bottomLeftBar + drawLine(length) + bottomRightBar;
    return bottomBar
}
// console.log(bottomBorder(maxLength));

// bar around word
function  barAround(word) {
    const bar = "|";

    const requiredSpace = maxLength - word.length;
    const space = ' ';

    const modifiedWordArr = [word]

    for(let i = 0; i < requiredSpace; i++) {
        modifiedWordArr.push(space)
    }

    const wordWithBar = bar + modifiedWordArr.join('') + bar;
    return wordWithBar;
}
// console.log(barAround('test'));

// assemble box
function assembleBox(words) {
    const length = words.length
    let wordInBox = '';
    // No input
    if(length <= 0) {
        const emptyBox = `${topBorder(0)}\n${bottomBorder(0)}`
        return emptyBox; 
    }

    // each words
    for(let i = 0; i<length; i++) {
        if(length === 1) {
            const word = words[0];
            const oneInputBox = `${topBorder(maxLength)}\n${barAround(word)}\n${bottomBorder(maxLength)}\n`
            return oneInputBox;
        } 
        if(i === 0) {
            wordInBox += `${topBorder(maxLength)}\n${barAround(words[i])}\n${middleBorder(maxLength)}\n`;
        } else if(i > 0 && i < length -1) {
            wordInBox +=`${barAround(words[i])}\n${middleBorder(maxLength)}\n`;
        } else if(i === length -1) {
            wordInBox += `${barAround(words[i])}\n${bottomBorder(maxLength)}`
        }
    }
    return wordInBox;
}

console.log(assembleBox(words));
