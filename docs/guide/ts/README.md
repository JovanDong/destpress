
### TypeScript的价值是什么

- 中大型项目，可以使得项目更加健壮，类似于Java
- TS提供的类型系统可以帮助我们在写代码时提供丰富的语法提示
- 在编写代码时会对代码进行类型检查从而避免很多线上错误


#### 什么是TypeScript
- TypeScript是javascript的超集，遵循es5/es6规范


### 安装环境
- 全局安装typescript对TS进行编译

```js
npm install typescript -g
tsc init  // 生成tsconfig.json
``` 

### 工程化

- 初始化后开始安装rollup
```js
npm install rollup
npm install typescript 
npm install rollup-plugin-typescript2 // 关联rollup和typescript
npm install @rollup/plugin-node-resolve rollup-plugin-serve -D

npx tsc --init  //生成tsconfig.json配置文件
```

- 新建 文件夹 src/index.ts
- 新建 rollup.config.js
```js
import ts from 'rollup-plugin-typescript2';
import { nodeResolve} from '@rollup/plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import path from 'path'
export default {
  input:'./src/index.ts',
  output:{
    file:path.resolve('./dist/bundle.js'), // 打包的文件名
    format:'iife', //打包出来的结果是一个自执行函数 
    sourcemap:true
  },
  plugins:[
    nodeResolve({
      extensions: ['.js','.ts'] // 解析文件的格式
    }),
    ts({
      tsconfig:'tsconfig.json'
    }),
    serve({
      open:true,
      openPage:"/public/index.html",
      port:3000
    })
  ]
}
```
- 新建 文件夹public/index.html
- 配置package.json文件 
```js
    "module": "ESNext",   
```
```js
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "rollup -c -w --bundleConfigAsCjs"
  },
```
- 这个过程中可能会遇到rollup运行报错，主要原因是rollup对于npm>v8.0.0,node>v14.18，查看自己的版本号进行升级
- rollup 打包不符合common.js规范 加配置--bundleConfigAsCjs


####  ts的原始数据类型
- Number,String

