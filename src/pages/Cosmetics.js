import { React, useEffect } from 'react'
import { Navbar } from '../components/navbar'
import { Modal } from 'bootstrap'

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
            <img src={"https://i.ibb.co/br8H03X/cosmetics00001.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/w0ZmL83/cosmetics00002.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/SJt2K0b/cosmetics00003.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/2ktLnzM/cosmetics00004.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/r0Sx0q2/cosmetics00005.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/1RS7ZD9/cosmetics00007.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/rpfDzgW/cosmetics00008.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/WGhkj5z/cosmetics00009.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/vBSmBF0/cosmetics00011.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/80DtSh9/cosmetics00012.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/5GLtySN/cosmetics00013.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/8P6NbY8/cosmetics00014.png"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/Gkjdbk7/cosmetics00015.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/9wf6PPV/cosmetics00016.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/g66nq4s/cosmetics00017.png"} alt="food img"  class="img gallery-item"/>
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