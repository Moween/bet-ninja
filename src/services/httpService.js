import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, (error) => {
  const expectedError = error.response
  && error.response.status >= 400
  && error.response.status < 500;

  if(!expectedError) {
    // For Unexpected error
    toast.error('An unexpected error occured!');
  }
  // For expected error
  return Promise.reject(error);
});

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