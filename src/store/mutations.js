export default {

  // 渡された現在地情報をstateに反映する
  setLocation (state, location) {
    state.latitude = location.latitude
    state.longitude = location.longitude
  },

  // 渡された勉強会データをstateに反映する
  setStudySessions (state, result) {
    state.studySessions = result
  }

}
