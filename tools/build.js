'use strict'

const fs = require('fs')
const path = require('path')
const del = require('del')
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const image = require('rollup-plugin-image')
const pkg = require('../package.json')
const postcss = require('postcss')

const componentsPath = './src/components'
const componentDirs = fs.readdirSync(componentsPath).filter((file) => {
  return fs.statSync(path.join(componentsPath, file)).isDirectory()
})

let promise = Promise.resolve()

// Clean up the output directory
promise = promise.then(() => del(['lib/*']))

const babelConfig = {
  babelrc: false,
  exclude: 'node_modules/**',
  runtimeHelpers: true,
  plugins: [
    'external-helpers',
  ],
  presets: [
    ['env', {
      targets: {
        browsers: ['last 2 versions', 'safari >= 7', 'ie >= 9'],
      },
      modules: false,
    }],
    'stage-0',
    'react',
  ],
}

function rollupBuild (format, name, input, file) {
  return promise.then(() => rollup.rollup({
    input,
    external: Object.keys(pkg.dependencies),
    plugins: [babel(babelConfig), image()],
  }).then(bundle => bundle.write({
    file,
    format,
    sourcemap: true,
    globals: {
      'antd': 'antd',
      'react': 'React',
      'prop-types': 'PropTypes',
    },
    name: format === 'umd' ? name : undefined,
  })))
}

let promises = []

// build all components into one file
// for (const format of ['es', 'cjs', 'umd']) {
// for (const format of ['es', 'cjs']) {
//   rollupBuild(format, 'k2_react_components',
//     'src/index.js', `lib/${format === 'cjs' ? 'index' : `index.${format}`}.js`)
//   componentDirs.map((dir) => {

/**
 * formart: es, cjs, umd. es: ignore, cjs: publish.
 */
const formats = ['es', 'cjs', 'umd']
formats.forEach((format) => {
  componentDirs.forEach((dir) => {
    promises.push(
      rollupBuild(format, dir, `${componentsPath}/${dir}/index.js`,
        `lib/${dir}/${format === 'cjs' ? 'index' : `index.${format}`}.js`)
    )
  })
})

/**
 * css
 */
function buildCss () {
  componentDirs.forEach((dir) => {
    postcss([ require('autoprefixer'), require('cssnano') ])
      .process(fs.readFileSync(`${componentsPath}/${dir}/${dir}.css`, 'utf-8'), {
        from: `${componentsPath}/${dir}/${dir}.css`,
        to: `lib/${dir}/index.css` })
      .then(function (result) {
        fs.writeFileSync(`./lib/${dir}/index.css`, result.css)
        if (result.map) fs.writeFileSync(`lib/${dir}/index.css.map`, result.map)
      })
      .catch((e) => {
        console.error(e)
      })
  })
}

// Copy package.json and LICENSE.txt
promise = Promise.all(promises).then(() => {
  delete pkg.private
  delete pkg.devDependencies
  delete pkg.scripts
  delete pkg.eslintConfig
  delete pkg.babel
  fs.writeFileSync('lib/LICENSE.txt', fs.readFileSync('LICENSE.txt', 'utf-8'), 'utf-8')
  buildCss()
  // fsCopy.copySync(path.resolve('src/static'), path.resolve('lib'))
})

promise.catch(err => console.error(err.stack)) // eslint-disable-line no-console
