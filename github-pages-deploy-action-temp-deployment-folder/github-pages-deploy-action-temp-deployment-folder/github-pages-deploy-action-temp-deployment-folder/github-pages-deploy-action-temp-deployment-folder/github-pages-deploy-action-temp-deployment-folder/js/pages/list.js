import Vue from 'vue'
import $ from 'jquery'

export default Vue.component('list', {
  template: `
  <div>
    <div class="list" v-for="item in listData" :key="item.id">
      <img :src="item.images[0]" />
      <router-link to="/list/detail">
        <h5>{{item.title}}</h5>
      </router-link>
      <hr />
    </div>

    <br>
    <button id="page-btn" @click="getlist(page === '1' ? '2' : '1')">
      {{ page === '1' ? '下一页' : '上一页' }}
    </button>
  </div>
  `,
  data() {
    return {
      listData: [],
      page: '1'
    }
  },
  created() {
    // 显示第一页
    this.getlist('1')
  },
  methods: {
    getlist(data) {
      $.get(`./data/list-data-page-${data}.json`, (result) => {
        this.listData = result.stories
        this.page = data
      })
    }
  }
})