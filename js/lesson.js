const tabsContentCards = document.querySelectorAll('.tab_content_block')
const tabsItems = document.querySelectorAll('.tab_content_item')
const tabsItemParent = document.querySelectorAll('.tab_content_items')

let currentIndex = 0;


const hideContentCards = () => {
    tabsContentCards.forEach((tabsContentCard) => {
        tabsContentCard.style.display = 'none'
    })
    tabsItems.forEach((tabItem => {
        tabItem.classList.remove('tab_content_item_active')
    }))
}

const showTabs = (indexEL = 0) => {
    tabsContentCards[indexEL].style.display = 'block'
    tabsItems[indexEL].classList.add('tab_content_item_active')
}

hideContentCards()
showTabs()

const showNextSlide = () => {
    hideContentCards();
    currentIndex = (currentIndex + 1) % tabsContentCards.length;
    showTabs(currentIndex);
};

const sliderInterval = setInterval(showNextSlide, 3000);

tabsItemParent.forEach((parent) => {
    parent.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab_content_item')) {
            tabsItems.forEach((tabItem, tabItemIndex) => {
                if (e.target === tabItem) {
                    hideContentCards();
                    showTabs(tabItemIndex);
                }
            });
        }
        clearInterval(sliderInterval);
    });
});


//part 2
document.getElementById('btn-get').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'block';
});

document.querySelector('.modal_close').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
});

window.addEventListener('scroll', showModalOnScrollOnce);

function showModalOnScrollOnce() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.querySelector('.modal').style.display = 'block';

        window.removeEventListener('scroll', showModalOnScrollOnce);
    }
}

document.querySelector('.modal_close').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
});

setTimeout(function() {
    document.querySelector('.modal').style.display = 'block';
}, 10000);

document.querySelector('.modal_close').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
});


// homework-6

const card = document.querySelector(".card");
const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");
const url = 'https://jsonplaceholder.typicode.com/todos/';

const switcher = async (count) => {
    const response = await fetch(url + `${count}`);
    const text = await response.json();
    card.innerHTML = `
    <p>${text.title}</p>
    <p style = 'color: ${text.completed ? 'green' : 'red'}'>${text.completed}</p>
    <p>${text.id}</p>    
    `

    btnNext.onclick = () => {
        count++;
        if (count > 200) {
            count = 1;
        }
        switcher(count);

    };

    btnPrev.onclick = () => {
        count--;
        if (count < 1) {
            count = 200;
        }
        switcher(count);

    };

};

switcher(1);
