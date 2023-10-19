import React, {useState} from 'react';
import getPersonData from '../../component/getPerson';
import {useNavigate} from 'react-router-dom';


function Client(props) {


    const navigate = useNavigate();

    

    const opacity = 0;
    const padding = "10px";
    const display = "none";
    const styleOpacity = {
        opacity,
      };
      const stylePadding = {
        padding,
      };
      const styleDisplay = {
        styleOpacity,
      };

    return (
        <>
             <div className="row" id="clientBox">
                <h2 id="" className="mt-3 fs-1 fw-bold">
                Сведения о заявителе
                </h2>
                <div className="row rounded border p-3 my-3">
                  <div className="col-sm-12 col-lg-6">
                    <div className="row">
                      <label for="" className="form-label">
                        Серия / номер паспорта
                      </label>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-sm-4 col-lg-4 mb-3">
                            <input
                              type="text"
                              maxLength={3}
                              onChange={(e) => props.setClinetSeria(e.target.value)}
                              id=""
                              placeholder="AA"
                              className="form-control text-uppercase col-2"
                            />
                          </div>
                          <div className="col-sm-8 col-lg-8 mb-3">
                            <input
                              maxlength={7}
                              onChange={(e) => props.setClinetNumber(e.target.value)}
                              id=""
                              type="text"
                              pattern="[0-9]+"
                              placeholder="1234567"
                              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                              className="form-control col-4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-lg-4">
                    <div className="mb-3">
                      <label className="form-label active">Дата рождения</label>
                      <input
                        type="date"
                        onChange={e => {props.setBClientirthdate(e.target.value)}}
                        placeholder="01A234BD"
                        className="form-control text-uppercase"
                      />
                    </div>
                  </div>
                  <div
                    className="col-sm-12 col-lg-2"
                    style={styleDisplay}
                    id="getCarInfoBox"
                  >
                    <div className="mb-3 d-flex flex-column">
                      <label
                        for=""
                        className="form-label active"
                        data-title="Avtomobil"
                        style={styleOpacity}
                      >
                        Get
                      </label>
                      <button
                        type="button"
                        className="btn hover:bg-[#058668dd] bg-[#058668] "
                        onClick={props.reqCleint}
                      >
                        <i
                          id="refreshInput"
                          className="fa-solid fa-magnifying-glass text-white"
                        ></i>
                      </button>
                    </div>
                  </div>

                  <div
                    className="col-sm-12 col-lg-2"
                    style={{ display: "none" }}
                    id="clearCarInfoBox"
                  >
                    <div className="mb-3 d-flex flex-column">
                      <label
                        for=""
                        className="form-label active"
                        data-title="Clear"
                        style={styleOpacity}
                      >
                        Clear
                      </label>
                      <button
                        type="button"
                        className="btn btn-dark bg-black"
                        id=""
                        onclick="test()"
                      >
                        <i id="refreshInput" className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    id="checkOwnerStatusBox"
                    className="col-12"
                    style={{ display: "none" }}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkOwnerStatus"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkOwnerStatus"
                    >
                      Владелец транспортного средства является заявителем{" "}
                    </label>
                  </div>
                </div>
              </div>
           
        </>
    )
}

export default Client
