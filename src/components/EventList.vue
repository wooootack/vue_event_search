<template>
  <div class="event-container">
    <p class="title">イベント一覧</p>
    <div class="event-list">
      <div class="event-box" v-for="event in events" :key="event.id">
        <a class="event-title" v-bind:href="event.event_url" target="_blank">{{ event.title }}</a>
        <p class="event-description">
          <span class="head">開催住所</span><span class="content">{{ event.address }}</span>
        </p>
        <p class="event-description">
          <span class="head">開催場所</span><span class="content">{{ event.place }}</span>
        </p>
        <p class="event-description">
          <span class="head">開始日時</span><span class="content">{{ event.started_at }}</span>
        </p>
        <p class="event-description">
          <span class="head">終了日時</span><span class="content">{{ event.ended_at }}</span>
        </p>
        <p class="event-description">
          <span class="head">参加人数</span><span class="content">{{ event.accepted }} / {{ event.limit }} 人</span>
        </p>
        <p class="event-description">
          <span class="head">会場まで</span><span class="content">{{ event.distance }} km</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    events () {
      return this.$store.state.studySessions
    }
  }
}
</script>

<style scoped>

.container {
  width: 100%;
}

.event-list {
  margin: 0.4% 0.1%;
  height: 770px;
  overflow: scroll;
}

.event-box {
  box-sizing: border-box;
  padding: 0.8em 0.6em;
  color: #333;
  border: 0.5px solid #e9eaea;
  border-radius: 3px;
  transition: 0.3s;
  margin-top: 1%;
  margin-left: 1%;
  margin-right: 3%;
}

.event-title,
.event-description {
  margin: 0;
}

.event-description {
  padding: 0;
  font-size: 0.8em;
}

.event-title {
  font-size: 0.9em;
  margin: 0.8em 0;
  color: #00b5ad;
  cursor: pointer;
}

.event-title:hover {
  border-bottom: #00b5ad 1px solid;
}

.title {
  padding: 10px;
  margin: 0;
  margin-bottom: 1%;
  font-size: 0.9em;
  text-align: center;
  color: #333;
  background: #eee;
}

.head {
  display: inline-block;
  text-align: justify;
  text-justify: inter-ideograph;
  width: 70px;
}

.content {
  display: inline-block;
  width: auto;
}

</style>
