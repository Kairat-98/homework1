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
const boxFuction = () => {
  
    setTimeout(() => {
        if (leftBox < 449) {
            childBlock.style.left = `${leftBox}px`;
            leftBox++
            boxFuction()
        } 
    },2)
    
}

boxFuction()