import React from 'react'
import './UserProfileCard.css'
import profileIcon from '../Assets/mahito.jpg';
export const UserProfileCard = () => {
  return (
    <div className='upc'>
      <div className="gradiant">

      </div>
      <div className="profile-down">
        <img src={profileIcon} alt="" />
        <div className="profile-title">
        Mahito 
        </div>
        <div className="profile-description">
        is one of the primary antagonists of the Jujutsu Kaisen series. He is an unregistered special grade cursed spirit allied with Pseudo-Geto. He is also the leader of his own group, consisting of Jogo, Hanami, and Dagon. His group's ultimate goal is the eradication of humanity and ultimately replacing the population with cursed spirits.
        </div>
        <div className="profile-button"><a href="mailto:user@email.com">Contact Me</a>
          
        </div>
      </div>

    </div>
  )
}
