<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">King of Bots</router-link>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'pk_index' }">对战</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'ranklist_index' }">天梯榜</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'record_index' }">对战记录</router-link>
          </li>
        </ul>

        <span class="navbar-text dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kasugano_Sora
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link class="dropdown-item" :to="{ name: 'character_index' }">我的Bot</router-link>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">退出</a></li>
          </ul>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>

</script>

<style scoped>
</style>