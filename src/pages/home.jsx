import React from 'react'
import Hero from '../Components/hero'
import PetProperties from '../Components/shared/petProperties'
import Connection from '../Components/shared/connection'
import VideoPath from '../Components/videoPath'
import Logos from '../Components/shared/logos'
import ManSection from '../Components/shared/manSection'
import LastView from '../Components/lastView'

export default function Home() {
  return (
  <>
  <Hero/>
  <VideoPath/>
   <Logos/>
  <PetProperties/>
   <ManSection/>
  <Connection/>
  <LastView/>
  </>
 
  )
}
