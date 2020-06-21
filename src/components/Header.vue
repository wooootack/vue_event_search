<template>
  <header>
  <div class="header-inner">

    <div class="logo">
      <img src="@/assets/logo.png" />
    </div>

    <nav class="header-nav">

      <ul class="header-nav-list">

        <router-link to="/" @click="homeClicked">
          <li class="header-nav-item" v-bind:class="{ select:isHome }">Home</li>
        </router-link>

        <router-link to="/about" @click="aboutClicked">
          <li class="header-nav-item" v-bind:class="{ select:isAbout }">About</li>
        </router-link>

        <router-link to="#" @click="contactClicked">
          <li class="header-nav-item" v-bind:class="{ select:isContact }">Contact</li>
        </router-link>

      </ul>

    </nav>
  </div>
</header>
</template>

<script>
export default {
  data () {
    return {
      isHome: true,
      isAbout: false,
      isContact: false
    }
  },
  methods: {
    homeClicked () {
      this.isHome = true
      this.isAbout = false
      this.isContact = false
    },
    aboutClicked () {
      this.isHome = false
      this.isAbout = true
      this.isContact = false
    },
    contactClicked () {
      this.isHome = false
      this.isAbout = false
      this.isContact = true
    }
  }
}
</script>

<style scoped>

header {
  box-sizing: border-box;
  width: 100%;
}

.header-inner {
  display: flex;
  align-items: center;
  max-width: 1024px;
  height: 60px;
  padding: 0 0.8em;
  margin: 0 auto;
  font-size: 1.2em;
}

.header-nav-list {
  display: inline-block;
}

.header-nav-item {
  float: left;
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
  color: #ccc;
  text-align: center;
  list-style: none;
}

.header-nav-item a {
  text-decoration: none;
}

.select {
  color: #444;
}

.header-nav-item:hover {
  background: #eee;
}

.logo img {
  width: 70px;
}

@media screen and (max-width: 480px) {
  .header-nav-list {
    display: none;
  }

  .header-nav {
    margin: 0 0 0 auto;
  }
}

</style>
