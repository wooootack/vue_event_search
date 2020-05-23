export default {

  // 緯度（初期値は新宿駅）
  latitude: 35.690921,

  // 経度（初期値は新宿駅）
  longitude: 139.70025799999996,

  // ウィンドウ表示時のオフセット設定
  infoOptions: {
    pixelOffset: {
      width: 0,
      height: -35
    }
  },

  // 取得した勉強会情報の一覧
  studySessions: [
    {
      position: { lat: 35.690921, lng: 139.70025799999996 },
      opend: false,
      info: 'テスト'
    },
    {
      position: { lat: 35.690921, lng: 139.80025799999996 },
      opend: false,
      info: 'test'
    }
  ]
}
