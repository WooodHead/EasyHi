import {mapGetters} from 'vuex'

import classes from './index.styl'

export default require('./index.pug')({
  name: 'member-index',
  data() {
    return {
      classes,
      ...this.$route.meta.data
    }
  },
  computed: {
    ...mapGetters(['mobile'])
  }
})
