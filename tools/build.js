/**
 * Babel Starter Kit (https://www.kriasoft.com/babel-starter-kit)
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict'

const fs = require('fs')
const path = require('path')
const del = require('del')
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const pkg = require('../package.json')
// const postcss = require('rollup-plugin-postcss')
const postcss = require('postcss')

const componentsPath = './src/components'
const componentDirs = fs.readdirSync(componentsPath).filter((file) => {
  return fs.statSync(path.join(componentsPath, file)).isDirectory()
})

let promise = Promise.resolve()

// Clean up the output directory
promise = promise.then(() => del(['dist/*']))

// Compile source code into a distributable format with Babel

function rollupBuild (format, moduleName, entry, dest) {
  return promise.then(() => rollup.rollup({
    entry,
    external: Object.keys(pkg.dependencies),
    plugins: [babel(Object.assign(pkg.babel, {
      babelrc: false,
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      presets: pkg.babel.presets.map(x => (x === 'latest' ? ['latest', { es2015: { modules: false } }] : x))
    }))]
  }).then(bundle => bundle.write({
    dest,
    format,
    sourceMap: true,
    // moduleName: format === 'umd' ? pkg.name : undefined
    moduleName: format === 'umd' ? moduleName : undefined
  })))
}

let promises = []
// for (const format of ['es', 'cjs', 'umd']) {
for (const format of ['es', 'cjs']) {
  // rollupBuild(format, 'k2_react_components',
  //   'src/index.js', `dist/${format === 'cjs' ? 'index' : `index.${format}`}.js`)
  componentDirs.map((dir) => {
    promises.push(rollupBuild(format, dir, `${componentsPath}/${dir}/index.js`,
      `dist/${dir}/${format === 'cjs' ? 'index' : `index.${format}`}.js`))
  })
}

/**
 * css
 */
function buildCss () {
  componentDirs.map((dir) => {
    postcss([ require('autoprefixer'), require('cssnano') ])
      .process(fs.readFileSync(`${componentsPath}/${dir}/${dir}.css`, 'utf-8'), {
        from: `${componentsPath}/${dir}/${dir}.css`,
        to: `dist/${dir}/index.css` })
      .then(function (result) {
        fs.writeFileSync(`./dist/${dir}/index.css`, result.css)
        if (result.map) fs.writeFileSync(`dist/${dir}/index.css.map`, result.map)
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
  fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, '  '), 'utf-8')
  fs.writeFileSync('dist/LICENSE.txt', fs.readFileSync('LICENSE.txt', 'utf-8'), 'utf-8')
  buildCss()
})

promise.catch(err => console.error(err.stack)) // eslint-disable-line no-console
