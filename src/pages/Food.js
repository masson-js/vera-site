import { React, useEffect } from 'react'
import { Navbar } from '../components/navbar'
import { Modal } from 'bootstrap'


import img1 from '../img/food/food00001.jpg'
import img2 from '../img/food/food00002.jpg'
import img3 from '../img/food/food00003.jpg'
import img4 from '../img/food/food00004.jpg'
import img5 from '../img/food/food00005.jpg'
import img7 from '../img/food/food00007.jpg'
import img8 from '../img/food/food00008.jpg'
import img9 from '../img/food/food00009.jpg'
import img11 from '../img/food/food00011.jpg'
import img12 from '../img/food/food00012.jpg'
import img16 from '../img/food/food00016.jpg'
import img17 from '../img/food/food00017.jpg'
import img18 from '../img/food/food00018.jpg'
import img21 from '../img/food/food00021.jpg'
import img24 from '../img/food/food00024.jpg'
import img25 from '../img/food/food00025.jpg'
import img26 from '../img/food/food00026.jpg'
import img27 from '../img/food/food00027.jpg'
import img28 from '../img/food/food00028.jpg'
import img29 from '../img/food/food00029.jpg'
import img30 from '../img/food/food00030.jpg'
import img31 from '../img/food/food00031.jpg'
import img32 from '../img/food/food00032.jpg'
import img33 from '../img/food/food00033.jpg'
import img34 from '../img/food/food00034.jpg'





export function Food() {
  
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
            <img src={img5} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img9} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img7} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img2} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img18} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img26} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img21} alt="food img" loading="lazy" lass="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img8} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img11} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img12} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>  
          <div class='col'>
            <img src={img16} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img17} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img24} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img25} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img32} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img27} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img34} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img28} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img29} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img30} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img31} alt="food img" loading="lazy" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img33} alt="food img" loading="lazy" class="img gallery-item"/>
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

