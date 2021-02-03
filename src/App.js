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
    const [fixed, setFixed] = React.useState('')

    window.scrollTo( 0, 0 )
    document.body.onscroll = () => (window.scrollY > 70) ? setFixed('menu-fixed') : setFixed('')

    const [item, setItem] = React.useState({
        profile: {
            focus: 'focused',
            direction: 'left',
            display: 'block'
        },
        skill: {
            focus: '',
            direction: '',
            display: 'none'
        },
        experience: {
            focus: '',
            direction: '',
            display: 'none'
        },
        corebusiness: {
            focus: '',
            direction: '',
            display: 'none'
        },
    })

    const updatedValue = {}

    const [key, setKey] = React.useState(0)

    const setScroll = (prop) => {
        for (const k in item) {
            if (k == prop) {
                updatedValue[k] = {
                    focus: 'focused',
                    direction: 'left',
                    display: 'block'
                }
            } else {
                updatedValue[k] = {
                    focus: '',
                    direction: '',
                    display: 'none'
                }
            }
        }
        document.querySelectorAll('.menu-item').forEach((i, k) => {
            if (prop == i.id) {
                (key > k) ? updatedValue[prop].direction = 'left' : updatedValue[prop].direction = 'right'
                i.parentNode.scrollLeft = i.offsetLeft - 80
                setKey(k)
            }
        })
        window.scrollTo( 0, 0 )
        setItem(updatedValue)
    }

    const handleItemEnter = (prop) => (event) => (item[prop].display !== 'block') ? event.target.classList.add('focused') : ''

    const  handleItemLeave = (prop) => (event) => (item[prop].display !== 'block') ? event.target.classList.remove('focused') : ''

    const [touchx, setTouchX] = React.useState(0)
    const [touchy, setTouchY] = React.useState(0)

    const handleContentStart = (prop) => (event) => {
        setTouchX(event.changedTouches[0].screenX)
        setTouchY(event.changedTouches[0].screenY)
    }

    const handleContentEnd = (prop) => (event) => {
        let ScrollX = touchx - event.changedTouches[0].screenX
        let ScrollY = touchy - event.changedTouches[0].screenY

        if( Math.max(Math.abs( ScrollX ), Math.abs( ScrollY )) > 40 && Math.abs( ScrollX ) > Math.abs( ScrollY ) ) {
            if(ScrollX < 0) {
                document.querySelectorAll('.menu-item').forEach((i, k) => {
                    if(i.classList[1]) {
                        (i.previousSibling) ? setScroll(i.previousSibling.id) : setScroll('corebusiness')
                    }
                })
            } else {
                document.querySelectorAll('.menu-item').forEach((i, k) => {
                    if(i.classList[1]) {
                        (i.nextSibling) ? setScroll(i.nextSibling.id) : setScroll('profile')
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

                <ul className={"menu "+fixed}>
                    <li id="profile" className={"menu-item "+item.profile.focus}
                    onClick={() => setScroll('profile')}
                    onMouseEnter={handleItemEnter('profile')}
                    onMouseLeave={handleItemLeave('profile')}>
                        Perfil</li>

                    <li id="skill" className={"menu-item "+item.skill.focus}
                    onClick={() => setScroll('skill')}
                    onMouseEnter={handleItemEnter('skill')}
                    onMouseLeave={handleItemLeave('skill')}>
                        Skill </li>

                    <li id="experience" className={"menu-item "+item.experience.focus}
                    onClick={() => setScroll('experience')}
                    onMouseEnter={handleItemEnter('experience')}
                    onMouseLeave={handleItemLeave('experience')}>
                        Experiência</li>
                        
                    <li id="corebusiness" className={"menu-item "+item.corebusiness.focus}
                    onClick={() => setScroll('corebusiness')}
                    onMouseEnter={handleItemEnter('corebusiness')}
                    onMouseLeave={handleItemLeave('corebusiness')}>
                        Core Business</li>
                </ul>
            </header>

            <article className="content"
            onTouchStart={handleContentStart()}
            onTouchEnd={handleContentEnd()}>
                <Profile direction={item.profile.direction} display={item.profile.display}/>
                <Skill direction={item.skill.direction} display={item.skill.display}/>
                <Experience direction={item.experience.direction} display={item.experience.display}/>
                <CoreBusiness direction={item.corebusiness.direction} display={item.corebusiness.display}/>
            </article>

            {fixed ?
            <div className="return-top" onClick={() => window.scrollTo( 0, 0 )}>
                <span></span></div> : "" }

            <Footer/>
        </div>
    )
}