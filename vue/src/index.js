import Vue from "vue/dist/vue.js"; // See note about import below
import Vuex from "vuex";
import storePlugin from "./vuex/vuex_store_as_plugin";
import HelloState from "./components/HelloState";

Vue.use(Vuex);
Vue.use(storePlugin);
Vue.config.productionTip = false;

/* NOTE: in order to retrieve props from static HTML, we must instantiate Vue with
 * el/component style below instead of the render(h) -> h(MyWidget) / $mount syntax. However, doing so will
 * utilize a runtime build without the template compiler. To work around this, vue must be imported
 * from dist/vue/vue. Be careful about changing this import or the way vue is instantiated. */

new Vue({
      el: "#hello_world_a",
        components: {HelloState}
});
new Vue({
      el: "#hello_world_b",
        components: {HelloState}
});

// Include any other components on the page
