import React from 'react'
import payme from "../../../public/images/payme.svg";
import oson from "../../../public/images/oson.svg";
import click from "../../../public/images/click.svg";
import uzum from "../../../public/images/uzum.svg";
function Amount(props) {

    const formatter = new Intl.NumberFormat('uzs', {
        style: 'currency',
        currency: 'UZS',
    });

    let amount = formatter.format(props.totalAmount);

  return (
    <div className="col-sm-12 col-lg-3 DR_fixed-wrapper">
    <div className="DR_navbar-fixed mb-4">
      <div className="border rounded p-5">
        <h4 className="mb-4 fs-3 fw-bold">Результаты расчета:</h4>
        <div className="">
          <div className="d-flex flex-column mb-4">
            <span className="fw-light">Страховая премия:</span>
            <p>
              <span className="fs-4 fw-normal" id="">
                40 000 000.00 UZS
              </span>
            </p>
          </div>
          <div className="d-flex flex-column mb-1">
            <span className="fw-light">Страховая сумма:</span>
            <p>
              <span className="fs-4 fw-normal" id="">
                 {amount}
              </span>
            </p>
            <p hidden>
              <span id="">0</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="payment_box border rounded-md p-5">
      <div className="payment_box_items">
        <div className="payment_box_items_title">
          <h3 className="fs-3 fw-bold mb-4">Виды оплаты:</h3>
        </div>

        <div className="payment_box_items_images d-flex flex-wrap align-items-center gap-4">
          <div className="pay_image w-3/12">
            <img src={payme} alt="payme" />
          </div>
          <div className="pay_image w-3/12">
            <img src={click} alt="payme" />
          </div>
          <div className="pay_image w-3/12">
            <img src={oson} alt="payme" />
          </div>
          <div className="pay_image w-3/12">
            <img src={uzum} alt="payme" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Amount