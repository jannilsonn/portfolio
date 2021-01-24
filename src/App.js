import React from 'react'
import './css/Menu.css'
import './css/User.css'
import Janilson from './images/Janilson.png'
import Profile from './components/Profile'
import Skill from './components/Skill'
import Experience from './components/Experience'
import CoreBusiness from './components/CoreBusiness'
import Footer from './components/Footer'

export default function App() {
    const [focus, setFocus] = React.useState("profile")
    const [key, setKey] = React.useState(0)
    const [direction, setDirection] = React.useState('left')
    const [fixed, setFixed] = React.useState('')
    const [touchx, setTouchX] = React.useState(0)
    const [touchy, setTouchY] = React.useState(0)

    const handleBodyScroll = document.body.onscroll = () => {
        if(window.scrollY > 70) {
            setFixed('menu-fixed')
        } else {
            setFixed('')
        }
    }

    const setScroll = (prop) => {
        setFocus(prop)
        document.querySelectorAll('.menu-item').forEach((item, k) => {
            if(prop === item.id) {
                if(key > k) {
                    setDirection('left')
                } else {
                    setDirection('right')
                }
                item.parentNode.scrollLeft = item.offsetLeft - 80
                setKey(k)
            }
        })
        window.scrollTo( 0, 0 )
    }

    const handleItemClick  = (prop) => (event) => {
        setScroll(prop)
    }

    const handleItemEnter = (prop) => (event) => {
        if(focus !== prop) { event.target.classList.add('focused') }
    }

    const  handleItemLeave = (prop) => (event) => {
        if(focus !== prop) { event.target.classList.remove('focused') }
    }

    const handleContentStart = (prop) => (event) => {
        setTouchX(event.changedTouches[0].screenX)
        setTouchY(event.changedTouches[0].screenY)
    }
    const handleContentEnd = (prop) => (event) => {
        let ScrollX = touchx - event.changedTouches[0].screenX
        let ScrollY = touchy - event.changedTouches[0].screenY

        if( Math.max(Math.abs( ScrollX ), Math.abs( ScrollY )) > 40 && Math.abs( ScrollX ) > Math.abs( ScrollY ) ) {
            if(ScrollX < 0) {
                document.querySelectorAll('.menu-item').forEach((item, k) => {
                    if(item.classList[1]) {
                        if(item.previousSibling) {
                            setScroll(item.previousSibling.id)
                        } else {
                            setScroll('corebusiness')
                        }
                    }
                })
            } else {
                document.querySelectorAll('.menu-item').forEach((item, k) => {
                    if(item.classList[1]) {
                        if(item.nextSibling) {
                            setScroll(item.nextSibling.id)
                        } else {
                            setScroll('profile')
                        }
                    }
                })
            }
        }
    }

    return (
        <div>
            <header>
                <div className="user">
                    <div className="img-profile">
                        <img src={Janilson} alt="Janilson"/>
                    </div>

                    <h2 className="username">
                        Janilson Costa Silva
                        <div className="profission">
                            Web Developer
                        </div>
                    </h2>
                </div>

                <ul className={fixed ? "menu menu-fixed" : "menu" }>
                    <li id="profile" className={focus === "profile" ? "menu-item focused" : "menu-item" }
                    onClick={handleItemClick('profile')}
                    onMouseEnter={handleItemEnter('profile')}
                    onMouseLeave={handleItemLeave('profile')}>
                        Perfil</li>

                    <li id="skill" className={focus === "skill" ? "menu-item focused" : "menu-item" }
                    onClick={handleItemClick('skill')}
                    onMouseEnter={handleItemEnter('skill')}
                    onMouseLeave={handleItemLeave('skill')}>
                        Skill</li>

                    <li id="experience" className={focus === "experience" ? "menu-item focused" : "menu-item" }
                    onClick={handleItemClick('experience')}
                    onMouseEnter={handleItemEnter('experience')}
                    onMouseLeave={handleItemLeave('experience')}>
                        Experiência</li>
                        
                    <li id="corebusiness" className={focus === "corebusiness" ? "menu-item focused" : "menu-item" }
                    onClick={handleItemClick('corebusiness')}
                    onMouseEnter={handleItemEnter('corebusiness')}
                    onMouseLeave={handleItemLeave('corebusiness')}>
                        Core Business</li>
                </ul>
            </header>

            <article className="content"
            onTouchStart={handleContentStart()}
            onTouchEnd={handleContentEnd()}>
                {focus === 'profile' ? <Profile direction={direction}/> : '' }
                {focus === 'skill' ? <Skill direction={direction}/> : '' }
                {focus === 'experience' ? <Experience direction={direction}/> : '' }
                {focus === 'corebusiness' ? <CoreBusiness direction={direction}/> : '' }
            </article>

            {fixed ?
            <div className="return-top" onClick={() => window.scrollTo( 0, 0 )}>
                <span></span></div> : "" }

            <Footer/>
        </div>
    )
}