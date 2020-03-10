<template>
  <div >
                <span> PDF Tready </span>
                <button @click="downloadWithCSS">Download PDF WITH CSS</button>
    <div class="w-full" ref="content">
      <vs-row>
        <vs-col class="d-block w-1/2">
            <vs-row>
              <vs-col class="w-1/2 text-left d-block">
                <span> Name: </span>
              </vs-col>
              <vs-col class="w-1/2 text-left d-block">
                <span> Reynaldi Rp</span>
              </vs-col><br>
              <vs-col class="w-1/2 text-left d-block">
                <span> Account Id: </span>
              </vs-col>
              <vs-col class="w-1/2 text-left d-block">
                <span> 12345678</span>
              </vs-col><br>
              <vs-col class="w-1/2 text-left d-block">
                <span> Email: </span>
              </vs-col>
              <vs-col class="w-1/2 text-left d-block">
                <span> ReynaldiRp@gmail.com</span>
              </vs-col><br>
              <vs-col class="w-1/2 text-left d-block">
                <span> Alamat: </span>
              </vs-col>
              <vs-col class="w-1/2 text-left d-block">
                <span>  Jl. Setrasari Kulon V No.6, Sukarasa, Kec. Sukasari, Kota Bandung, Jawa Barat 40152</span>
              </vs-col><br>
              <vs-col class="w-1/2 text-left d-block">
                <span> Date: </span>
              </vs-col>
              <vs-col class="w-1/2 text-left d-block">
                <span>  14 November 2018</span>
              </vs-col><br>
              <vs-col class="w-1/2 text-left d-block">
                <span> Account Currency: </span>
              </vs-col>
              <vs-col class="w-1/2 text-left d-block">
                <span>  SGD</span>
              </vs-col><br>
            </vs-row>
        </vs-col>
        <vs-col class="d-block w-1/2">
          <img class="text-right pt-5 float-right" src="@/assets/images/logo.jpg" alt />
        </vs-col>
        <vs-col class="w-full text-left pl-8">
          <h3 class="mb-0">Daily Statement - Close of Business 14 November 2018 22:00 (London local time)</h3>
          <span>Amounts are rounded to 2 decimal places for display purposes.</span><br>
          <span>Transaction times are in Singapore local time.</span>
        </vs-col>
        <vs-col class="w-1/2 text-left pl-8">1
          <vs-row>
            <vs-col class="w-full" style="background-color:blue;">a</vs-col>
          </vs-row>
        </vs-col>
        <vs-col class="w-1/2 text-left pl-8">2</vs-col>
      </vs-row>
    </div>

  </div>
</template>
<script>
import Jspdf from 'jspdf'
import html2canvas from 'html2canvas'

export default {
  methods: {
    downloadWithCSS () {
      const doc = new Jspdf('l', 'mm', 'a4')
      /** WITH CSS */
      var canvasElement = document.createElement('canvas')
      html2canvas(this.$refs.content, { canvas: canvasElement }).then(function (
        canvas
      ) {
        const img = canvas.toDataURL('image/jpeg', 0.8)
        doc.addImage(img, 'JPEG', 5, 5, 280, 50)
        doc.save('sample.pdf')
      })
    }
  }
}
</script>

<style lang="scss">
.w-full{
  width: 100% !important;
}
.w-1\/2{
  width: 50% !important;
}
.text-left{
  text-align: left !important;
}
.text-right{
  text-align: right;
}
.float-right{
  float: right;
}
.pr-5 {
    padding-right: 1.25rem!important;
}
.pt-5 {
    padding-top: 1.25rem!important;
}
.pl-10 {
    padding-left: 2.5rem!important;
}
.pl-8 {
    padding-left: 2rem!important;
}
.pt-5 {
    padding-top: 1.25rem!important;
}
.mb-10 {
    margin-bottom: 2.5rem!important;
}
.mt-3 {
    margin-top: .75rem!important;
}
.p-0 {
  padding: 0!important;
}
.mb-0 {
  margin-bottom: 0!important;
}
.pl-4 {
    padding-left: 1rem!important;
}
.text-center {
    text-align: center!important;
}
.text-grey-secondary {
    color: #97949e!important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antiavs-colased;
  -moz-osx-font-smoothing: grayscale;
  text-avs-colgn: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-vs-colnk-exact-active {
      color: #42b983;
    }
  }
}
</style>
