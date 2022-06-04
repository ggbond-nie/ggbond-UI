import { resolve } from 'path'
import { outDir } from './paths'
export const buildConfig = {
  esm: {
    module: 'ESNext', // tsconfig输出的结果是es6模块
    format: 'esm', // esm 是es6模块的格式
    output: {
      // esm 模块的输出目录
      name: 'es', // 导出的模块名
      path: resolve(outDir, 'es'), // 导出的路径
    },
    bundle: {
      // 打包的配置
      path: 'ggbond-ui/es', // 打包的路径
    },
  },

  cjs: {
    // cjs 是commonjs模块的格式
    module: 'CommonJS', // tsconfig输出的结果是commonjs模块
    format: 'cjs', // cjs 是commonjs模块的格式
    output: {
      // 导出的配置
      name: 'lib', // 导出的模块名
      path: resolve(outDir, 'lib'), //   导出的路径
    },
    bundle: {
      // 打包的配置
      path: 'ggbond-ui/lib', // 打包的路径
    },
  },
}
export type BuildConfig = typeof buildConfig
