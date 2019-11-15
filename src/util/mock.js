var Mock = require('mockjs')
// var Random = require('mockjs').Random

var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      email: '@EMAIL', // 随机邮箱地址
      nickname: '@cname', // 随机生成中文名字
      'info|1-3': '生人勿近的玫瑰'
    }
  ]
})
export default data
// 输出结果
// console.log(JSON.stringify(data, null, 4))
