import { spawn } from 'child_process'
import { projectRoot } from './paths'
export const withTaskName = <T>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name })

export const run = async (command: string) => {
  return new Promise((resolve) => {
    const [cmd, ...args] = command.split(' ') // 将整个命令切割成数组
    const app = spawn(cmd, args, {
      // 启动子进程
      cwd: projectRoot, // 当前工作目录
      stdio: 'inherit', // 将这个子进程的输出，输入，错误都指向父进程
      shell: true, // 将shell设置为true，这样就可以使用shell的方式来执行命令了 默认情况linux才支持命令，windows不支持，需要安装git
    })
    app.on('close', (code) => {
      resolve(code)
    })
  })
}

export const pathRewriter = (format) => {
  return (id: string) => {
    id = id.replace(/@ggbond-ui/g, `ggbond-ui/${format}`)
    return id
  }
}
