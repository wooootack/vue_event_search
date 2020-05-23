<template>
  <div class="map-container">
    <!--
      :center     => 表示位置の中心を設定
      :zoom       => 拡大率
      :options    => オプションを指定
      map-type-id => 表示するマップ種別
      @xxxx       => 公式ドキュメントのイベントなら設定可能
    -->
    <GmapMap
      class="google-map"
      :center="center"
      :zoom="12"
      :options="{streetViewControl: false, mapTypeControl: false}"
      map-type-id="roadmap">

      <!--
        :options    => オプション設定
        :position   => ウィンドウの表示位置 { lat: xxx, lng: xxx }
        :opend      => 表示フラグ
      -->
      <GmapInfoWindow
        v-for="m in studySessions"
        :key=m.id
        :options="infoOptions"
        :position="m.position"
        :opened="m.opend"
        @closeclick="close(m)">
        {{ m.info }}
      </GmapInfoWindow>

      <!--
        :position   => マーカーの表示位置
      -->
      <GmapMarker
        v-for="(m, idx) in studySessions"
        :key="idx"
        :position="m.position"
        @click="open(m)" />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data () {
    return {
      // ウィンドウ表示時のオプション
      infoOptions: this.$store.infoOptions
    }
  },
  computed: {
    studySessions () {
      // 勉強情報の一覧
      return this.$store.state.studySessions
    },
    center () {
      // GoogleMapの中心位置
      return { lat: this.$store.state.latitude, lng: this.$store.state.longitude }
    }
  },
  methods: {
    // ウィンドウ表示処理
    open (marker) {
      marker.opend = true
    },
    // ウィンドウ非表示処理
    close (marker) {
      marker.opend = false
    }
  },
  mounted () {
    // 位置情報の取得
    // TODO 精度が悪いのでいったんスキップ
    // this.$store.dispatch('geolocation')
  }
}
</script>

<style scoped>

.map-container {
  width: 100vw;
  height: 85vh;
}

.google-map {
  margin: 0.5%;
  width: 99%;
  height: 99%;
}

</style>
