import React, {useState} from 'react'
import './Card.css'
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Card = () => {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')

    const listVeto = useSelector(state=>state.ReducerRegister.listVeto)

    const params = useParams()

    const viterinaire = listVeto.find(el=>el.Nom===params.nom)


  return (
    // <div className='Card'>
    // <div className='upper-container'>
    //    <div className='image-container'>
    //        <img src='' alt='' height='100px' width='100px'/>
    //        </div> 
    // </div>
    <div className='lower-container'>
        <h3>{viterinaire.Nom}</h3>
        <h4>{viterinaire.Prenom}</h4>
       
        
    </div>
// </div>
  )
}

export default Card
