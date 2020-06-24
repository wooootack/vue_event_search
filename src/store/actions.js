// Axios
import axios from 'axios'
import state from './state'

export default {

  // 現在地情報を取得し、mutationに渡す
  geolocation (context) {
    if (navigator.geolocation) {
      const geoOptions = {
        maximumAge: 0,
        timeout: 2000,
        enableHighAccuracy: true
      }

      navigator.geolocation.watchPosition(
        function (position) {
          // stateの更新
          context.commit('setLocation', { latitude: 35.690921, longitude: 139.70025799999996 })
          // TODO context.commit('setLocation', { latitude: position.coords.latitude, longitude: position.coords.longitude })
        },
        null,
        geoOptions
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
      count: param.count,
      keyword: param.keyword,
      online: param.online,
      offline: param.offline
    }

    axios.get('/events?', { params })
      .then(function (response) {
        response.data.map(function (value) {
          value.opend = false
        })
        context.commit('setStudySessions', response.data)
      })
      .catch(function (error) {
        console.log('ERROR!! occurred in Backend.', error.response)
      })
  }
}
