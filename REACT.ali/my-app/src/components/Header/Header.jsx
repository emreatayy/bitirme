

import React from "react";
import{ Container } from 'reactstrap';
import './header.css';
 
const navLinks=[
    {

    display:'Anasayfa',
    url:'#'
    },
    {
        display:'Hakkımızda',
        url:'#'
        },
        {

            display:'Kurslar',
            url:'#'
            },
            {

                display:'Sayfalar',
                url:'#'
                },
                {

                    display:'Blog',
                    url:'#'
                    },
]

const Header=()=>{
    return (
    <header className="header">
        <Container>
            <div className="navigation d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h2 className="d-flex align-items-center"> 
                        <i class="ri-school-line"></i>FıratDemmy
                    </h2>
                </div>
                <div className="nav">
                    <div className="mav__menu">
                        <ul className="nav__list">
                            {
                                navLinks.map((item,index)=>(
                                <li key={index} className="nav__item">
                                <a href={item.url}>{item.display}</a>
                                </li>
                                ))
                                
                            }

                        </ul>
                    </div>
                    <div className="nav__right">
                        <p className="mb-0 d-flex align-items-center gap-3"> 
                            <i class="ri-phone-fill"></i>0412 251 3865</p>

                    </div>
                </div>
            </div>
        </Container>
    </header>
    )
};
 
export default Header;