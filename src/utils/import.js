import { defineAsyncComponent } from 'vue'


export default function createComponent(app) {
  app.component('default-layout', defineAsyncComponent(() => import("@/layouts/default_layout.vue")))
  app.component('auth-layout', defineAsyncComponent(() => import("@/layouts/auth.vue")))
}
