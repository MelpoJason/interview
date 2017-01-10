**little task for Interview**

Question 1:
    对于web应用来说，在前端的js打包时可以使用webpack进行压缩，同时合并、减少http对后端的请求
    ，在服务器端使用Gzip压缩+开启负载均衡+CDN
    
Question 2:
    css解析 --> 将解析结果与HTML解析完成后的DOM结构进行attachment形成一棵渲染树 -->
    浏览器根据DOM tree和对应的style rules生成具体结果（浏览器选择时会从右到左进行选择，是一种逆向搜索，节省匹配时间成本）
    
Question 3:
    原型继承（prototype and inheritance）、利用构造函数继承（只记得这两个好像还有个混合继承）
    
Question 4:
    Closure就是一个方法，用来指定一些独立的变量，换句话说就是这个方法（闭包）记住了创建在这个闭包中的变量的环境（使用地方）
    一般的使用情境在于用来创建内部变量，使得这些变量不能被外部随意修改（污染），同时又可以通过指定的函数接口来操作，我的理解
    就是规范化对js变量的使用。
    
Question 5:
    因为我是后台出身的（Java）一般使用servlet的filter对http header头添加'Access-Control-Allow-Origin:[url]' 
    'Allow-Control-Allow-Method:POST,GET,PUT,DELETE'好像还有几个配置是对类型和生命周期的不过最主要的是这两个
    前端的话可以使用jsonp进行跨域请求，jsonp是使用js中的script标签中src节点（因为src节点可以进行跨域访问）获取不同
    服务端口下的跨域请求（用得少）

Question 6:
    jasmine包中对函数模拟输入和期望输出值做比对，还有做代码覆率检测
    
Question 7:
    Webpack, server-side rendering, polyfill, ES5/6/7, TS, SASS
    
Question 8:
    
    
Question 9:
    
