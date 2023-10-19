import React from 'react'
import payme from "../../../public/images/payme.svg";
import oson from "../../../public/images/oson.svg";
import click from "../../../public/images/click.svg";
import uzum from "../../../public/images/uzum.svg";


function Payment(props) {
    return (
        <div className="col-sm-12 col-lg-9 bg-white mb-6 rounded">
          <div>

            <div className='campany grid grid-cols-4 gap-5'>
                  <div className='px-4 py-3 rounded-xl border'>
                    <img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Zurich_Insurance_Group_logo.svg/1280px-Zurich_Insurance_Group_logo.svg.png" alt="payme" />
                  </div>
          </div>
          <div className='payme grid grid-cols-4 gap-5'>
                  <div className='px-4 py-3 rounded-xl border'>
                    <img src={payme} alt="payme" />
                  </div>
          </div>
          </div>
          <div className=''>
                <button className='btn text-white bg-blue-700 p'>Pay</button>
          </div>
        </div>
    )
}

export default Payment

