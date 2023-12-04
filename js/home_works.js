// homework 1
const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector('#gmail_button');
const gmailSpan = document.querySelector('#gmail_result');

const regExp = /^[a-zA-Z0-9_.+-]+@gmail\.com$/

gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)) {
        gmailSpan.innerHTML = 'Complete'
        gmailSpan.style.color = 'Green'
    } else {
        gmailSpan.innerHTML = 'Error'
        gmailSpan.style.color ='Red' 
    }
})


const childBlock = document.querySelector('.child_block');
let leftBox = 0;
let topBox = 0;
let animationInterval = 16;

const boxFunction = () => {
    setTimeout(() => {
        if (leftBox < 449) {
            childBlock.style.left = `${leftBox}px`;
            leftBox++;
            boxFunction();
        } else {
            boxDownFunction();
        }
    }, animationInterval);
};

const boxDownFunction = () => {
    setTimeout(() => {
        if (topBox < 449) {
            childBlock.style.top = `${topBox}px`;
            topBox++;
            boxDownFunction();
        } else {
            boxRightFunction();
        }
    }, animationInterval);
};

const boxRightFunction = () => {
    setTimeout(() => {
        if (leftBox > 0) {
            childBlock.style.left = `${leftBox}px`;
            leftBox--;
            boxRightFunction();
        } else {
            boxUpFunction();
        }
    }, animationInterval);
};

const boxUpFunction = () => {
    setTimeout(() => {
        if (topBox > 0) {
            childBlock.style.top = `${topBox}px`;
            topBox--;
            boxUpFunction();
        } else {
        }
    }, animationInterval);
};

boxFunction();


// homework 2
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;

const minutesElement = document.getElementById("minutesS");
const secondsElement = document.getElementById("secondsS");
const millisecondsElement = document.getElementById("ml-secondsS");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function startTimer() {
    timer = setInterval(updateTimer, 10);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

function updateTimer() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    updateDisplay();
}

function updateDisplay() {
    minutesElement.textContent = padNumber(minutes);
    secondsElement.textContent = padNumber(seconds);
    millisecondsElement.textContent = padNumber(milliseconds);
}

function padNumber(number) {
    return number.toString().padStart(2, "0");
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// homework-3
// const tabsContentCards = document.querySelectorAll('.tab_content_block')
// const tabsItems = document.querySelectorAll('.tab_content_item')
// const tabsItemParent = document.querySelectorAll('.tab_content_items')
//
// const hideContentCards = () => {
//     tabsContentCards.forEach((tabsContentCard) => {
//         tabsContentCard.style.display = 'none'
//     })
//     tabsItems.forEach((tabsItem => {
//         tabsItem.classList.remove('tab_content_item_active')
//     }))
// }
//
// const showTabs = (indexEL = 0) => {
//     tabsContentCards[indexEL].style.display = 'block'
//     tabItems[indexEL].classList.add('tab_content_item_active')
// }
//
// hideContentCards()
// showTabs()
//
// tabsItemParent.onclick = (e) => {
//     if (e.target.classList.contains('tab_content_item')) {
//         tabsItems.forEach((tabItem, tabItemIndex) => {
//             if (e.target === tabItem) {
//                 hideContentCards()
//                 showTabs(tabItemIndex)
//             }
//         })
//     }
// }