import Button from './components/Button.vue'

export { Button }

export default {
  install(app) {
    app.component('Button', Button)
  }
}