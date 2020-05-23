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
      :center="{lat:35.690921, lng:139.70025799999996}"
      :zoom="12"
      :options="{streetViewControl: false}"
      map-type-id="roadmap">

      <!--
        :options    => オプション設定
        :position   => ウィンドウの表示位置 { lat: xxx, lng: xxx }
        :opend      => 表示フラグ
       -->
      <GmapInfoWindow
        v-for="m in markers"
        :key=m.id
        :options="infoOptions"
        :position="m.position"
        :opened="m.opend"
        @closeclick="close(m)"
      >
      {{ m.info }}
      </GmapInfoWindow>

      <!--
        :position   => マーカーの表示位置
       -->
      <GmapMarker
        v-for="(m, idx) in markers"
        :key="idx"
        :position="m.position"
        @click="open(m)" />

    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      // 取得したマーカーの一覧
      markers: [
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
      ],

      // ウィンドウ表示時のオフセット設定
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    }
  },
  methods: {
    open (marker) {
      marker.opend = true
    },
    close (marker) {
      marker.opend = false
    }
  }
}
</script>

<style scoped>

.map-container {
  width: 100vw;
  height: 70vh;
}

.google-map {
  width: 100%;
  height: 100%;
}

</style>
