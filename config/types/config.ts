import webpack from 'webpack'

export type TBuildMode = 'development' | 'production'

export interface IBuildEnv {
  mode: TBuildMode
  port: number
}

export interface IBuildPath {
  entry: string
  build: string
  html: string
  src: string
}

export interface IBuildOptions {
  mode: TBuildMode
  paths: IBuildPath
  port: number
  isDev: boolean
}
