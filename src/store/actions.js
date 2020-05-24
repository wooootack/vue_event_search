// Axios
import axios from 'axios'

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
    axios.get('/users')
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log('ERROR!! occurred in Backend.', error)
      })
    console.log('end')
    // stateの更新
    context.commit('setStudySessions', [])
  }
}
