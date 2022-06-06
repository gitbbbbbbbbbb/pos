import {
	createApp
} from 'vue'
import Cookies from 'js-cookie'

import ElementPlus from 'element-plus'
import elZhCn from 'element-plus/lib/locale/lang/zh-cn' // 中文语言
import 'dayjs/locale/zh-cn'
import '@/assets/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import directive from './directive' // directive
// 注册指令
import plugins from './plugins' // plugins
// import { download } from '@/utils/request'
import signalR from '@/utils/signalR'
import vueI18n from './i18n/index'

// svg图标
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'
import elementIcons from '@/components/SvgIcon/svgicon'

import './permission' // permission control

import {
	getConfigKey
} from "@/api/system/config";
import {
	getDicts
} from "@/api/system/dict/data";
import {
	parseTime,
	resetForm,
	addDateRange,
	handleTree,
	selectDictLabel,
	download
} from '@/utils/ruoyi'

// 分页组件
import Pagination from '@/components/Pagination'
// 自定义表格工具组件
import RightToolbar from '@/components/RightToolbar'
// 文件上传组件
import FileUpload from "@/components/FileUpload"
// 图片上传组件
import ImageUpload from "@/components/ImageUpload"
// 图片预览组件
import ImagePreview from "@/components/ImagePreview"
// 字典标签组件
import DictTag from '@/components/DictTag'
// el-date-picker 快捷选项
import dateOptions from '@/utils/dateOptions'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

// function useTable(app: App) {
// 	app.use(VXETable)
// }

const app = createApp(App)
signalR.init(
	import.meta.env.VITE_APP_SOCKET_API)
app.config.globalProperties.signalr = signalR
// 全局方法挂载
app.config.globalProperties.getConfigKey = getConfigKey
app.config.globalProperties.getDicts = getDicts
app.config.globalProperties.download = download
app.config.globalProperties.parseTime = parseTime
app.config.globalProperties.resetForm = resetForm
app.config.globalProperties.handleTree = handleTree
app.config.globalProperties.addDateRange = addDateRange
app.config.globalProperties.selectDictLabel = selectDictLabel
app.config.globalProperties.dateOptions = dateOptions

// 全局组件挂载
app.component('DictTag', DictTag)
app.component('Pagination', Pagination)
app.component('UploadFile', FileUpload)
app.component('UploadImage', ImageUpload)
app.component('ImagePreview', ImagePreview)
app.component('RightToolbar', RightToolbar)
app.component('svg-icon', SvgIcon)

app.use(router)
app.use(store)
app.use(plugins)
app.use(elementIcons)
app.use(vueI18n)
app.use(VXETable)

directive(app)
// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
	// locale: elZhCn,
	// 支持 large、default、small
	size: Cookies.get('size') || 'small'
})

app.mount('#app')
