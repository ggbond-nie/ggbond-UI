//专门打包 util 指令  可以在这里打包

import { series, parallel, src, dest } from 'gulp'
import { resolve } from 'path'
import { outDir, projectRoot } from './utils/paths'
import { buildConfig } from './utils/config'
import { createProject } from 'gulp-typescript'
import { withTaskName } from './utils'
export const buildPackages = (dirname: string, name: string) => {
  //打包的格式需要是什么类型的？ 模块规范
  const tasks = Object.entries(buildConfig).map(([module, config]) => {
    const output = resolve(dirname, config.output.name)

    return series(
      withTaskName(`build:${dirname}`, () => {
        const tsConfig = resolve(projectRoot, 'tsconfig.json') //配置文件
        const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules'] //排除掉 gulpfile.ts
        return src(inputs)
          .pipe(
            createProject(tsConfig, {
              declaration: true, //是否生成声明文件
              strict: false, //是否严格检查类型
              module: config.module, //模块规范
            })()
          )
          .pipe(dest(output)) //打包的输出目录
      }),
      withTaskName(`copy:${dirname}`, () => {
        return src(`${output}/**`).pipe(
          dest(resolve(outDir, config.output.name, name))
        )
      })
    )
  })
  return parallel(...tasks) //并行打包
}
