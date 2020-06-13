<template>
  <div>
    <button @click="formToggle" class="button">
      {{ message }}
    </button>
    <div class="form-container" v-show="searching">
      <b-form @submit.prevent="onSubmit" class="search-form">
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
            v-model="form.count"
            min="1"
            max="50" />
        </b-form-group>
        <div class="button-wrapper"><b-button type="submit" variant="info">現在地から検索</b-button></div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        keywords: [],
        tags: [],
        start: '',
        end: '',
        count: 10
      },
      message: '検索条件を開く',
      searching: false
    }
  },
  methods: {
    onSubmit (evt) {
      this.$store.dispatch('searchStudySessions', this.form)
    },
    formToggle () {
      this.searching = !this.searching
      if (this.searching) {
        this.message = '検索条件を閉じる'
      } else {
        this.message = '検索条件を開く'
      }
    }
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
