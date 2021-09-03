<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <div class="container">
      <div class="row" style="background-color: white;">
        <div class="row">
          <h1>Konversi Rupiah Ke Bitcoin</h1>
          <h5>Kurs {{ 1 | currency('USD ')}} = {{14000 | currency('IDR ')}}</h5>
        </div>
        <br>
        <div class="row">
          <b-form-input v-model="value" type="number" debounce="500" @change="someHandler"></b-form-input>
          <money-format v-model="value" :value="cost" 
            :locale='en' 
            :currency-code='USD' 
            :subunits-value=true 
            :hide-subunits=true>
          </money-format>
          <!-- <b-button v-on:click="gantiNama()">I am a Button</b-button> -->
          <!-- <div class="mt-2">Value: {{ hasil | currency }}</div> -->
        </div>
        <div class="mt-2">{{ hasilidr | currency('IDR ')}} = BTC {{ hasilnya }} </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue2Filters from 'vue2-filters'

export default {
  data() {
    return {
      value: '',
      hasilnya:'',
      hasilidr:''
    }
  },
  mixins: [Vue2Filters.mixin],
  computed:{
    hasil: function () {
      return parseInt(this.value) * 0.00007;
      // console.log(hasil)
    },
    btc: function () {
      var total = parseInt(this.hasil) * 0.000020; 
      return total;
    },
  },
  methods: {
    someHandler(){
      axios.get(`https://blockchain.info/tobtc?currency=USD&value=`+this.hasil)
      .then(res=> {
        console.log(res.data)
        this.hasilidr = this.value
        this.hasilnya = res.data
      })
    }
  }
}
</script>
