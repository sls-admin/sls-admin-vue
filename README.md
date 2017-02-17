# sls-admin

> 这是一个功能强大的自动化后台框架基础模板，基于vue2实现，用到的技术包含：vue2,vue-router,vuex2,axios,ElementUI。

**以下有几项需注意：**
 1. 测试账号，所以这些账号没有修改密码权限，你懂得。
 2. 服务端使用的https，所以本地开发时，从http代理到服务器会不成功，正在解决这个问题，有需要的可先克隆到本地看下代码。
 2. 项目第一级目录和bower.json可以直接忽略。
 3. 此项目不是一个框架，没有很多的页面组件等，因为这不是我做这个的本意。
 4. 此项目重点突出在架构模式上，这个架构模式，可以让我们在开发中，很方便的拓展与维护，并且可以保持结构清晰的状态；相比那些有很多页面，但架构混乱的模式来说，一个真正的前端应该更在意项目的架构。
 5. 如果您有什么问题，可提issues，也可直接加本人QQ：823393100。
 6. 广告：个人官方博客：https://www.sailengsi.com 交流技术，交流心得。

**关于第二项，如果有好的想法或者解决办法，欢迎留言指出。**

在线demo：[https://vue2.slsadmin.sailengsi.com](https://vue2.slsadmin.sailengsi.com "演示地址")，以下是测试账号
1. sls-1/123456
2. sls-2/123456
3. sls-3/123456

**如果您觉得项目还不错，欢迎分享...**

使用步骤**(由于第二个问题的存在，您可能无法在本地调试时调用我服务器的接口)**
``` bash
# get project
git clone https://gitea.sailengsi.com/product/sls-admin.git  or  git clone https://github.com/sailengsi/sls-admin.git

#进入项目目录
cd sls-admin/vue2

#修改api代理（目前这个方法不可行，正在解决...）
- 把sls-admin/vue2/config中的index.js打开
- 找到 target: 'http://slsadmin.api.sls.com' 这一行
- 修改target值为：'https://slsadmin.api.sailengsi.com'

# 安装依赖
npm install

# 启动server
npm run dev

# 编译
npm run build
```

## 简单的介绍下项目里面的功能。
> 登录成功之后，会在头部看到两个模块。
- 功能模块，就是纯粹的静态演示，没有交互，功能列表如下：
    - 列表
    - 表单
    - 图表
    - vuex
- 演示模块，是一个完整的与后台交互模块，功能列表如下：
    - 后台做了权限管理，权限结构如下：
        - 所有接口，必须通过token获取，登录除外
        - 当前登录用户操作的数据，必须是自己创建的，或者是自己添加的用户创建的(可以理解为自己的子用户)
    - 用户功能，可增删改查
    - 文章功能，可增删改查，此功能主要为了体验wangeditor富文本编辑器的使用
    - 订单功能，可增查，此功能目的是为了演示用图表的使用，所以只写了增查两个接口
    - 图表功能，可查，初始化时为空，可通过点击按钮动态更新图表数据

