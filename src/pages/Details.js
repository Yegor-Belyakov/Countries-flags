import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { Info } from '../components/Info'
import { searchByCountry } from '../config'

export const Details = () => {
  const {name} = useParams()
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  const goTo = () => navigate((`/country/${name}`))
  const [country, setCountry] = useState(null)
  
  useEffect(() => {
      axios.get(searchByCountry(name)).then(
        ({data}) => setCountry(data[0])
      )
  }, [name])
  return (
   
    <div>
       <Button onClick={goBack}>
         <IoArrowBack />Back
      </Button>
      {
        country && <Info navigate={navigate} {...country}/>
      }
      
    </div>
  )
}
