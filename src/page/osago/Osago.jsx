import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useNavigation} from "react-router-dom";
import Owner from "./Owner";
import Client from "./Client";
import getCar from "../../component/getCar";
import getPersonData from "../../component/getPerson";

// Image \\

import Navbar from "../../component/Navbar";
import getDriver from "../../component/getDriver";
import Amount from "./Amount";
import Calculate from "./Calculate";
import AddAgrementOsago from "../../component/AddAgrementOsago";
import Payment from "./Payment";

function Osago() {
    const mavigate = useNavigation()

    const button = document.querySelector('.loading-splint');


    const [car, setCar] = useState();
    const [client, setClient] = useState();
    const [vehicle, setVehicle] = useState()
    const [owner, setOwner] = useState();
    const [agreement, setAgriment] = useState({premiumAmount: 0});
    


    const [isPayment, setIsPayment]=useState(true)
    const [iSCalculate, setiSCalculate] = useState(false);
    // const [ownerseria, setOwerseria] = useState();
    // const [ownerNumner, setOwerNumber] = useState();
    // const [ownerphone, setOwerphone] = useState();
    // const [ownerBirthdate, setOwnerBirthdate] = useState();
    const [drivers, setDrivers] = useState([]);

    const [amount, setAmount] = useState(0)
    function amountChange(totalAmount) {
        setAmount(totalAmount)
    }
    const [techpassportseria, setSeria] = useState("AAF");
    const [techPassportNumber, setNumber] = useState("4250550");
    const [govNumber, setGovNumber] = useState("01M717KA");

    const [vehilePinfl, SetvehilePinfl] = useState();

    const [isClient, setIsClient] = useState(true);

    const [Pseria, setPseria] = useState("aa");
    const [Pnumber, setPnumbr] = useState(6194736);

    const regionsIDForEosgouz = {
        "01": 10,
        "10": 11,
        "20": 12,
        "25": 13,
        "30": 14,
        "40": 15,
        "50": 16,
        "60": 17,
        "70": 18,
        "75": 19,
        "80": 20,
        "85": 21,
        "90": 22,
        "95": 23,
      };

    const req = async () => {
        button.classList.remove('d-none');
        button.classList.add('d-block');

        let req = await getDriver(Pseria, Pnumber, vehilePinfl);

        if (await req.req) {
            setIsClient(true);
            const firstName = req.driverPersonInfo.firstNameLatin;
            const lastName = req.driverPersonInfo.lastNameLatin;
            const surName = req.driverPersonInfo.middleNameLatin;
          
            document.getElementById("ownerseria").style.borderColor = "#dee2e6";
            document.getElementById("ownernumber").style.borderColor = "#dee2e6";
            setiSCalculate(true);
            button.classList.replace('d-block', 'd-none');
            setIsClient(true);
          
            const owner = {
              firstName,
              lastName,
              surName,
              organizationName: `${lastName} ${firstName} ${surName}`,
              innNumber: null,
              pinfl: vehilePinfl,
              passportSeries: Pseria,
              passportNumber: Pnumber
            };
            setOwner(owner);
          
            
            document.getElementById("checkOwnerStatusBox").style.display = "block";
           
            setClient({
                firstName: req.driverPersonInfo.firstNameLatin,
                lastName: req.driverPersonInfo.lastNameLatin,
                surName: req.driverPersonInfo.middleNameLatin,
                typeId: 1, // chala
                legalTypeId: 3, // chala
                innNumber: null, // chala
                phone: "+998994288038",
                address: req.driverPersonInfo.address,
                organizationName: `${
                    req.driverPersonInfo.lastNameLatin
                } ${
                    req.driverPersonInfo.firstNameLatin
                } ${
                    req.driverPersonInfo.middleNameLatin
                }`,
                email: "example@example.com",
                pinfl: req.driverPersonInfo.pinfl,
                passportSeries: Pseria,
                passportNumber: Pnumber,
                passportAuthority: req.driverPersonInfo.issuedBy,
                passportIssueDate: req.driverPersonInfo.startDate.slice(0, 10),
                passportExpirationDate: req.driverPersonInfo.endDate.slice(0, 10),
                birthDate: req.driverPersonInfo.birthDate.slice(0, 10),
                gender: req.driverPersonInfo.gender === "1",
                countryIdForEosgoUz: 210,
                regionIdForEosgoUz: 10,
                districtIdForEosgoUz: 1007,
                residentTypeId: 1,
                mfoCode: null,
                settlementAccount: null,
                activityType: null
            })
            
          
          } else {
            document.getElementById("ownerseria").style.borderColor = "red";
            document.getElementById("ownernumber").style.borderColor = "red";
            button.classList.replace('d-block', 'd-none');
            alert("Malumot topilmadi!");
          }
    };
    
    //
    const finish = async() => {
        console.log(agreement, vehicle, client);
     let res=await AddAgrementOsago({agreement,  client, owner, vehicle,  drivers,})
     setIsPayment(res==true);
    }
    //
    const openCalculate = () => {
        setiSCalculate(true)
    }
    
    const clientChange = (e) => {
        setIsClient(e.target.checked)
        if (e.target.checked) {
            setiSCalculate(true)
             
            setClient({
              firstName: owner.firstNameLatin,
              lastName: owner.lastNameLatin,
              surName: owner.middleNameLatin,
              typeId: 1, // chala
              legalTypeId: 3, // chala
              innNumber: null, // chala
              phone: "+998994288038",
              address: owner.address,
              organizationName: `${
                  owner.lastNameLatin
              } ${
                  owner.firstNameLatin
              } ${
                  owner.middleNameLatin
              }`,
              email: "example@example.com",
              pinfl: owner.pinfl,
              passportSeries: owner.seria,
              passportNumber: owner.number,
              passportAuthority: owner.issuedBy,
              passportIssueDate: owner.startDate.slice(0, 10),
              passportExpirationDate: owner.endDate.slice(0, 10),
              birthDate: owner.birth,
              gender: owner.gender === "1",
              countryIdForEosgoUz: 210,
              regionIdForEosgoUz: 10,
              districtIdForEosgoUz: 1007,
              residentTypeId: 1,
              mfoCode: null,
              settlementAccount: null,
              activityType: null
          })
        } else {
            setiSCalculate(false)
        }
    }

    const clientChange2 = () => {
          setiSCalculate(true)
          
  }




    // console.log(car.modelName);

    // getVehiclocale();

    const getVehicle = async () => {
        button.classList.remove('d-none');
        button.classList.add('d-block');
        let req = await getCar(govNumber, techpassportseria, techPassportNumber);
        if (await req.req) {
            button.classList.remove('d-block');
            button.classList.add('d-none');

            document.getElementById("ownerseria").style.borderColor = "#dee2e6";
            document.getElementById("ownernumber").style.borderColor = "#dee2e6";
            document.getElementById("vehilegobNumber").style.borderColor = "#dee2e6";

            document.getElementById("vehileSeria").style.borderColor = "#058c19";
            document.getElementById("vehileNumber").style.borderColor = "#058c19";
            document.getElementById("vehilegobNumber").style.borderColor = "#058c19";

            SetvehilePinfl(req.pinfl);
            setCar(await req);
            document.getElementById("getCarInfoBox").style.display = "none";
            document.getElementById("clearCarInfoBox").style.display = "block";
            document.getElementById("pinflBox").style.display = "block";
            localStorage.setItem("car", JSON.stringify({
                ... req,
                techpassportseria,
                techPassportNumber
            }));
            setVehicle(  {
                brand: req.modelName, 
                model: req.modelName,
                engineNumber: req.engineNumber,
                insurancePeriodIdForEosgoUz: 1,
                typeIdForEosgoUz: req.vehicleTypeId,  // Bu avtomobil turi; shuni calculatorga olib o'tish kerak, car_type ga berib yuborish kerak, if ishlatib, 243 qatordagi if ni olib ishlaish kerak!
                manufacturedYear: req.issueYear,
                stateRegistrationNumber: req.govNumber,
                bodyNumber: req.bodyNumber,
                passportSeries: techpassportseria,
                passportNumber: techPassportNumber,
                passportIssueDate: req.techPassportIssueDate.slice(0, 10), // API dan kelgan malumotni chiqarish kerak20-11-2002
                discountTypeIdForEosgoUz: "1",
                registeredPlaceIdForEosgoUz: "1",
                regionIdForEosgoUz: regionsIDForEosgouz[req.govNumber.substr(0,2)],  // Hato (To'g'ri qo'yish kerak)
                pinfl : req.pinfl,
                inn: req.inn
              },)
            // getVehiclocale();

            // if(changeVehicleType == "1"){
            //     car_type = 0.1;
            //   } else if(changeVehicleType == "6"){
            //     car_type = 0.12;
            //   } else if(changeVehicleType == "9"){
            //     car_type = 0.12;
            //   } else if(changeVehicleType == "15"){
            //     car_type = 0.04;
            //   } else {
            //     car_type = 0.1
            //   }
              
        } else {
            document.getElementById("vehileSeria").style.borderColor = "red";
            document.getElementById("vehileNumber").style.borderColor = "red";
            document.getElementById("vehilegobNumber").style.borderColor = "red";
            button.classList.remove('d-block');
            button.classList.add('d-none');
            alert("Ma'lumot topilmadi!");
        }
    };

    function clearCarInfo() {
        document.getElementById("vehileSeria").value = "";
        document.getElementById("vehileNumber").value = "";
        document.getElementById("vehilegobNumber").value = "";

        document.getElementById("getCarInfoBox").style.display = "block";
        document.getElementById("clearCarInfoBox").style.display = "none";
        document.getElementById("pinflBox").style.display = "none";
    }
    // Styles \\


    // get client
    const [seriaClient, setClinetSeria] = useState();
    const [numberClient, setClinetNumber] = useState();
    const [birthdateCLient, setBClientirthdate] = useState();
    const [phone, setPhone] = useState(+ 9989)


    const reqCleint = async () => {
        let req = await getPersonData(seriaClient, numberClient, birthdateCLient)
        if (await req.req) {
            openCalculate()
            setClient({
              firstName: req.firstNameLatin,
              lastName: req.lastNameLatin,
              surName: req.middleNameLatin,
              typeId: 1, // chala
              legalTypeId: 3, // chala
              innNumber: null, // chala
              phone: "+998994288038",
              address: req.address,
              organizationName: `${
                  req.lastNameLatin
              } ${
                  req.firstNameLatin
              } ${
                  req.middleNameLatin
              }`,
              email: "example@example.com",
              pinfl: req.pinfl,
              passportSeries: req.seria,
              passportNumber: req.number,
              passportAuthority: req.issuedBy,
              passportIssueDate: req.startDate.slice(0, 10),
              passportExpirationDate: req.endDate.slice(0, 10),
              birthDate: req.birth,
              gender: req.gender === "1",
              countryIdForEosgoUz: 210,
              regionIdForEosgoUz: 10,
              districtIdForEosgoUz: 1007,
              residentTypeId: 1,
              mfoCode: null,
              settlementAccount: null,
              activityType: null
          })

        } else {
            alert("Malumotlaringiz xato");
        }
    }

    // end get client

    const opacity = 0;
    const padding = "10px";
    const display = "none";
    const styleOpacity = {
        opacity
    };
    const stylePadding = {
        padding
    };
    const styleDisplay = {
        styleOpacity
    };

    return (
        <>
            <section className="" id="">
                <Navbar/>
                <div className="container m-auto m-3 ">
                    <div className="row d-flex my-3">
                        <div className="col-sm-12 col-lg-9">
                            <div className="row">
                                <h2 id="" className="mt-3 fs-1 fw-bold">
                                    Информация об автомобиле
                                </h2>
                                <div className="row rounded border p-3 my-3">
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="row">
                                            <label for="" className="form-label">
                                                Технический паспорт (серия, номер)
                                            </label>
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-sm-4 col-lg-4 mb-3">
                                                        <input type="text"
                                                            maxLength={3}
                                                            onChange={
                                                                (e) => setSeria(e.target.value)
                                                            }
                                                            id="vehileSeria"
                                                            placeholder="AAA"
                                                            className="form-control text-uppercase col-2"/>
                                                    </div>
                                                    <div className="col-sm-8 col-lg-8 mb-3">
                                                        <input maxlength={7}
                                                            onChange={
                                                                (e) => setNumber(e.target.value)
                                                            }
                                                            id="vehileNumber"
                                                            type="text"
                                                            pattern="[0-9]+"
                                                            placeholder="1234567"
                                                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                                            className="form-control col-4"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-4">
                                        <div className="mb-3">
                                            <label className="form-label active">Гос номер</label>
                                            <input maxlength="10"
                                                onChange={
                                                    (e) => setGovNumber(e.target.value)
                                                }
                                                id="vehilegobNumber"
                                                type="text"
                                                placeholder="01A234BD"
                                                maxLength={8}
                                                className="form-control text-uppercase"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-2"
                                        style={styleDisplay}
                                        id="getCarInfoBox">
                                        <div className="mb-3 d-flex flex-column">
                                            <label for="" className="form-label active" data-title="Avtomobil"
                                                style={styleOpacity}>
                                                Get
                                            </label>
                                            <button type="button" className="btn hover:bg-[#058668dd] bg-[#058668] "
                                                onClick={getVehicle}>
                                               <i class="fas fa-long-arrow-alt-right text-white"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-2"
                                        style={
                                            {display: "none"}
                                        }
                                        id="clearCarInfoBox">
                                        <div className="mb-3 d-flex flex-column">
                                            <label for="" className="form-label active" data-title="Clear"
                                                style={styleOpacity}>
                                                Clear
                                            </label>
                                            <button type="button" className="btn btn-dark bg-black" id=""
                                                onClick={clearCarInfo}>
                                                <i id="refreshInput" className="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row" id="pinflBox"
                                style={
                                    {display: "none"}
                            }>
                                <h2 id="" className="mt-3 fs-1 fw-bold">
                                Информация о владельце транспортного средства
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
                                                        <input type="text"
                                                            maxLength={3}
                                                            onChange={
                                                                (e) => setPseria(e.target.value)
                                                            }
                                                            id="ownerseria"
                                                            placeholder="AA"
                                                            className="form-control text-uppercase col-2"/>
                                                    </div>
                                                    <div className="col-sm-8 col-lg-8 mb-3">
                                                        <input maxlength={7}
                                                            onChange={
                                                                (e) => setPnumbr(e.target.value)
                                                            }
                                                            id="ownernumber"
                                                            type="text"
                                                            pattern="[0-9]+"
                                                            placeholder="1234567"
                                                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                                            className="form-control col-4"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-2"
                                        style={styleDisplay}
                                        id="getCarInfoBox">
                                        <div className="mb-3 d-flex flex-column">
                                            <label for="" className="form-label active" data-title="Avtomobil"
                                                style={styleOpacity}>
                                                Get
                                            </label>
                                            <button type="button" className="btn hover:bg-[#058668dd] bg-[#058668] "
                                                onClick={req}>
                                                <i class="fas fa-long-arrow-alt-right text-white"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-2"
                                        style={
                                            {display: "none"}
                                        }
                                        id="clearCarInfoBox">
                                        <div className="mb-3 d-flex flex-column">
                                            <label for="" className="form-label active" data-title="Clear"
                                                style={styleOpacity}>
                                                Clear
                                            </label>
                                            <button type="button" className="btn btn-dark bg-black" id="" onClick="test()">
                                                <i id="refreshInput" className="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div id="checkOwnerStatusBox" className="col-12"
                                        style={
                                            {display: "none"}
                                    }>
                                        <input className="form-check-input" type="checkbox" defaultChecked id="checkOwnerStatus"
                                            onChange={clientChange}/>
                                        <label className="form-check-label ms-3" htmlFor="checkOwnerStatus">
                                            Владелец транспортного средства является заявителем{" "} </label>
                                    </div>
                                </div>
                            </div>

                            {
                            !isClient && <Client reqCleint={reqCleint}
                            
                                setClinetSeria={setClinetSeria}
                                setClinetNumber={setClinetNumber}
                                setBClientirthdate={setBClientirthdate}
                                openCalculate={openCalculate}/>
                        }
                            {
                            iSCalculate && <Calculate setDrivers={setDrivers}
                                finish={finish}
                                vehicle={vehicle}
                                setAgriment={setAgriment}
                                amountChange={amountChange}/>
                        } </div>
                        <Amount totalAmount={amount}/>

                        {isPayment && <Payment agreement={agreement} />
                        }

                        <Payment />

                    
                    </div>
                </div>
            </section>
        </>
    );
}

export default Osago;
