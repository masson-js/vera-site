import { React, useEffect } from 'react'
import { Navbar } from '../components/navbar'
import { Modal } from 'bootstrap'



import img1 from '../img/lifestyle/lifestyle00021.jpg'
import img2 from '../img/lifestyle/lifestyle00022.jpg'
import img3 from '../img/lifestyle/lifestyle00023.jpg'
import img4 from '../img/lifestyle/lifestyle00024.jpg'
import img5 from '../img/lifestyle/lifestyle00025.jpg'
import img6 from '../img/lifestyle/lifestyle00026.jpg'
import img7 from '../img/lifestyle/lifestyle00027.jpg'
import img8 from '../img/lifestyle/lifestyle00028.jpg'
import img9 from '../img/lifestyle/lifestyle00029.jpg'
import img10 from '../img/lifestyle/lifestyle00030.jpg'
import img11 from '../img/lifestyle/lifestyle00033.jpg'
import img12 from '../img/lifestyle/lifestyle00034.jpg'
import img13 from '../img/lifestyle/lifestyle00035.jpg'
import img14 from '../img/lifestyle/lifestyle00036.jpg'
import img15 from '../img/lifestyle/lifestyle00037.jpg'
import img16 from '../img/lifestyle/lifestyle00038.jpg'
import img17 from '../img/lifestyle/lifestyle00039.jpg'
import img18 from '../img/lifestyle/lifestyle00040.jpg'
import img19 from '../img/lifestyle/lifestyle00041.jpg'
import img20 from '../img/lifestyle/lifestyle00042.jpg'
import img21 from '../img/lifestyle/lifestyle00043.jpg'
import img22 from '../img/lifestyle/lifestyle00044.jpg'
import img23 from '../img/lifestyle/lifestyle00045.jpg'
import img24 from '../img/lifestyle/lifestyle00046.jpg'
import img25 from '../img/lifestyle/lifestyle00047.jpg'
import img26 from '../img/lifestyle/lifestyle00049.jpg'
import img27 from '../img/lifestyle/lifestyle00051.jpg'
import img28 from '../img/lifestyle/lifestyle00052.jpg'
import img29 from '../img/lifestyle/lifestyle00053.jpg'
import img30 from '../img/lifestyle/lifestyle00054.jpg'




export function LifeStile() {
  
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
            <img src={img28} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img25} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img1} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img2} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img3} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img24} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img4} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img7} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img10} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img19} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img5} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img6} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img9} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img11} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img12} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img8} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img15} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img16} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img26} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img14} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img17} alt="food img" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img13} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img18} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img20} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img21} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img22} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img23} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img27} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img29} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={img30} alt="food img"  class="img gallery-item"/>
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