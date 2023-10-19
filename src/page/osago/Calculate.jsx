import React, {useState, useEffect} from "react";
import getPersonData from "../../component/getPerson";
import CreateOrder from "../../component/CreateOrder";
import Amount from "./Amount";
import {useNavigate} from "react-router-dom";

import "../../../public/styles/general.scss";
import Overlay from "../../component/Overlay";

function Calculate(props) { // region code
    const navigate = useNavigate();

   
    
    function uuidv4() {
        return([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
    }
    const regionsIDForEosgouz = {
        "01": 10,
        10: 11,
        20: 12,
        25: 13,
        30: 14,
        40: 15,
        50: 16,
        60: 17,
        70: 18,
        75: 19,
        80: 20,
        85: 21,
        90: 22,
        95: 23
    };

    const [amountOfDrivers, setAmountOFDrivers] = useState(3);
    let placeBoxForCalculate = 10;
    // = regionsIDForEosgouz[vehicle.govNumber.toString().substr(0,2)]
    let calcRegion;
    if (placeBoxForCalculate === 10 || placeBoxForCalculate === 11) {
        calcRegion = 1.4;
    } else {
        calcRegion = 1;
    }

    const [period, setPeriod] = useState(1);


    const [drivers, setDrivers] = useState([]);

    props.setDrivers(drivers)

    const [startDate, setStartDate] = useState();
    const [endDate, setEndtDate] = useState();


    function addOneYearAndOneDayToCurrentDate() {
        const today = new Date();
        const nextYear = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
        nextYear.setDate(nextYear.getDate());

        let now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        now.setDate(now.getDate() + 1);
        setStartDate(now);
        setEndtDate(nextYear);
    }

    const [driversSeria, setDriversSeria] = useState("");
    const [driversNumber, setDriversNumber] = useState("");
    const [driverBirthdate, setDriverBirthdate] = useState("");
    const [agreement, setagreement] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);

    props.setAgriment(agreement)

    props.amountChange(totalAmount);

    const [discount, setDiscount] = useState(2);

    // onChange={(e) => setSkidka(e.target.value)}

    let agreementDate = new Date();

    // calculate summ

    const [sumInsured, setSumInsured] = useState(40000000); // 40 000 000
    let calcCitizenship = 1;
    let calcType_of_person = 1; // Физическое лицо


    const [car_type, setCartype] = useState();

    useEffect(() => {

        if (props.vehicle.typeIdForEosgoUz == "1") {
            setCartype(0.1)
        } else if (props.vehicle.typeIdForEosgoUz == "6") {
            setCartype(0.12)
        } else if (props.vehicle.typeIdForEosgoUz == "9") {
            setCartype(0.12)
        } else if (props.vehicle.typeIdForEosgoUz == "15") {
            setCartype(0.04)
        } else {
            setCartype(0.1)
        }
        console.log((car_type));
    }, [])
    // end calculatge summ

    const [driver, setDriver] = useState();

    const [family, setFamily] = useState();
    const [isFamily, setIsFamily] = useState(false);

    const addDrivers = () => {
        const req = async () => {
            let req = await getPersonData(driversSeria, driversNumber, driverBirthdate);
            if (req.req) {
                setDriver(req);
                setIsFamily(true);
                document.getElementById("driverPassportSeria").style.borderColor = "#dee2e6";
                document.getElementById("driverPassportNumber").style.borderColor = "#dee2e6";
                document.getElementById("driverBirthdate").style.borderColor = "#dee2e6";
            } else {
                document.getElementById("driverPassportSeria").style.borderColor = "red";
                document.getElementById("driverPassportNumber").style.borderColor = "red";
                document.getElementById("driverBirthdate").style.borderColor = "red";
            }
        };

        req();
    };

    const saveDriver = () => {
        let checkSingleDriver = true;
        drivers.map(drv => {
            if (drv.pinfl === driver.pinfl) {
                return checkSingleDriver = false;
            }
        })
        if (checkSingleDriver) {

            drivers.push({
                firstName: driver.firstNameLatin,
                lastName: driver.lastNameLatin,
                surName: driver.middleNameLatin,
                birthday: driverBirthdate,
                pinfl: driver.pinfl,
                passportSeries: driversSeria,
                passportNumber: driversNumber,
                passportAuthority: driver.issuedBy,
                passportIssueDate: driver.startDate.slice(0, 10),
                passportExpirationDate: driver.startDate.slice(0, 10),
                driverLicenseSeries: "AF",
                driverLicenseNumber: "2388278",
                driverLicenseIssueDate: "2021-02-22",
                insuranceClaimCoefficient: "1",
                familyRelationId: family
            });
            setDriversNumber("");
            setDriverBirthdate("");
            setDriversNumber("");

            document.getElementById("driverPassportSeria").value = "";
            document.getElementById("driverPassportNumber").value = "";
            document.getElementById("driverBirthdate").value = "";

        } else {
            Alert('driver mavjud');
        }
    };

    const calculateAmount = async () => {


        if (period !== undefined && discount !== undefined && amountOfDrivers !== undefined) {
            setTotalAmount((await Math.round(sumInsured * calcCitizenship * calcType_of_person * car_type * amountOfDrivers * period * calcRegion * discount)) / 100);
            props.amountChange(await totalAmount);

            setagreement(await {
                agreementId: uuidv4(),
                agreementDate: agreementDate.toISOString().slice(0, 10),
                periodStartDate: startDate.toISOString().slice(0, 10),
                periodEndDate: endDate.toISOString().slice(0, 10),
                paymentDate: agreementDate.toISOString().slice(0, 10),
                policyDeliveryDate: startDate.toISOString().slice(0, 10),
                premiumAmount: Math.round(sumInsured * calcCitizenship * calcType_of_person * car_type * amountOfDrivers * period * calcRegion * discount) / 100,
                policyBlankNumber: "1",
                isLimited: amountOfDrivers == 1
            });
            props.setAgriment(agreement)
        } else {
            if (amountOfDrivers == undefined) {
                document.getElementById("driversId").style.color = "red";
            } else {
                document.getElementById("driversId").style.color = "#000";
            }
            if (period == undefined) {
                document.getElementById("period").style.borderColor = "red";
            } else {
                document.getElementById("period").style.borderColor = "#dee2e6";
            }
            if (discount == undefined) {
                document.getElementById("discount").style.borderColor = "red";
            } else {
                document.getElementById("discount").style.borderColor = "#dee2e6";
            }
        }
    };

    async function amountDrivers() {
        setAmountOFDrivers(1);
        calculateAmount()
    }
    async function amountDrivers2() {
        setAmountOFDrivers(3);
        calculateAmount()
    }

    const [active, setActive] = useState(false);

    const periodChange = (e) => {
        setPeriod(e.target.value);
        const today = new Date();
        if (e.target.value == 1) {
            const nextYear = today.setFullYear(today.getFullYear() + 1);
            // nextYear.setDate(nextYear.getDate());

            setEndtDate(new Date(nextYear));
        } else if (e.target.value == 0.7) {
            const nextYear = today.setMonth(today.getMonth() + 6);

            setEndtDate(new Date(nextYear));
        } else if (e.target.value == 0.2) {
            const nextYear = today.setDate(today.getDate() + 20);

            setEndtDate(new Date(nextYear));
        }
        calculateAmount()

    };

    const deleteDriver = (e) => {
        const newArray = drivers.filter((_, index) => index != e.target.id);
        setDrivers(newArray);
    }


    const openModalDriver = () => {
        return setActive(!active);

    };

    const changeDiscount = async (e) => {
        setDiscount(e.target.value)
        calculateAmount()
    }

    // const changeDiscount = async (e) =>{
    //     setDiscount(e.target.value)
    //    calculateAmount()
    // }

    useEffect(() => {
        addOneYearAndOneDayToCurrentDate();
        calculateAmount()

    }, []);

    return (
        <>
            <div id="policyCalculate"
                style={
                    {display: "block"}
            }>
                {/*--- ========== title ========== ---*/}
                <div className="row">
                    <h2 id="" className="mt-3 fs-1 fw-bold">
                        Расчет полиса
                    </h2>

                    <div className="row rounded border p-3 my-3">
                        {/*==========----- Haydovchilar sonini tanlang -----==========*/}
                        <div className="col-sm-12 col-lg-6 mb-3">
                            <label className="form-label" htmlFor="" data-title="Выберите пункт" id="driversId">
                                Выберите количество водителей - ?
                            </label>
                            <div className="row">
                                <div className="form-check col-sm-12 col-lg-12">
                                    <div className="">
                                        <input className="form-check-input" type="radio"
                                            onChange={amountDrivers}
                                            name="drivers"
                                            id="drivers_1"
                                            defaultValue={1}

                                            // style={{ marginLeft: 0, marginRight: 10 }}
                                            required=""
                                        />
                                        <label htmlFor="drivers_1">Ограничено до 5 человек</label>
                                    </div>
                                </div>
                                <div className="form-check col-sm-12 col-lg-12">
                                    <div className="">
                                        <input className="form-check-input" type="radio"
                                            onChange={amountDrivers2}
                                            name="drivers"
                                            id="drivers_2"
                                            defaultValue={3}
                                            defaultChecked
                                            required=""/>
                                        <label htmlFor="drivers_2">Не ограничено</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*==========----- / Haydovchilar sonini tanlang -----==========*/}
                        {/*==========----- Chegirma olish uchun tegishli elementni tanlang - ? -----==========*/}

                        {/*==========----- / Chegirma olish uchun tegishli elementni tanlang - ? -----==========*/}
                        {/*==========----- Sug'urta davrini tanlang - ? -----==========*/}
                        <div className="col-sm-12 col-lg-6 mb-3">
                            <label className="form-label" data-title="Выберите пункт">
                                Выберите период страхования - ?
                            </label>
                            <select required="" className="form-select" aria-label="" name="period" id="period"
                                onChange={periodChange}>
                                <option selected
                                    value={1}>На 1 год</option>
                                <option value="0.7">На 6 месяцев</option>
                                <option value="0.2">
                                    Следования к месту регистрации (до 20 дней)
                                </option>
                            </select>
                        </div>
                        {/*==========----- / Sug'urta davrini tanlang - ? -----==========*/}
                        {/*==========----- Holatlarning mavjudligini tanlang - ? -----==========*/}
                        <div className="col-sm-12 col-lg-12 mb-3">
                            <label className="form-label" data-title="Выберите пункт">
                                Выберите наличие случаев - ?
                            </label>
                            <select required="" className="form-select" aria-label="" name="discount" id="discount"
                                onChange={changeDiscount}>
                                <option value={2}
                                    selected>
                                    Один страховой случай, наступивший в период действия
                                                      предыдущего договора обязательного страхования
                                </option>
                                <option value="2.5">
                                    Два страховых случая, произошедшие в период действия
                                                      предыдущего договора обязательного страхования
                                </option>
                                <option value={3}>
                                    Три и более страховых случая, наступивших в период действия
                                                      предыдущего договора обязательного страхования
                                </option>
                                <option value={1}>
                                    Впервые, а также при отсутствии страховых случаев в период
                                                      действия предыдущего договора обязательного страхования
                                </option>
                            </select>
                        </div>
                        {/*==========----- / Holatlarning mavjudligini tanlang - ? -----==========*/}
                        {/*==========----- Elektron polisning kuchga kirish sanasini kiriting yoki tanlang - ? -----==========*/}
                        <div className="col-sm-12 col-lg-6">
                            <div className="my-2">
                                <label htmlFor="start_date" className="form-label active">
                                    Дата начала действия полиса{" "} </label>
                                <input type="date" name="start_date"
                                    defaultValue={
                                        startDate ?. toISOString().slice(0, 10)
                                    }
                                    id="start_date"
                                    className="form-control"
                                    required=""
                                    min="2023-10-12"/>
                            </div>
                        </div>
                        {/*==========----- / Elektron polisning kuchga kirish sanasini kiriting yoki tanlang - ? -----==========*/}
                        {/*==========----- Elektron polisning kuchga kirish sanasini kiriting yoki tanlang - ? -----==========*/}
                        <div className="col-sm-12 col-lg-6">
                            <div className="my-2">
                                <label htmlFor="end_date" className="form-label">
                                    Дата окончания полиса
                                </label>
                                <input type="date" name="end_date" id="end_date" className="form-control" disabled=""
                                    defaultValue={
                                        endDate ?. toISOString().slice(0, 10)
                                    }/>
                            </div>
                        </div>
                        {/*==========----- / Elektron polisning kuchga kirish sanasini kiriting yoki tanlang - ? -----==========*/} </div>
                    {
                    drivers.map((driver, index) => {
                        return (
                            <div className="row rounded border p-3 my-3">
                                <div className="d-flex justify-between items-center">
                                    <h2 className="fs-2 fw-bold"
                                        key={
                                            index + 1
                                    }>
                                        {
                                        index + 1
                                    }
                                        {
                                        driver.firstName
                                    }</h2>
                                    <button id={index}
                                        onClick={deleteDriver}
                                        className="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                    <section className="container" id="buttonFinish"
                        style={
                            {display: "block"}
                    }>
                        <div className="alert alert-warning my-3" role="alert">
                            <b style={
                                {color: "#058668"}
                            }>ПРИМЕЧАНИЕ!</b>
                            <br/>
                            Если право на управление автомототранспортным средством
                                          предоставляется по доверенности, то в качестве водителя
                                          автомототранспортного средства также должны быть внесены данные
                                          лица, которому по доверенности предоставлено право.
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-4 my-3">
                                <button type="hidden" id="modal4_btn" className="btn btn-dark modal-trigger"
                                    onClick={openModalDriver}
                                    data-target="modal4"
                                    data-bs-target="#modal4"
                                    style={
                                        {
                                            width: "100%",
                                            display: "block"
                                        }
                                }>
                                    Добавить водителя
                                </button>
                            </div>
                            <div className="col-sm-12 col-lg-6 my-3">
                                <button id="finishButton"
                                    onClick={
                                        props.finish
                                    }
                                    className="btn hover:bg-[#058668dd] bg-[#058668] text-white"
                                    style={
                                        {
                                            width: "100%",
                                            display: "block"
                                        }
                                }>
                                    Перейти к оформлению заказа
                                    <span className="ms-3">
                                        <i className="fas fa-long-arrow-alt-right"/>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className={
                `clientModal row justify-center absolute w-full ${
                    active ? "active" : ""
                }`
            }>
                <div className="col-sm-12 col-lg-6 m-8 bg-white rounded">
                    <section className="rounded" id="modal4"
                        style={
                            {display: "block"}
                    }>
                        <section className="osago__cart__osago3">
                            <div className="row p-5">
                                <div className="d-flex justify-end">
                                    <button type="button" className="btn btn-outline-dark"
                                        onClick={openModalDriver}
                                        id="modal4_close"
                                        // style={{ position: "absolute", right: 18 }}
                                    >
                                        <i className="fa-solid fa-x"/>
                                    </button>
                                </div>
                                <div className="col-sm-12 col-lg-4 mb-3">
                                    <label htmlFor="driverPassportSeria" className="form-label active">
                                        Серия паспорта
                                    </label>
                                    <input onChange={
                                            (e) => setDriversSeria(e.target.value)
                                        }
                                        type="text"
                                        className="form-control text-uppercase"
                                        id="driverPassportSeria"
                                        placeholder="AA"
                                        maxLength={2}/>
                                </div>
                                <div className="col-sm-12 col-lg-8 mb-3">
                                    <label htmlFor="driverPassportNumber" className="form-label active">
                                        Номер паспорта
                                    </label>
                                    <input onChange={
                                            (e) => setDriversNumber(e.target.value)
                                        }
                                        type="text"
                                        className="form-control text-uppercase"
                                        id="driverPassportNumber"
                                        placeholder={5061419}
                                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                        maxLength={7}/>
                                </div>
                                <div className="col-sm-12 col-lg-8 mb-3">
                                    <label htmlFor="driverBirthdate" className="form-label active">
                                        Дата рождения
                                    </label>
                                    <input type="date" className="form-control"
                                        onChange={
                                            (e) => setDriverBirthdate(e.target.value)
                                        }
                                        id="driverBirthdate"
                                        placeholder="35.78.1908"/>
                                </div>
                                <div className="col-sm-12 col-lg-4 mb-3">
                                    <button onClick={addDrivers}
                                        className="btn btn-danger mt-8">
                                        Далее
                                        <span>
                                            <i className="fas fa-long-arrow-alt-right"/>
                                        </span>
                                    </button>
                                </div>
                                {
                                isFamily && (
                                    <div className="col-sm-12 col-lg-8 mb-3">
                                        <label className="my-1" htmlFor="">
                                            Qarindoshligi
                                        </label>
                                        <select required="" aria-label="" className="form-select modaLcountry" name="relative" id="relative"
                                            onChange={
                                                (e) => setFamily(e.target.value)
                                        }>
                                            <option id="not_relative_option"
                                                value={0}>
                                                Не родственник
                                            </option>
                                            <option selected=""
                                                value={1}>
                                                Отец
                                            </option>
                                            <option value={2}>Мать</option>
                                            <option value={3}>Муж</option>
                                            <option value={4}>Жена</option>
                                            <option value={5}>Сын</option>
                                            <option value={6}>Дочь</option>
                                            <option value={7}>Старший брат</option>
                                            <option value={8}>Младший брат</option>
                                            <option value={9}>Старшая сестра</option>
                                            <option value={10}>Младшая сестра</option>
                                        </select>
                                    </div>
                                )
                            }
                                {
                                isFamily && (
                                    <div class="col-sm-12 col-lg-4">
                                        <button onClick={saveDriver}
                                            class="btn btn-danger">
                                            Сохранить
                                        </button>
                                    </div>
                                )
                            } </div>
                        </section>
                        <section id="driverDataSection" className="osago__modals__cart">
                            <div className="col-12"></div>
                        </section>
                    </section>
                </div>
            </div>
            {
            active && <Overlay/>
        } </>
    );
}

export default Calculate;
