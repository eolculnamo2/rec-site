import Vue from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Cards from './Cards.vue'
import Articles from './Articles.vue'
Vue.component("Header",Header)
Vue.component("Footer",Footer)
Vue.component("Cards",Cards)
Vue.component("Articles",Articles)

//Header
new Vue({
    el: "#header",
    render: h=> h(Header)
})

//Footer
new Vue({
    el: "#footer",
    render: h=> h(Footer)
})

//Homepage cards
new Vue({
    el: "#cards",
    render: h=>h(Cards)
})

//Articles
new Vue({
    el: "#articles",
    render: h=>h(Articles)
})