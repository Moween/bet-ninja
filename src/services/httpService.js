import axios from 'axios';
import { toast } from 'react-toastify';

const httpService = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    if(error.response && error.response.status === 404) {
     toast.error('Bad Request');
    } 
  }
};

export default httpService;