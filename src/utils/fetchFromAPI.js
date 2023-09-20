import axios from 'axios';

const API_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: API_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '8b5e5f610fmsh5d753b351246154p177f03jsnbc1f2d48d6d0',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${API_URL}/${url}`, options);
    return data;
}