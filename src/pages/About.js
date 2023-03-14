import { React } from 'react'
import { Navbar } from '../components/navbar'
import img_v from '../img/about_img.jpg'
import unilever from '../img/logos/png-unilever.png'
import vogue from '../img/logos/vogue.png'
import ciroc from '../img/logos/ciroc.png'
import naked from '../img/logos/naked.jpg'
import reckitt from '../img/logos/reckitt.png'
import lisabon from '../img/logos/lisabon.png'

import shutterstock from '../img/logos/shutterstock.png'
import offset from '../img/logos/offset.png'
import westend from '../img/logos/westend.png'
import adobe from '../img/logos/adobe.png'



import { Link } from 'react-router-dom'

export function About() {
  return (
  
    <div className="about__background">
      <Navbar/>
      <div class=" container container-sm about-inside-container container-lg p-2 c-3 ">
        <div class="bio__container">
         <img src={img_v} alt="bio__img" class="bio__img"/>
          <p class="text-center bio__text">I’m a professional photographer specializing in still life and lifestyle photography. My photos are creative and visually appealing, with a strong focus on colour and composition, simplicity and elegance. As usual, I use natural light to create mood and atmosphere in images.</p>
          <hr/>
          <div class="grid text-center">
              <img src={unilever} alt="uni__img" loading="lazy" class="bio__logo g-col-6 g-col-md-4"/>
              <img src={vogue} alt="vogue__img" loading="lazy" class="bio__logo g-col-6 g-col-md-4"/>
              <img src={ciroc} alt="ciroc__img" loading="lazy" class="bio__logo g-col-6 g-col-md-4"/>
              <img src={naked} alt="naked__img" loading="lazy" class="bio__logo g-col-6 g-col-md-4"/>
              <img src={reckitt} alt="reckitt__img" loading="lazy" class="bio__logo g-col-6 g-col-md-4"/>
              <img src={lisabon} alt="lisabon__img" loading="lazy" class="bio__logo g-col-6 g-col-md-4"/>
          </div>
          <hr/>
          <div class="grid text-center">
            <Link target="_blank" to="https://www.shutterstock.com/g/SimonVera"><img src={shutterstock} loading="lazy" alt="shutterstock__img" class="bio__logo"/></Link>
            <Link target="_blank" to="https://www.shutterstock.com/g/vira+simon-nikulina/sets" ><img src={offset} loading="lazy" alt="shutterstockoffset__img" class="bio__logo"/></Link>
            <Link target="_blank" to="https://www.westend61.de/en/photographer/view/Vira+Simon" ><img src={westend} loading="lazy" alt="westend__img" class="bio__logo"/></Link>
            <Link target="_blank" to="https://www.westend61.de/en/photographer/view/Vira+Simon"><img src={adobe} loading="lazy" alt="adobe__img" class="bio__logo"/></Link>

          </div>
        </div>
      </div>
  
    </div>
    )
} 