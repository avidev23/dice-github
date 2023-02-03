import React from 'react'
import './Cards.css'
import { GoRepo } from "react-icons/go";
import { RiStarSLine } from "react-icons/ri";

function Cards({
    name,
    full_name,
    stargazers_count,
    owner,description,language,watchers_count
    
}) {

  return (
    <div className='card-content'>
        <div className='avatar'>
            <img className='avatar-img' src={owner.avatar_url} alt='avatar' />
        </div>
        
        <div className='list-content'>
            
        <ul className='list'>
            <div className='repo_name'>
                <GoRepo /> 
            <a href='/' className='icon'>{full_name}</a>
            </div>

            <li className='stars'>
            <RiStarSLine/>  {stargazers_count}
            </li>

            <li className='desc'>
                {description}
            </li>

            <li className='desc'>
                {watchers_count}
            </li>
            watchers_count
            <li className='lan'>
                {language}
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Cards