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
    // APIを使って検索する

    // stateの更新
    context.commit('setStudySessions', [])
  }
}
