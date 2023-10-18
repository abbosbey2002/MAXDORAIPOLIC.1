import React from "react";

function Payment() {
  return (
    <>
    <div className="row" style={{width: "-webkit-fill-available"}}>
			<h3 className="pb-3" data-title="Выберите систему электронной оплаты">
				Выберите систему электронной оплаты
			</h3>
			
			<div className="col-12 col-lg-auto form-check mb-3 me-4 d-flex align-items-center">
				<input className="form-check-input me-2" type="radio" name="paymentMethod" id="payme" value="payme" checked="" />
				<label className="form-check-label" for="payme">
					<img src="https://kafil.uz/assets/payments/payme.svg" alt="our_partners_fon" height="30px" />
				</label>
			</div>

			<div className="col-12 col-lg-auto form-check mb-3 me-4 d-flex align-items-center">
				<input className="form-check-input me-2" type="radio" name="paymentMethod" id="click" value="click" />
				<label className="" for="click">
					<img src="https://kafil.uz/assets/payments/click.svg" alt="our_partners_fon" height="30px" />
				</label>
			</div>

			<div className="col-12 col-lg-auto form-check mb-3 me-4 d-flex align-items-center">
				<input className="form-check-input me-2" type="radio" name="paymentMethod" id="oson" value="oson" />

				<label className="" for="oson">
					<img for="oson" src="https://kafil.uz/assets/payments/oson.svg" alt="our_partners_fon" height="20px" />
					<span className="badge rounded-pill text-bg-warning">Скоро</span>
				</label>
			</div>
			<div className="col-12 col-lg-auto form-check mb-3 me-4 d-flex align-items-center">
				<input className="form-check-input me-2" style={{cursor: "not-allowed !important;"}} type="radio" name="paymentMethod" id="uzum" value="uzum" disabled="" />

				<label className="" for="uzum" style={{cursor: "not-allowed !important;"}}>
					<img src="https://kafil.uz/assets/payments/uzum.svg" alt="our_partners_fon" height="30px" /> 
					<span className="badge rounded-pill text-bg-warning">Скоро</span>
				</label>
			</div>

		</div>
       <div className="my-5">
			<div className="row">
				<div className="col-12 col-sm-6 col-md-6 col-lg-6 pb-3">
					<h4 className="osago__title8__h4">Страховая сумма:</h4>
					<h3 className="osago__title8__h3"><span id="insuredAmount">40&nbsp;000&nbsp;000,00&nbsp;UZS</span></h3>
				</div>

				<div className="col-12 col-sm-6 col-md-6 col-lg-6">
					<h4 className="osago__title8__h4">Страховая премия:</h4>
					<h3 className="osago__title8__h3" id="premiumAmount">168&nbsp;000,00&nbsp;UZS</h3>
				</div>
			</div>
		</div>

        <div className="row">
			<div className="alert alert-danger" role="alert">
				Не забывайте: После оплаты полиса вы должны будете нажать на кнопку “Вернуться на сайт” и “Завершить”, чтобы подтвердить, что оплата была произведена. В противном случае процесс покупки электронного полиса будет считаться не полностью завершенным.			</div>
		</div>
    </>
  );
}

export default Payment;
