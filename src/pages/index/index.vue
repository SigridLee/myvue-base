<template>
  <div class="index">
    <div class="content">Hello, World</div>
  </div>
</template>

<script>
  import store from '../../store/index'
  import { listPerfumeComment } from '../../api/index'
  // import data from '../../util/mock'
  export default {
    data() {
      return {}
    },
    beforeMount() {
      store.commit('setUserId', '8fa28ac1771748cda470495d4f6b2491')
    },
    mounted() {
      // this.getList()
      // console.log(data, '====')
      // console.log(Array.prototype)
    },
    methods: {
      getList() {
        listPerfumeComment().then(res => {
          if (res.errCode === '0') {
            console.log(res)
          } else {
            this.$vux.toast.text(res.errMsg)
          }
        })
      }
    }
  }
</script>

<style lang='scss' scoped>
@import '../../assets/css/base.scss';
.index {
  .content {
    color: red;
  }
}
</style>
