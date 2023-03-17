import { React, useEffect } from 'react'
import { Navbar } from '../components/navbar'
import { Modal } from 'bootstrap'

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
            <img src={"https://i.ibb.co/Rvm3DQW/food00034.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/HFB1kv7/food00033.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/ctmY1mZ/food00032.png"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/ncCNYdj/food00031.png"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/vhLhQgt/food00024.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/0KkpmFq/food00007.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/WB5tyJs/food00009.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/PCKvBwb/food00002.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/XYR1xM3/food00008.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/XjxWLcg/food00003.jpg"} alt="food img"  lass="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/S5YBZMj/food00016.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/RhQYh9Y/food00027.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/sC8NprS/food00026.jpg"} alt="food img"  class="img gallery-item"/>
          </div>  
          <div class='col'>
            <img src={"https://i.ibb.co/rfYkRCd/food00018.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/M9v8qKk/food00028.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/dQFsz94/food00029.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/sgMtzTg/food00030.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/qj3DRGP/food00001.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/qxHhypj/food00005.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/J37gkFj/food00025.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/qrzzs4G/food00004.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/0FgJXj3/food00021.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/Tbmypdc/food00017.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/qnGbN9f/food00011.jpg"} alt="food img"  class="img gallery-item"/>
          </div>
          <div class='col'>
            <img src={"https://i.ibb.co/3csJ7J5/food00012.jpg"} alt="food img"  class="img gallery-item"/>
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

