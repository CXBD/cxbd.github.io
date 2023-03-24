// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'

import MyLayout from './Layout.vue'

export default {
  ...Theme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
