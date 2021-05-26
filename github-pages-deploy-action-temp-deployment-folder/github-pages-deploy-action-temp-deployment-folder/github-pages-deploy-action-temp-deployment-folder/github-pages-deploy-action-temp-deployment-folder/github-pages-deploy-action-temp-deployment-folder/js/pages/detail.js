import Vue from 'vue'
import $ from 'jquery'

export default Vue.component('detail', {
  template: `
  <div class="detail">
    <img :src="result.image" />
    <h1>{{result.title}}</h1>
    <p v-html="result.body"></p>
  </div>
  `,
  data() {
    return {
      result: {}
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      $.get('./data/detail-data.json', (result) => {
        this.result = result
      })
    }
  }
})