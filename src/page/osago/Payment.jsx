import React from 'react'
import payme from "../../../public/images/payme.svg";
import oson from "../../../public/images/oson.svg";
import click from "../../../public/images/click.svg";
import uzum from "../../../public/images/uzum.svg";

function Payment() {
  return (
    <div className="col-sm-12 col-lg-3 DR_fixed-wrapper">
      <div className='row border gap-2'>
        <div className='col-3 border'> <img  src={payme} alt="..." class="img-thumbnail"></img> </div>
        <div className='col-3 border'> <img  src={oson} alt="..." class="img-thumbnail"></img> </div>
        <div className='col-3 border'> <img  src={click} alt="..." class="img-thumbnail"></img> </div>
        <div className='col-3 border'> <img  src={uzum} alt="..." class="img-thumbnail"></img> </div>
      </div>
    </div>
  )
}

export default Payment