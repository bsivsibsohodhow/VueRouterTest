Vue.use(VueRouter);
Vie.use(VeeValidate);

const routes = [{
        path: '/',
        component: 'testing'
  }, {
        path: '/reader',
        components: 'reader'
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  watch: {},
  data: { 
    msg: 'Hello, I"m testing' 
  },
  methods: {},
  router
})
