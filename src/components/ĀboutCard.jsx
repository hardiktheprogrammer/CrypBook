import React from "react"
import "../sass/components/_aboutcard.scss"
import { Link } from "react-router-dom"
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub,MdAlternateEmail } from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";



export const AboutCard = (props) => {
  return (
    <>
      <div className='about-card'>
        <div className='about-name'>{props.role}</div>
        <div className='about-content'>
          <img src={props.img} alt='...' />
          <div className='about-name2'>
            <h1>{props.name}</h1>
          </div>
          <div className='about-portfolio'>
            <a href={props.portfolio} target='_blank'>
            Portfolio
            </a>
          </div>

          <div className='about-socials'>
            <a href={props.linkedin} className='twitter'>
             <AiFillLinkedin/>
            </a>
            <a href={props.github} className='twitter'>
             <AiFillGithub/>
             
            </a>
            
            <a href={props.email} className='twitter'>
             <AiOutlineMail/>
            </a>
            <a href={props.twitter} className='twitter'>
            <RiTwitterFill/>
            </a>
            <Link to={`/search/${props.dashboard}`} className='twitter'>
              <i className='fa fa-dashboard'></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}