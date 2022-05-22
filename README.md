# lego

可拖拽页面生成器原型，可以在此基础上开发更多功能

## Preview

[https://jasonbai007.github.io/lego](https://jasonbai007.github.io/lego)

## Tech Stack

1. vue 2.x
2. vue-router
3. vuex
4. element-ui
5. vuedraggable

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Deploy for Github Pages

```
npm run deploy
```

## 思路

1. 左侧：vuedraggable（不可自己内部拖拽排序） 包裹的一些常用组件，每个组件是一个对象，内有类型、配置项
2. 中间：el-form 包裹，中间层 vuedraggable（自身内部自由拖拽），内层是表单 item，每个 item 根据类型渲染
3. 右侧：每个 item 的配置板块
4. 两个 vuedraggable 的 group 设置相同的 name，就可以从左侧拖拽到中间渲染区域了
5. 当前选中的组件 id 放到全局 store 里
6. 如果是容器元素，就需要递归当前组件
7. 每次选中一个组件，就把对应的数据对象 emit 出去，在右侧接收

## Docs

- [Flat UI](https://designmodo.github.io/Flat-UI/)
- [Vue.Draggable 使用文档总结](https://juejin.cn/post/6844904150350692366)
- [Vue.Draggable 官方示例](https://sortablejs.github.io/Vue.Draggable/#/simple)
- [vue 拖拽表单生成器](https://juejin.cn/post/7065863860669906952)
