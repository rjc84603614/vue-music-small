
(function (Vue) {
	// 1. 定义（路由）组件。
	// 可以从其他文件 import 进来
	var loadTemplate = function(name){
		if(document.getElementById(name + '_tmpl') != null){

			return document.getElementById(name + '_tmpl').innerHTML
			alert(1);
		}
	}

	const Home = { 
		// template: '<img src="assets/img/home.png" alt="" width="100%">' 
		template: loadTemplate('home')}
	const List = { template: loadTemplate('list')}
	const Item = { template: loadTemplate('item')}
	// 2. 定义路由
	// 每个路由应该映射一个组件。 其中"component" 可以是
	// 通过 Vue.extend() 创建的组件构造器，
	// 或者，只是一个组件配置对象。
	// 我们晚点再讨论嵌套路由。
	const routes = [
	  { path: '/home',
	    name:'home',
	    component: Home },
	  { path: '/songs',                 
	    name:'list',
	    component: List },
	  { path: '/songs/:id', 
	    name:'item',
	    component: Item },
	  { path: '*', 
	    redirect: '/home' }
	]

	// 3. 创建 router 实例，然后传 `routes` 配置
	// 你还可以传别的配置参数, 不过先这么简单着吧。
	const router = new VueRouter({
	  routes // （缩写）相当于 routes: routes
	})


	// 4. 创建和挂载根实例。
	// 记得要通过 router 配置参数注入路由，
	// 从而让整个应用都有路由功能
	const app = new Vue({
	  router
	}).$mount('#app')

	// 现在，应用已经启动了！
})(Vue)



// (function(Vue){
	
// 	var Home = Vue.extend({
// 		template:loadTemplate('home')
// 	})
// 	var List = Vue.extend({
// 		template:'<h1>List</h1>'
// 	})
// 	var Item = Vue.extend({
// 		template:'<h1>Item</h1>'
// 	})
// 	var App = Vue.extend({})
// 	//
// 	//
// 	var router = new VueRouter()
// 	//
// 	//
// 	router.map({
// 		'/home':{
// 			component: Home
// 		},
// 		'/songs':{
// 			component: List
// 		},
// 		'/songs/:id':{
// 			component: Item
// 		}
// 	})
// 	router.start(App,'#app')
// })(Vue)