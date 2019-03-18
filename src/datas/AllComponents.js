const data = {
  'title-component': {
    tag: 'el-title',
    attrs: [
      {
        name: 'title',
        max: 20,
        min: 2,
        value: '这是标题',
        attr: '标题'
      },
      {
        name: 'help',
        max: 20,
        min: 2,
        value: '这是帮助提示',
        attr: '填写帮助'
      }
    ]
  },
  'input-component': {
    tag: 'el-my-input',
    attrs: [
      {
        name: 'title',
        max: 20,
        min: 2,
        value: '这是标题',
        attr: '标题'
      },
      {
        name: 'help',
        max: 20,
        min: 2,
        value: '这是帮助提示',
        attr: '填写帮助'
      },
      {
        name: 'describe',
        max: 20,
        min: 2,
        value: '这是描述性语言',
        attr: '描述文字'
      }
    ]
  },
  'select-component': {
    tag: 'el-select'
  }
}

export default data
