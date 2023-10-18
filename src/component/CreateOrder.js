import axios from 'axios';



function CreateOrder(body){

    const apiUrl = 'https://backend.ipolis.uz/api/order';
 
   
    axios.post(apiUrl, body)
      .then(response => {
        console.log(response.data);
        console.log('body',body);
        // Continue with your desired operations after receiving the data
      })
      .catch(error => {
        console.log('body',body);
        console.error(error);
        // Handle the error
      });


}


export default CreateOrder;