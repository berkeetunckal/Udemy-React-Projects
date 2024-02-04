import axios from "axios";


const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers:{
      Authorization: 'Client-ID N6Wiv-bdHKWWB9fGcvI7PLWIpBKqDoqLIMryy1aOaTA'
    },
    params: {
      query: term
    }
  })
  debugger;
  return response.data.results;
};

export default searchImages;