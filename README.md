# phoenix-ui

## 关于phoenix-ui：
      
一个基于比较新的技术React完成的app ui组件库，提供了app中常见的组件样式和功能。好像这样就介绍完了。。。   
当然作为一个组件库，我们还是要有一些自认为的闪光点的：         
         
* 重写了基本的控件的表现形式（不就是样式吗？确是就是样式。。。)      
    例如，input、radio、checkbox、switch等，毕竟是个ui库嘛。
       
* 实现了页面元素的组件化：           
    即一个页面可以仅仅是一堆的组件拼接而成，大大减少使用者工作量。   
     
* 完善的文档和示例：             
    一边自认为完美无瑕，另一边使用者却一脸迷茫不知如何下手的组件库绝对不是好的组件库。        
    自认为好的组件库就应该是让使用者清晰明了的。就像我们的phoenix-ui一样。。     
 
* 样式和功能的分离：         
    这应该是我们介绍的重点，为了提供不同开发方式都适用的组件，我们决定将样式单独抽离出来。        
    也就是说该项目只谈功能不论样式，并且还会有基于jquery的组件库的出现（耐心等待请。。） 
    

** 当然了上面那么多也就是告诉大家，你要单独引入对应的样式项目phoenix-styles。   
方法有很多了，简单粗暴直接引，或者通过bower等。。        
抛个传送门：https://github.com/future-team/phoenix-styles。**
      
介绍的有点多，没兴趣的同学可以直接跳过去嘛（什么你说都看到这了？那就慢慢看吧，又不会影响什么）
## 安装
    ```
      		$ npm install phoenix-ui --save
    ``` 
## 使用
   ```
   		//引入方式、三种
   		var phoenix_ui = require('phoenix-ui');
   		//引入所需模块
   		import {Grid,Row,Col,Star} from 'phoenix-ui';
   		//全部引入
   		import * as Phoenixui from 'phoenix-ui';
   		
   		//react
   		<Row>
   		  <Col>
   		    <Star Rate={20}>
   		  </Col>
   		  <Col>
   		    <Input type='text' value='星星'/>
   		  </Col>
   		</Row>
   ```
## 文档
   一、本地直接查看：     
       doc/index.html，直接打开简单粗暴         
   二、文档地址：     
   待添加
## 示例
   一、查看下面的命令，gulp demo开发者模式可以直接查看或者通过anywhere找到对应examples/index.html      
   二、懒人必备，示例网址      
      http：／／     
   三、文档页的最下方其实我们是有的。。   
## Command


```
        $ cd phoenix-ui
        $ npm install 
        $ bower install 
		生成文件：
        build：npm run build || gulp build
        开发调试：
        demo：npm run demo || gulp demo
        测试：
        npm run test
        生成文档：
        npm run docBuild
        查看示例：
        $npm install anywhere -g
        $ anywhere
```


