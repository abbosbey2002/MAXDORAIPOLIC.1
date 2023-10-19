import React from 'react'
import payme from "../../../public/images/payme.svg";
import oson from "../../../public/images/oson.svg";
import click from "../../../public/images/click.svg";
import uzum from "../../../public/images/uzum.svg";

import "./payment.css"

const payment = () =>{

  let paymeMerchant = "602390cc22be5158d343db60";
  let order_id=4848
        let paymeAccountOrderId = order_id;
        let paymeAmount = parseInt(5848) * 100;

        let encodedPaymeUri = btoa(`m=${paymeMerchant};ac.order_id=${paymeAccountOrderId};a=${paymeAmount}`);
  window.open("https://checkout.paycom.uz/" + encodedPaymeUri, "_b  lank");

}

function Payment(props) {
    return (
        <div className="col-sm-12 col-lg-9 bg-white mb-6 rounded">
          <div className='' >
            <div className='campany my-3 grid grid-cols-4 gap-5'>
                  <div className='px-4 py-3 rounded-xl border'>
                    <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Zurich_Insurance_Group_logo.svg/1280px-Zurich_Insurance_Group_logo.svg.png" alt="payme" />
                  </div>
          </div>
          <div className='payme grid grid-cols-4 gap-5'>
                  <div className='px-4 py-3 rounded-xl border'>
                    <img src={payme} alt="payme" />
                  </div>
          </div>
          </div>
          <div className='my-3'>
                <button onClick={payment} className='btn hover:bg-blue-500 hover:text-gray-100 text-white bg-blue-700 py-3 px-6'>Pay</button>
          </div>
        </div>
    )
}

export default Payment