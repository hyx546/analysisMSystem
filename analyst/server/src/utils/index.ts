/*
 * @Author: your name
 * @Date: 2021-01-13 20:44:43
 * @LastEditTime: 2021-01-16 16:07:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/server/src/utils/index.ts
 */
// 往model 里面插入一条数据
export const Create = (model, param,callback) => {
  model.create(param, (err, data) => {
    if (err) throw err;
    if (data) {
      const req = {
        data: data
      }
      callback(req)
    } else {
      const req = {
        msg: '创建失败',
        error: '34000'
      }
      callback(req)
    }
  })
}

// 在model 中查找一条数据
export const Find = (model, param,callback) => {
  model.findOne(param, (err, data) => {
    if (err) throw err;
    if (data) {
      const req = {
        data: data
      }
      callback(req)
    } else {
      const req = {
        msg: '找不到数据',
        error: '34002'
      }
      callback(req)
    }
  })
}

export const FindAll = (model, param,callback) => {
  model.find(param, (err, data) => {
    if (err) throw err;
    if (data) {
      console.log('----data1',data);
      const req = {
        data: data
      }
      callback(req)
    } else {
      const req = {
        msg: '找不到数据',
        error: '34002'
      }
      callback(req)
    }
  })
}

// 在model 中 删除一条数据
export const Delete = (model, param,callback) => {
  model.remove(param, (err, data) => {
    if (err) throw err;
    if (data) {
      const req = {
        data: data
      }
      callback(req)
    } else {
      const req = {
        msg: '删除失败',
        error: '34000'
      }
      callback(req)
    }
  })
}

// 在model 中 修改一条数据
export const Updete = (model, param,callback) => {
  model.update(param, (err, data) => {
    if (err) throw err;
    if (data) {
      const req = {
        data: data
      }
      callback(req)
    } else {
      const req = {
        msg: '更新失败',
        error: '34000'
      }
      callback(req)
    }
  })
}


