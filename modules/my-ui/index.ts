import Select from "./Select/index.vue"
import Link from "./Link/index.vue"
//  

const COMPONENTS = [
  Select,
  Link
]

// 按需加载 
export const MySelect = (Vue: any) => { Vue.component("MySelect", Select) }
export const MyLink = (Vue: any) => { Vue.component("MyLink", Link) }

// 全局加载 
const MyUI: any = {}

MyUI.install = function (Vue: any) {
  // Vue.component("MySelect", MySelect)
  // Vue.component("MyLink", MyLink)

  COMPONENTS.forEach((component) => {
    Vue.component(component.name, component)
    Vue.component("MySelect", Select)
    Vue.component("MyLink", Link)
  })
}

export default MyUI
