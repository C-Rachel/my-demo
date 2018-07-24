# VUE

这个项目基于 [vue-cli](https://cli.vuejs.org/) 创建 ， 可参考[中文文档](https://github.com/vuejs/vue-docs-zh-cn/tree/master/vue-cli)

#### 安装vue-cli

```
npm install -g @vue/cli
vue create my-project
```
安装vue-cli 后 ```cd```到要创建项目的地方 执行```vue create my-project```  其中```my-project```为文件名

可参考 [文档](https://cli.vuejs.org/guide/creating-a-project.html#vue-create)

#### vue-cli中使用sass
则需安装```sass-loader```依赖
```
npm install sass-loader node-sass --save-dev
```
```.vue```中可以使用sass ```scoped```可不加
```
<style lang="scss" scoped>
	div {
		width: 50px;
		height: 50px;
		background-color: silver;
		p {
			color: #42B983;
		}
	}
</style>
```

#### npm install报错
```
npm ERR! Unexpected token < in JSON at position xxx
```
可尝试```rm package-lock.json``` 再 ```npm install```

参考[文档](https://github.com/npm/npm/issues/17340)
