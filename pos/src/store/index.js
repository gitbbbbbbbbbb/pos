import { createStore } from 'vuex'
import app from './modules/app'
import user from './modules/user'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import settings from './modules/settings'
import getters from './getters'
import socket from './modules/socket'
import tenterprise from './modules/tenterprise'
import supplier from './modules/supplier'
const store = createStore({
  modules: {
    app,
    user,
    tagsView,
    permission,
		settings,
		socket,
    tenterprise,
    supplier,
  },
  getters
});


export default store
