<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <!-- <b-table striped hover :items="items" :fields="fields"></b-table>  -->
      <div class="container">
        <div class="row" style="background-color:white;">
            <h1>Harga Bitcoin Hari Ini</h1>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Mata Uang</th>
                  <th scope="col">Harga Beli Bitcoin</th>
                  <th scope="col">Harga Jual Bitcoin</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ btc_aud_name }}</td>
                  <td>{{ btc_aud.buy }}</td>
                  <td>{{ btc_aud.sell}}</td>
                </tr>
                <tr>
                  <td>{{ btc_eur_name }}</td>
                  <td>{{ btc_eur.buy }}</td>
                  <td>{{ btc_eur.sell}}</td>
                </tr>
                <tr>
                  <td>{{btc_gbp_name}}</td>
                  <td>{{ btc_gbp.buy }}</td>
                  <td>{{ btc_gbp.sell}}</td>
                </tr>
                <tr>
                  <td>{{ btc_jpy_name }}</td>
                  <td>{{ btc_jpy.buy }}</td>
                  <td>{{ btc_jpy.sell}}</td>
                </tr>
                <tr>
                  <td>{{ btc_usd_name }}</td>
                  <td>{{ btc_usd.buy }}</td>
                  <td>{{ btc_usd.sell}}</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import Vue2Filters from 'vue2-filters'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  mixins: [Vue2Filters.mixin],
  data() {
    return {
      btc_aud: [],
      btc_eur: [],
      btc_gbp: [],
      btc_jpy: [],
      btc_usd: [],
      btc_aud_name: "Dollar Australia",
      btc_eur_name: "Euro Eropa",
      btc_gbp_name: "Poundsterling Inggris",
      btc_jpy_name: "Yen Jepang",
      btc_usd_name: "Dollar Amerika",
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
      axios.get('https://blockchain.info/ticker').then(res => {
        console.log(res)
        this.btc_aud = res.data.AUD
        this.btc_eur = res.data.EUR
        this.btc_gbp = res.data.GBP
        this.btc_jpy = res.data.JPY
        this.btc_usd = res.data.USD
        // this.btc_aud_name = res.data.AUD.symbol
        // this.btc_eur_name = res.data.EUR.symbol
        // this.btc_gbp_name = res.data.GBP.symbol
        // this.btc_jpy_name = res.data.JPY.symbol
        // this.btc_usd_name = res.data.USD.symbol
        console.log('ini data btc masing masing daerah :', this.btc_usd)
      }).catch((err) => {
        console.log(err);
      })
    },
  }
}
</script>
