
const body = document.getElementsByTagName("body")
const container = document.getElementsByClassName("container")
const menu = document.getElementsByClassName("menu")
const menuItem = document.getElementsByClassName("menu-item")
const content = document.getElementsByClassName("content")
const boxCard = document.getElementsByClassName("box-card")
const card = document.getElementsByClassName("card")
const cardList = document.getElementsByClassName("card-list")
const cardListItemIMG = document.getElementsByClassName("card-list-item-image")

var setClientWidth = body[0].clientWidth

function setWidth() {
    content[0].style.width = `${setClientWidth}px`
    boxCard[0].style.width = `${setClientWidth * card.length}px`

    for (let i = 0; i < card.length; i++) {
        card[i].style.width = `${setClientWidth}px`
        
        menuItem[i].classList.remove('focused')
        menuItem[i].setAttribute('data-wd', i * setClientWidth)
        menuItem[i].setAttribute('data-action', 'hover')
        menuItem[i].setAttribute('data-counter', i)

        menuItem[i].onmouseenter = function(e) {
            if(menuItem[i].dataset.action == "hover") {
                menuItem[i].classList.add('focused')
            }
        }
        menuItem[i].onmouseout = function(e) {
            if(menuItem[i].dataset.action == "hover") {
                menuItem[i].classList.remove('focused')
            }
        }
    }
    
    menuItem[0].classList.add('focused')
    menuItem[0].setAttribute('data-action', 'focus')
}

setWidth()

let returnTop = document.createElement("div")
returnTop.setAttribute('class', 'return-top')
let arrowUp = document.createElement("span")
returnTop.appendChild(arrowUp)

body[0].onscroll = () => {
    if(window.scrollY > 70) {
        menu[0].classList.add('menu-fixed')
        container[0].after(returnTop)
    } else {
        menu[0].classList.remove('menu-fixed')
        returnTop.remove()
    }
}

returnTop.onclick = () =>   window.scrollTo( 0, 0 )

function animatiomIMG(i, direction) {
    
    for (let index = 0; index < cardList[menuItem[i].dataset.counter].children.length; index++) {
        cardList[menuItem[i].dataset.counter].children[index].children[0].classList.add('animation-image-'+direction)
        setTimeout(() => {
            cardList[menuItem[i].dataset.counter].children[index].children[0].classList.remove('animation-image-'+direction)
        }, 1500);
    }
}

animatiomIMG(0, "left")

var dragStartX = dragStartY = touchStartX = touchStartY = lestScroll = nowScroll = 0

function setScroll(myE, setScrollX, setScrollY) {
    if( Math.max(Math.abs( setScrollX ), Math.abs( setScrollY )) > 40 && Math.abs( setScrollX ) > Math.abs( setScrollY ) ) {
        if(setScrollX > 0) {
            if( lestScroll < setClientWidth * (card.length - 1) ){
                lestScroll = myE.scrollLeft += setClientWidth
                //lestScroll = boxCard[0].style.left = `${ (boxCard[0].offsetLeft) += (-setClientWidth)}px`
                focus(null, Math.abs(parseInt(lestScroll)), "right")
            } else {
                lestScroll = myE.scrollLeft = 0
                //lestScroll = boxCard[0].style.left = `${0}px`
                focus(null, Math.abs(parseInt(lestScroll)), "right")
            }

        } else {
            if(lestScroll > 0) {
                lestScroll = myE.scrollLeft += -setClientWidth
                //lestScroll = boxCard[0].style.left = `${ boxCard[0].offsetLeft - (-setClientWidth)}px`
                focus(null, Math.abs(parseInt(lestScroll)), "left")
            } else {
                lestScroll = myE.scrollLeft = setClientWidth * (card.length - 1)
                //lestScroll = boxCard[0].style.left = `${ (-setClientWidth) * (card.length - 1)}px`
                focus(null, Math.abs(parseInt(lestScroll)), "left")
            }
        }
        
    }
}

function focus(myT, lestScroll, direction) {
    window.scrollTo( 0, 0 )
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.remove('focused')
        menuItem[i].dataset.action = "hover"

        if(!myT &&
            parseInt(lestScroll) == parseInt(menuItem[i].dataset.wd)) {
                menuItem[i].classList.add('focused')
                menuItem[i].dataset.action = "focus"
                menu[0].scrollLeft = menuItem[i].offsetLeft - 80
                boxCard[0].style.height = `${cardList[menuItem[i].dataset.counter].offsetHeight + 100}px`
                animatiomIMG(i, direction) 
        }
    }


    if(myT) {
        myT.classList.add('focused')
        myT.dataset.action = "focus"
        menu[0].scrollLeft = myT.offsetLeft - 80
    }

}

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].onclick = function(e) {
        nowScroll = lestScroll
        lestScroll = content[0].scrollLeft = menuItem[i].dataset.wd
        //lestScroll = boxCard[0].style.left = `${-menuItem[i].dataset.wd}px`
        focus(this, Math.abs(parseInt(lestScroll)))
        boxCard[0].style.height = `${cardList[menuItem[i].dataset.counter].offsetHeight + 100}px`

        if(Math.abs(parseInt(nowScroll)) < Math.abs(parseInt(lestScroll))) {
            animatiomIMG(i, "right") 
        } else {
            animatiomIMG(i, "left") 
        }
    }
    
}

if ('ontouchstart' in window) {
    
    content[0].ontouchstart = function(e) {
        touchStartX = e.changedTouches[0].screenX
        touchStartY = e.changedTouches[0].screenY
    }
    
    content[0].ontouchend = function(e) {
        let setScrollX = touchStartX - e.changedTouches[0].screenX
        let setScrollY = touchStartY - e.changedTouches[0].screenY
        setScroll(this, setScrollX, setScrollY)
    }

} else {

    content[0].ondragstart = function(e) {
        dragStartX = e.pageX
        dragStartY = e.pageY
    }
    
    content[0].ondragend = function(e) {
        let setScrollX = dragStartX - e.pageX
        let setScrollY = dragStartY - e.pageY
        setScroll(this, setScrollX, setScrollY)
    }

}

document.body.onload = () => {
   boxCard[0].style.height = `${cardList[0].offsetHeight + 100}px`
}