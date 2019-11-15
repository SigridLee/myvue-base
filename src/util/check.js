// 校验中文
export let checkChinese = function(str) {
  return /[\u4e00-\u9fa5]/g.test(str)
}

// 校验英文
export let checkEnglish = function(str) {
  return /[A-Za-z]/g.test(str)
}

// 校验小写英文
export let checkLowerCaseEnglish = function(str) {
  return /[a-z]/g.test(str)
}

// 校验大写英文
export let checkUpperCaseEnglish = function(str) {
  return /[A-Z]/g.test(str)
}

// 校验数字
export let checkNumber = function(str) {
  return /\d/g.test(str)
}

// 校验是否是非负整数
export function checkPosNumber(str) {
  return /^\d+$/g.test(str)
}

// 把非中英文数字的字符过滤
export let filterEmoji = function(str) {
  return str.split(/[^a-zA-z\u4e00-\u9fa5\d]/).join('')
}

// 判断是否为手机号
export let isPoneAvailable = function(str) {
  return /^[1][0-9]{10}$/.test(str)
}

// 过滤表情
export let filterEmojis = function(str) {
  return str.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, '')
}

// 去除空格
export let removeAllSpace = function(str) {
  return str.replace(/\s+/g, '')
}

// 去两端空格
export function aroundTrim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

// 校验字符整个是否由中英文数字组成
export let checkCN = function(str) {
  return /^[a-zA-z\u4e00-\u9fa5\d]+$/.test(str)
}

// 不可输入的符号校验
export let invalidated = function(str) {
  return /[^\\/{}[\]&*^]/g.test(str)
}

// 校验价格 整数和两位小数
export function checkPrice(str) {
  return /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/g.test(str)
}

// 校验图片格式（jpg/jpeg/png）
export function checkImg(file) {
  return new Promise((resolve, reject) => {
    var type = file.type
    if (type === 'image/jpg' || type === 'image/jpeg' || type === 'image/png') {
      resolve(true)
    } else {
      // Message({
      //   message: '上传图片格式不正确',
      //   type: 'error',
      //   duration: 5 * 1000,
      // })
      reject(false)
    }
  })
}

// 校验图片大小
export function checkImgSize(file) {
  return new Promise((resolve, reject) => {
    if (file.size / 1024 < 500) {
      resolve(true)
    } else {
      // Message({
      //   message: '图片大小超过200KB',
      //   type: 'error',
      //   duration: 5 * 1000,
      // })
      reject(false)
    }
  })
}

// 校验图片尺寸（ 宽、高自定义）
export function checkCoverImgSize(file, w, h) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function(e) {
      let data = e.target.result
      let image = new Image()
      image.onload = function() {
        if (image.width === w && image.height === h) {
          resolve(true)
        } else {
          // Message({
          //   message: '图片尺寸不正确，请重新上传',
          //   type: 'error',
          //   duration: 5 * 1000,
          // })
          reject(false)
        }
      }
      image.src = data
    }
  })
}
