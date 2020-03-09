<template>
  <div ref="content">
                <span> PDF Tready </span>
    <div class="w-full">
        <div class="d-block w-1/2">
          <div class="d-block w-full">
            <ul>
              <li class="w-1/2 text-left d-block">
                <span> Name: </span>
              </li>
              <li class="w-1/2 text-left d-block">
                <span> Reynaldi Rp</span>
              </li><br>
              <li class="w-1/2 text-left d-block">
                <span> Account Id: </span>
              </li>
              <li class="w-1/2 text-left d-block">
                <span> 12345678</span>
              </li><br>
              <li class="w-1/2 text-left d-block">
                <span> Email: </span>
              </li>
              <li class="w-1/2 text-left d-block">
                <span> ReynaldiRp@gmail.com</span>
              </li><br>
              <li class="w-1/2 text-left d-block">
                <span> Alamat: </span>
              </li>
              <li class="w-1/2 text-left d-block">
                <span>  Jl. Setrasari Kulon V No.6, Sukarasa, Kec. Sukasari, Kota Bandung, Jawa Barat 40152</span>
              </li><br>
            </ul>
          </div>
        </div>
        <div class="d-block w-1/2">
          <img class="text-right float-right" src="@/assets/images/logo.jpg" alt />
        </div>
    </div>

  </div>
</template>

<style lang="scss">
.w-full{
  width: 100% !important;
}
.w-1\/2{
  width: 50% !important;
}
.text-left{
  text-align: left;
}
.text-right{
  text-align: right;
}
.float-right{
  float: right;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
