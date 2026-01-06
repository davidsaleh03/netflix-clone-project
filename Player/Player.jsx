import React, { useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Player = () => {

const navigate = useNavigate()
const {id} = useParams()

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}}/>
      <iframe width='90%' height='90%' 
      src={`https://www.youtube.com/embed/${id}`}
      title='trailer' frameBorder='0' allowFullScreen>
      </iframe>

    </div>
  )
}

export default Player