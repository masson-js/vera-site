import { React, useEffect } from 'react'
import { Navbar } from '../components/navbar'
import { Modal } from 'bootstrap'


import img1 from '../img/cosmetics/cosmetics00001.jpg'
import img2 from '../img/cosmetics/cosmetics00002.jpg'
import img3 from '../img/cosmetics/cosmetics00003.jpg'
import img4 from '../img/cosmetics/cosmetics00004.jpg'
import img5 from '../img/cosmetics/cosmetics00005.jpg'
import img7 from '../img/cosmetics/cosmetics00007.jpg'
import img8 from '../img/cosmetics/cosmetics00008.jpg'
import img9 from '../img/cosmetics/cosmetics00009.jpg'
import img11 from '../img/cosmetics/cosmetics00011.jpg'
import img12 from '../img/cosmetics/cosmetics00012.jpg'
import img13 from '../img/cosmetics/cosmetics00013.jpg'
import img14 from '../img/cosmetics/cosmetics00014.jpg'
import img15 from '../img/cosmetics/cosmetics00015.jpg'
import img16 from '../img/cosmetics/cosmetics00016.jpg'
import img17 from '../img/cosmetics/cosmetics00017.jpg'





export function Cosmetics() {
  
  const handler = function(e) {
      if(e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src")
        document.querySelector(".modal-img").src = src;
        const myModal = new Modal(document.getElementById('gallery-modal'))
        myModal.show()
      }
    }
  useEffect(() => {
    document.addEventListener("click", handler)
    return () => {
      document.removeEventListener("click", handler)
    }
  })

  return (
    <>
    <div>
      <Navbar/>
      <section class="gallery min-vh-100">
      <div class="container-lg ">  
        <div class="flex d-flex flex-wrap row gy-4 row-cols-1 row-cols-sm-5 row-col-md-5 row-col-lg-5">
          <div class='col'>
            <img src={img1} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img3} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img4} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img7} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img12} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img5} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img9} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img2} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img8} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img11} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img13} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img14} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img15} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img16} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img17} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
        </div>
      </div>
      </section>
    </div>
<div class="modal fade" id="gallery-modal" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-dismiss="modal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <img src={img3} alt="modal img" class="modal-img"/>
    </div>
  </div>
</div>
  </>
  )
}