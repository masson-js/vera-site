import { React, useEffect } from 'react'
import { Navbar } from '../components/navbar'
import { Modal } from 'bootstrap'

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
            <img src={"https://i.ibb.co/4Zkt4xg/lifestyle00042.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/wSSZkgn/lifestyle00029.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/ZKQ4p4Q/lifestyle00054.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/JyQL0sR/lifestyle00021.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/jhh9sH2/lifestyle00043.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/3rp3K8Z/lifestyle00053.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/zrZhZ1Y/lifestyle00022.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/Cv8NfpH/lifestyle00024.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/wL4hRFj/lifestyle00023.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/fvbRpNW/lifestyle00026.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/KNJY7gR/lifestyle00025.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/5swJRrt/lifestyle00027.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/0Gx6JWW/lifestyle00028.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/WFnphWn/lifestyle00051.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/16gQ5zN/lifestyle00044.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/SrSMsCB/lifestyle00046.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/x8ttHv7/lifestyle00049.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/HVDyxX5/lifestyle00045.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/3C1kRWh/lifestyle00030.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/PW5H5m1/lifestyle00034.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/vqjLTXB/lifestyle00047.jpg"} alt="food img" class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/pd63Znd/lifestyle00040.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/0nVvDMm/lifestyle00039.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/NjkmYfV/lifestyle00033.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/mR6rPCk/lifestyle00035.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/9yXf7fv/lifestyle00041.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/MCx43tk/lifestyle00037.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/HD84c7q/lifestyle00038.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/rssyndc/lifestyle00036.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
        </div>
      </div>
      </section>
    </div>
<div class="modal fade" id="gallery-modal" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-dismiss="modal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <img alt="modal img" class="modal-img"/>
    </div>
  
  </div>

 
</div>
  </>
  )
}