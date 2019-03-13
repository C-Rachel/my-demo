# VUE

这个项目基于``vue-cli``创建

#### 安装vue-cli

```
npm install -g @vue/cli
vue create my-project
```
安装vue-cli 后 ```cd```到要创建项目的地方 执行```vue create my-project```  其中```my-project```为文件名,可参考 [文档](https://cli.vuejs.org/guide/creating-a-project.html#vue-create)

 `npm run serve`用于打开服务器
 <br />
 `npm run build`用于打包项目
  <br />
 `npm run lint`用于ES语法检查

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
		background-color: skyblue;
		p {
			color: #42B983;
		}
	}
</style>
```

如果执行以下命令后，再去重装node-sass时有可能会报错
```
npm uninstall node-sass
```
报错提示有```.node-sass.DELETE``` 去到```node_modules```删除该文件 再重新执行下载命令即可


#### npm install报错
```
npm ERR! Unexpected token < in JSON at position xxx
```
可尝试```rm package-lock.json``` 再 ```npm install```


### Other

|  Other  |   Other   |   Other   |
| ---------- | -----------  | -----------  |
| [vue-scrollto](https://www.npmjs.com/package/vue-scrollto) | [node-sass安装失败](https://segmentfault.com/a/1190000010984731) | [npm install报错](https://github.com/npm/npm/issues/17340) |
| [Vue](https://cli.vuejs.org/) |  |  |