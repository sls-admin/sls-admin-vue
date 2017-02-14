# vue2-admin

> 这是一个功能强大的自动化后台框架基础模板

在线demo：[https://vue2.slsadmin.sailengsi.com](https://vue2.slsadmin.sailengsi.com "演示地址")

``` bash
# get project
git clone https://gitea.sailengsi.com/product/sls-admin.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 访问demo，或者通过本地启动的server，将会看到一个登陆界面，测试账号

1. sls-1/sls-1
2. sls-2/sls-2
3. sls-3/sls-3

使用以上任意一个账号登录之后，即可体验。**由于是测试账号，所以这些账号没有修改密码权限，你懂得！**


这个系统有以下几点优势

1. 功能强大 
3. 可拓展性和可维护性强

欢迎体验，如果您觉得不错，欢迎分享。

> 简单的减少下项目里面的功能，登录成功之后，会在头部看到两个模块。
功能模块，就是纯粹的静态演示，没有交互。
演示模块，是一个完整的与后台交互模块。

### 功能模块如下
- 列表
- 表单
- 图表
- vuex

### 演示模块如下

< 这是一个真实的交互模块，后台用到了权限，权限结构如下：
- 所有接口，必须通过token获取，登录除外
- 当前登录用户操作的数据，必须是自己创建的，或者是自己添加的用户创建的(可以理解为自己的子用户)

### 功能列表如下

- 用户功能，可增删改查
- 文章功能，可增删改查，此功能主要为了体验wangeditor富文本编辑器的使用
- 订单功能，可增查，此功能目的是为了演示用图表来渲染统计图的效果，所以只写了增查两个接口
- 图表功能，可查，初始化时为空，可通过点击按钮动态更新图表数据