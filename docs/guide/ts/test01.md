### 学习ts 就是学习TS中的类型
- string number boolean 元组 object undefined null void never symbol bigint
- 常见的类型：基础类型、高级类型 = 自义定类型  ts包含中内置了很多类型
- TS中冒号后面都是类型标识，等号后面就是值

- 1)ts 类型是从安全角度去出发的，一切从安全角度来触发
- 2)ts 是在开发的时候来检测 不是运行的时候， 所以代码并没有被真正的执行
- 3)ts 中是具备一个类型推导的特点，不是所有的变量都需要增加类型。只有无法推断或者推断错误的时候我们才需要编写类

- ts void类型，最后编译以后 类型就消失了

#### 原始类型数据进行标识
```js
// let name:string = 'dyy'
let age:Number = 30
let address: string = '上海市，徐家汇'
```

- 原始数据类型都采用小写类型， 大写类型（包装类型）用来描述实例
```js
let s1:String = new String('abc') //基本数据类型不建议这么去写
// 'abc'.charAt //基本数据类型调用方法的时候会被包装成对象
// 包装对象
```

- 数组的类型：[]数组的概念 数组多个相同类型的数据集合, js数组中可以随意存放
- 类型[] Array<类型>都可以用于声明数组
```js
let arr1:number[] = [1,2,3,4];
let arr2:String[] = ['1','2','3'];
let arr3:Array<number> = [1,2,3,4]
```

- 数组要求的事存储的格式按照特定的类型存储
```js
// 元组 tuple
let tuple:[string,number,string] = ['1',2,'3']
// 你赋予的值要求符合这个结构和顺序,元组在新增内容的时候，不能增加额外的类型的值，只能是已有的，而且增加无法访问
tuple.push(1)
```

- 枚举： 自带类型的对象（自己有类型，就是一个对象）
- 约定一组格式我们会用枚举 状态码 权限 数据格式  标志位

- 维护一组常量的时候 可以采用枚举,没有设置默认值的时候是从0 自增的

```js
enum STATUS {
  'OK', 
  'NO_OK', 
  'NOT_FOUND' 
}
console.log(STATUS['OK']) //0
console.log(STATUS['NO_OK']) //1
console.log(STATUS['NOT_FOUND']) //2

enum STATUS1 {
  'OK' =1,
  'NO_OK',
  'NOT_FOUND'
}
console.log(STATUS1['OK']) //1
console.log(STATUS1['NO_OK']) //2
console.log(STATUS1['NOT_FOUND']) //3

// 字符串枚举
enum  STATUS2 {
  Red='红色',
  Blue='蓝色',
  Green='绿色'
}
console.log(STATUS2['Red']) // 红色
console.log(STATUS2['Blue']) // 蓝色
console.log(STATUS2['Green']) // 绿色
```

- 类型可以进行反举
- null和undefined类型正常情况下只能赋予给null 和 undefined

```js
const u:undefined = undefined
const n:null = null
```

- 如果禁用非严格null检测，null和undefined可以复制任何类型
- void 类型代表是空类型， void一般只是用来标识函数的返回值( undefined看可以看成是void的子集)
- any 会导致类型检测失败，当不知道类型的时候标unknow 比undefined更加适合
```js
function a():void{
  return undefined
}
// never 永远不，永远达不了
// 函数无法执行
function whileTrue():never{
  while(true) {}
}
function throwError():never {
  throw Error();
}


function validCheck(v:never) {}
function toArray(val:number|string|boolean) {
  if(typeof val === 'number' ){
    return val.toString().split('').map(Number)
  }
  if(typeof val === 'string' ){
    return val.split('').map(Number)
  }
  if(typeof val === 'boolean' ){
    return val.toString().split('').map(Number)
  }
  validCheck(val)
}
toArray('abc')
```


```js
const symbol:symbol =  Symbol()
// const bigint = Bigint(Number.MAX_SAFE_INTEGER+1)
// 真正开发的时候 肯定采用模块开发
```



