import axios from 'axios';
import { json } from 'react-router-dom';
import CreateOrder from './CreateOrder';

const AddAgrementOsago = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_IPOLIS_ENDPOINT}/eosgouz/agreement/add`,
      data ,
      {
        auth: {
          username: import.meta.env.VITE_REACT_APP_IPOLIS_USERNAME,
          password: import.meta.env.VITE_REACT_APP_IPOLIS_PASSWORD
        },
      }
    );

    const agreementResponse = response.data;
    alert('Paymentga o`tish')
    // console.log(agreementResponse);
    
    if(agreementResponse.operationResult.result === 0){
      return true;
     let res = CreateOrder({"policy_id": agreementResponse.operationResult.eosgouzPolicyId, data:data}); 
     console.log('save order', res); 
    }

  } catch (error) {
 
    // console.log("Bu osago get policy id =",  error);
    alert('Nimadir  xato ketti qayta urining')
    // Xato xolda ishlashni aniqlash uchun kodlarni shu joyga yozing
  }
};

export default AddAgrementOsago;