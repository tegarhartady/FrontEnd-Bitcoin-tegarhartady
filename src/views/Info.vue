<template>
    <div class="info">
        <div class="container">
            <div class="row" style="    background-color: white;">
                <div class="row">
                    <h1>Konversi Bitcoin Ke Rupiah</h1>
                    <h5>Kurs {{ 1 | currency('USD ')}} = {{14000 | currency('IDR ')}}</h5>
                </div>
                <br>
                <div class="row">
                    <b-form-input v-model="valuebtc" type="number" debounce="500"></b-form-input>
                    <!-- <b-button v-on:click="gantiNama()">I am a Button</b-button> -->
                    <!-- <div class="mt-2">Value: {{ hasil | currency }}</div> -->
                    <div class="mt-2"> BTC {{ valuebtc }} = {{ btckerupiah | currency('IDR ') }} </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue2Filters from 'vue2-filters'
export default {
    data() {
        return {
            valuebtc: '',
        }
    },
    mixins: [Vue2Filters.mixin],
    computed:{
    btckerupiah:function () {
      var btcrup = parseInt(this.valuebtc) * 706390763.65;
      return btcrup;
    }
  },
}
</script>
