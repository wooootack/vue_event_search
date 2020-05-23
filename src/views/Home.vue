<template>
  <div>
    <SearchForm />
    <GoogleMap />
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm'
import GoogleMap from '@/components/GoogleMap'

export default {
  name: 'Home',
  components: {
    SearchForm,
    GoogleMap
  }
}
</script>
