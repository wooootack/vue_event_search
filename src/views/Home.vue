<template>
  <div>
    <button @click="formToggle" class="button">
      <i class="fas fa-home"></i>
      {{ message }}
    </button>
    <div class="form-container" v-show="searching">
      <b-form @submit="onSubmit" class="search-form">
          <b-form-group
            id="input-group-keywords"
            label="キーワード"
            label-for="input-keywords">
            <b-form-tags
              id="input-keywords"
              input-id="tags-remove-on-delete"
              :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
              v-model="form.keywords"
              separator=" "
              placeholder="スペース区切りで複数入力できます。"
              remove-on-delete
              no-add-on-enter />
          </b-form-group>
          <b-form-group
            id="input-group-tags"
            label="ジャンル"
            label-for="input-tags">
            <b-form-tags
              id="input-tags"
              input-id="tags-remove-on-delete"
              :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
              v-model="form.tags"
              separator=" "
              placeholder="スペース区切りで複数入力できます。"
              remove-on-delete
              no-add-on-enter />
          </b-form-group>
          <b-form-group
            id="input-group-start"
            label="開催日"
            label-for="start-datepicker">
            <b-form-datepicker
              id="start-datepicker"
              v-model="form.start"
              :date-format-options="{ year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }"
              placeholder="開始日" />
          </b-form-group>
          <b-form-group
            id="input-group-end"
            label="終了日"
            label-for="end-datepicker">
            <b-form-datepicker
              id="end-datepicker"
              v-model="form.end"
              :date-format-options="{ year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }"
              placeholder="終了日" />
            </b-form-group>
          <b-form-group
            id="input-group-max"
            label="最大件数"
            label-for="max-sb">
            <b-form-spinbutton
              id="max-sb"
              v-model="form.max"
              min="1"
              max="50" />
          </b-form-group>
          <div class="button-wrapper"><b-button type="submit" variant="info">現在地から検索</b-button></div>
      </b-form>
    </div>

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
        :options="{streetViewControl: false, mapTypeControl: false}"
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
          @closeclick="close(m)">
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

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

      form: {
        keywords: [],
        tags: [],
        start: '',
        end: '',
        max: 10
      },

      message: '検索条件を開く',

      searching: false,

      // 取得した緯度
      latitude: 0,

      // 取得した経度
      longitude: 0,

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

    // ウィンドウ表示処理
    open (marker) {
      marker.opend = true
    },

    // ウィンドウ非表示処理
    close (marker) {
      marker.opend = false
    },

    // 位置情報取得処理
    geolocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const coords = position.coords
            // 緯度経度だけ取得
            this.latitude = coords.latitude
            this.longitude = coords.longitude
          }.bind(this)
        )
      } else {
        alert('位置情報を取得できませんでした')
      }
    },

    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },

    formToggle () {
      this.searching = !this.searching
      if (this.searching) {
        this.message = '検索条件を閉じる'
      } else {
        this.message = '検索条件を開く'
      }
    }
  },

  mounted () {
    this.geolocation()
  }
}
</script>

<style scoped>

.search-form {
  background-color:#F0F0F0;
  margin: 0.5% 0.5% 0 0.5%;
  padding: 0.5%;
  border-radius: 10px;
}

.map-container {
  width: 100vw;
  height: 85vh;
}

.google-map {
  margin: 0.5%;
  width: 99%;
  height: 99%;
}

.button {
  margin: 0.5% 0.5% 0 0.5%;
  width: 100%;
  padding: 10px 100px;
  color: white;
  background-color: #17a2b8;
}

.button:focus {
  outline:0;
}

.button-wrapper {
  text-align:center;
}

</style>
