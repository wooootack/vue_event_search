<template>

  <b-navbar toggleable="lg" type="dark" variant="info">

    <b-navbar-brand>
      <router-link class="title" to="/">TechLink</router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">

        <b-nav-item right class="header-item">
          <router-link to="/">Home</router-link>
        </b-nav-item>

        <b-nav-item right class="header-item">
          <router-link to="/about">About</router-link>
        </b-nav-item>

      </b-navbar-nav>
    </b-collapse>

  </b-navbar>

</template>

<script>
export default {}
</script>

<style scoped>

.header-item {
  text-align: center;
}

.header-item a {
  color: #FFF;
}

.header-item a.router-link-exact-active {
  font-weight: bold;
  color: #FFF;
}

.title {
  font-weight: bold;
  color: #FFF;
}

.title:hover {
  text-decoration: none;
}

</style>
