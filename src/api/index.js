import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';



export const getPlacesData = async(sw, ne) => {
    console.log(sw, ne)
    try {
        const {data: {data}} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '96f3112501mshdf21704f5aea2f8p1b8395jsn9cd15090ae86'
          }
  });

        return  data;
    } catch (error) {
        console.log(error)
    }
}