// Axios
import axios from 'axios'
import state from './state'

export default {

  // 現在地情報を取得し、mutationに渡す
  geolocation (context) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const coords = position.coords
          // stateの更新
          context.commit('setLocation', { latitude: coords.latitude, longitude: coords.longitude })
        }
      )
    } else {
      alert('位置情報を取得できませんでした')
    }
  },

  // 勉強会情報を検索し、mutationに渡す
  searchStudySessions (context, param) {
    const params = {
      lat: state.latitude,
      lon: state.latitude,
      start: param.start.replace(/-/g, ''),
      end: param.end.replace(/-/g, ''),
      count: param.count
    }

    console.log(params)

    axios.get('/events?', { params })
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log('ERROR!! occurred in Backend.', error.response)
      })
    // stateの更新
    context.commit('setStudySessions', [])
  }
}
