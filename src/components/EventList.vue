<template>
  <div>
    <p class="title">イベント一覧</p>
    <div class="event-list">
      <div class="event-box" v-for="event in events" :key="event.id">
        <a class="event-title" v-bind:href="event.event_url" target="_blank">{{ event.title }}</a>
        <p class="event-description">
          住所：{{ event.address }}
          場所：{{ event.place }}
          開催日時：{{ event.started_at }}
          終了日時：{{ event.ended_at }}
          参加上限：{{ event.limit }}
          参加人数：{{ event.accepted }}
          距離:{{ event.distance }}
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
  margin: 1%;
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
  color: #333;
  background: #eee;
}

</style>
