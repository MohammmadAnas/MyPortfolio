import React from 'react'
import LeetCode from '../../assets/leetcode.svg'

const HeaderSocials = () => {
    
    return (
        
        <div className="home__socials">


            {/* <a href="https://www.behance.com" className="home__social-link" target="_blank">
                <i class="fa-brands fa-behance"></i>
            </a> */}

            <a href="https://github.com/MohammmadAnas" className="home__social-link" target="_blank">
                <i class="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/mohammad-anas-2a5747243/" className="home__social-link" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://leetcode.com/u/mohammad_anas004/"><img src={LeetCode} alt=""
                className="logo home__social-link" /></a>

            <a href="mailto:mohdanasmohd@gmail.com" className="home__social-link" target="_blank">
            <i class="fa-regular fa-envelope"></i>
            </a>

        </div>
    )
}

export default HeaderSocials
