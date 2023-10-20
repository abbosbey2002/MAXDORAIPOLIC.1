import React from 'react'
import payme from "../../../public/images/payme.svg";
import oson from "../../../public/images/oson.svg";
import click from "../../../public/images/click.svg";
import uzum from "../../../public/images/uzum.svg";

import kafil from "../../../public/images/kafil-logo.svg";
import hamkorsugurta from "../../../public/images/hamkor-logo.png";

import "./payment.css"

const payment = () => {

  let paymeMerchant = "602390cc22be5158d343db60";
  let order_id = 2493;
  let paymeAccountOrderId = order_id;
  let paymeAmount = c;

  let encodedPaymeUri = btoa(`m=${paymeMerchant};ac.order_id=${paymeAccountOrderId};a=${paymeAmount}`);
  window.open("https://checkout.paycom.uz/" + encodedPaymeUri, "_blank");

}

function Payment(props) {
  return (
    <div className="col-sm-12 col-lg-9 bg-white mb-6 rounded">
      <div className=''>

        {/* ============================ Kompaniyalar ============================ */}
        <div className='row my-5'>
          <h2 id="" className="mt-3 mb-5 fs-1 fw-bold">Выберите компанию:</h2>

          <div class="form-check col-sm-6 col-lg-3 mb-3">
            <input class="form-check-input" type="radio" name="company_type" id="kafil" checked />
            <label class="form-check-label" for="kafil">
              <img src={kafil} alt="kafil" width="100%" />
            </label>
          </div>
          <div class="form-check col-sm-6 col-lg-3 mb-3">
            <input class="form-check-input" type="radio" name="company_type" id="hamkorsugurta" />
            <label class="form-check-label" for="hamkorsugurta">
              <img src={hamkorsugurta} alt="hamkorsugurta" width="100%" />
            </label>
          </div>
        </div>
        {/* ============================ / Kompaniyalar ============================ */}


        {/* ============================ To'lov tizimlari ============================ */}
        <div className='row my-5'>
          <h2 id="" className="mt-3 mb-5 fs-1 fw-bold">Выберите тип оплаты:</h2>
          <div class="form-check col-sm-6 col-lg-3 mb-3">
            <input class="form-check-input" type="radio" name="payment_type" id="click" />
            <label class="form-check-label" for="click">
              <img src={payme} alt="payme" width="100%" />
            </label>
          </div>
          <div class="form-check col-sm-6 col-lg-3 mb-3">
            <input class="form-check-input" type="radio" name="payment_type" id="payme" checked="checked" />
            <label class="form-check-label" for="payme">
              <img src={click} alt="click" width="100%" />
            </label>
          </div>

          <div class="form-check col-sm-6 col-lg-3 mb-3">
            <input class="form-check-input" type="radio" name="payment_type" id="oson" />
            <label class="form-check-label" for="oson">
              <img src={oson} alt="oson" width="100%" />
            </label>
          </div>

          <div class="form-check col-sm-6 col-lg-3 mb-3">
            <input class="form-check-input" type="radio" name="payment_type" id="uzum" />
            <label class="form-check-label" for="uzum">
              <img src={uzum} alt="click" width="100%" />
            </label>
          </div>

          <div className='form-check col-sm-12 col-lg-4 my-3 fs-5'>
            <button onClick={payment} className='btn hover:bg-[#058668dd] bg-[#058668] text-white w-100'>Оплата <i class="fa-solid fa-money-check-dollar ms-3"></i></button>
          </div>
        </div>
        {/* ============================ / To'lov tizimlari ============================ */}

      </div>

    </div>
  )
}

export default Payment