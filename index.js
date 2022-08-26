#!/usr/bin/env node

const fs = require('fs')

require('base-create')({
  devDependencies: [
    '@rollup/plugin-commonjs',
    '@rollup/plugin-node-resolve',
    '@rollup/plugin-typescript',
    '@types/react',
    'react',
    'react-dom',
    'rollup',
    'rollup-plugin-dts',
    'rollup-plugin-peer-deps-external',
    'rollup-plugin-postcss',
    'rollup-plugin-terser',
    'tslib',
    'typescript',
  ],
  peerDependencies: [
    'react',
    'react-dom'
  ],
  package: {
    license: 'MIT',
    main: "dist/cjs/index.js",
    module: "dist/esm/index.js",
    scripts: {
      build: 'rollup -c'
    },
    types: "dist/index.d.ts",
  },
  files: [
    {
      path: 'tsconfig.json',
      contents: fs.readFileSync(__dirname + '/files/tsconfig.json', 'utf-8')
    },
    {
      path: 'rollup.config.js',
      contents: fs.readFileSync(__dirname + '/files/rollup.config.js', 'utf-8')
    },
    {
      path: 'src/index.ts',
      contents: `export {default as Component} from './Component'`
    },
    { 
      path: 'src/Component.tsx',
      contents: fs.readFileSync(__dirname + '/files/Component.tsx', 'utf-8')
    }
  ]
})
