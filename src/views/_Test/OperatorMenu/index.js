import HiOperatorMenu from 'components/HiMenu/OperatorMenu'

export default require('./index.pug')({
  methods: {
    updateItem() {
      console.log('update operator')
    },
    deleteItem() {
      console.log('delete operator')
    }
  },
  components: {
    HiOperatorMenu
  }
})
