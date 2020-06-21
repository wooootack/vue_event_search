<template>
  <div class="search-form-container">

    <button @click="formToggle" class="header">
      {{ message }}
    </button>

    <div class="form-container" v-show="searching">

      <form @submit.prevent="onSubmit">

        <div class="form-group">
          <label>キーワード</label>
          <input type="text" v-model="form.keyword">
        </div>

        <div class="form-group">
          <label>取得件数</label>
          <input type="number" v-model="form.count">
        </div>

        <div class="form-group">
          <label>検索期間</label>
          <input type="date" v-model="form.start"><p>から</p><input type="date" v-model="form.end">
        </div>

        <div class="button-wrapper">
          <button type="submit">検索</button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        keywords: [],
        start: '2020-07-01',
        end: '2020-07-02',
        count: 10
      },
      message: '検索条件を開く',
      searching: true
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

.search-form-container {
  text-align: center;
}

.form-group {
  display: flex;
  align-items: center;
  width: 500px;
  margin-top: 1%;
  margin-bottom: 1%;
}

p {
  width: 40px;
  text-align: center;
  margin: 0;
}

label {
  width: 100px;
}

input[type="text"] {
  font: 15px/24px sans-serif;
  box-sizing: border-box;
  padding: 0.3em;
  width: 380px;
  transition: 0.3s;
  letter-spacing: 1px;
  color: #aaaaaa;
  border: 1px solid #1b2538;
  border-radius: 4px;
}

input[type="number"] {
  font: 15px/24px sans-serif;
  box-sizing: border-box;
  padding: 0.3em;
  width: 380px;
  transition: 0.3s;
  letter-spacing: 1px;
  color: #aaaaaa;
  border: 1px solid #1b2538;
  border-radius: 4px;
}

input[type="date"] {
  font: 15px/24px sans-serif;
  box-sizing: border-box;
  padding: 0.3em;
  transition: 0.3s;
  letter-spacing: 1px;
  width: 170px;
  color: #aaaaaa;
  border: 1px solid #1b2538;
  border-radius: 4px;
}

input:focus {
  border: 1px solid #da3c41;
  outline: none;
  box-shadow: 0 0 5px 1px rgba(218,60,65, .5);
}

.button-wrapper {
  text-align: center;
}

button {
  padding: 10px 100px;
  margin-bottom: 1%;
  color: #333;
  background: #eee;
  border: 0;
}

button:focus {
  outline:0;
}

.header {
  width: 100%;
}

</style>
