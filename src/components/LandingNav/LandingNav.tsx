import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { RiCloseLine, RiMenu3Line } from "react-icons/ri"
import { BiDownload } from "react-icons/bi"
// import { ConnectButton, Theme } from '@rainbow-me/rainbowkit';
import { useNavigate } from 'react-router-dom'
import RainbowButton from '../ConnectButton/ConnectButton'
import './LandingNav.scss'

type LandingNavPropsType = {
    winWidth: number,
    active: number,
}
const LandingNav = (props: LandingNavPropsType) => {
    const [initialLink, setInitialLink] = useState(props.active)
    const [isMenuOpen, setisMenuOpen] = useState(false)
    const headerRef = useRef<HTMLInputElement>(null)

    const navigate = useNavigate();

    const links = [
        {
            id: 0,
            name: "Refuel",
            link: "/refuel"
        },
        {
            id: 1,
            name: "Product",
            link: "/"
        },
        {
            id: 2,
            name: "FAQs",
            link: "/" // change this when making FAQ component
        },
    ]
    useEffect(() => {
        window.onscroll = (() => {
            if (window.pageYOffset >= 66) {
                headerRef.current?.classList.add("sticky")
            } else {
                headerRef.current?.classList.remove("sticky");
            }
        })
    }, [initialLink, isMenuOpen])

    function switchComponent(id: any) {
        navigate(links[id].link);
    }

    function childOfNavbar() {
        return (
            links.map((item) => (
                <Link to={`${item.link}`} key={item.name} className='lp__navbar-navlink' >
                    <motion.div className={`item ${initialLink === item.id ? "active" : ""}`} onClick={() => { setInitialLink(item.id); switchComponent(item.id);}} >
                        <h3>{item.name}</h3>
                    </motion.div>
                </Link>
            ))
        )
    }

  return (
    <div className="lp__navbar" ref={headerRef}>
        <div className="lp__navbar-logo-div" onClick={()=>window.scrollTo(({top:0}))}>
            <img src='/assets/images/logo/extent-logo.png' className='lp__navbar-logo-img' alt='extent-logo' />
            <h1>
                Extent
            </h1>
        </div>
        {
            props.winWidth < 820 ? (
                <div className="lp__navbar-menu">
                    {
                        isMenuOpen ? <RiCloseLine size={30} onClick={() => setisMenuOpen(false)} /> : <RiMenu3Line size={30} onClick={() => setisMenuOpen(true)} />
                    }
                </div>
            ): null
        }
        {props.winWidth < 820 ? isMenuOpen && (
            <motion.div className="lp__navbar-item" initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
                {childOfNavbar()}
                <motion.div className="mobile__hire" whileTap={{ scale: 0.95 }} onClick={()=>{}}>
                    <BiDownload size={20} />
                    <h3>Connect Wallet</h3>
                </motion.div>
            </motion.div>
        ) : (
            <div className="lp__navbar-item">
                {childOfNavbar()}
            </div>
        )}
        <motion.div whileTap={{ scale: 0.95 }} transition={{ duration: .2 }} onClick={()=>{}}>
            <RainbowButton />
        </motion.div>
    </div>
  )
}

export default LandingNav