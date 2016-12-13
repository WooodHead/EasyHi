import Vue from 'vue'

import {addClass, isPromise, pickObj, removeClass, on} from 'utils'
import classes from './index.styl'

export default require('./index.pug')({
  beforeCreate() {
    Object.defineProperty(Vue.prototype, '$modal', {
      value: this,
      readable: true,
      writable: __DEV__
    })
  },
  data() {
    return {
      classes,
      currModal: null,
      modals: []
    }
  },
  watch: {
    currModal: modal => (modal ? addClass : removeClass)(document.body, 'modal-open')
  },
  methods: {
    clear() {
      this.modals = []
    },
    close(modalId) {
      const currModalId = this.currModal && this.currModal.id
      modalId = modalId || currModalId
      if (!modalId) return
      let modal
      const index = this.modals.findIndex(m => m.id === modalId)
      index === -1 || (modal = this.modals[index])
      if (!modal) return
      const {options, props} = modal
      options.show = false
      if (!options.destroy) return
      props && props.transition ? on(this.$refs.modal[index].$el, 'animationend transitionend', () => {
        this.closeModal(modalId)
      }) : this.closeModal(modalId)
    },
    closeModal(modalId) {
      modalId === this.currModal && (this.currModal = null)
      this.modals.splice(this.modals.findIndex(m => m.id === modalId), 1)
    },
    mount(modal) {
      const m = this.modals.find(m => m.id === modal.id)
      m ? (modal = Object.assign(m, modal)) : this.modals.push(modal)
      this.currModal && this.currModal.id === modal.id || this.close()
      modal.options.show && (this.currModal = modal)
    },
    open(modal: {id: void | string | number, component: Object, options: void | Object, props: void | Object}) {
      modal.id = modal.id || 'modal_' + +new Date()
      modal.options = pickObj(modal.options, ['backdrop', 'destroy', 'show'])
      isPromise(modal.component)
        ? modal.component.then(component => this.mount(Object.assign(modal, {component}))) : this.mount(modal)
      return modal.id
    }
  }
})