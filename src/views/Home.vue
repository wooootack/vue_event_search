<template>
  <div class="container">

    <div class="left-container">
      <GoogleMap />
    </div>

    <div class="right-container">
      <SearchForm />
      <EventList />
    </div>

  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap'
import SearchForm from '@/components/SearchForm'
import EventList from '@/components/EventList'

export default {
  name: 'Home',
  components: {
    GoogleMap,
    SearchForm,
    EventList
  }
}
</script>

<style scoped>

.container {
  margin: 0 0.3%;
  padding: 0;
  display: flex;
}

.right-container {
  width: 31vw;
  height: 92vh;
}

</style>
