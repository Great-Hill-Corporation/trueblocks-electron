/* eslint-disable @typescript-eslint/no-var-requires */

'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const spawn = require('child_process').spawn;

const resolve =
  process.env.NODE_ENV === 'production'
    ? {}
    : {
        alias: {
          'react-dom': '@hot-loader/react-dom'
        }
      };

const devServer =
  process.env.NODE_ENV === 'production'
    ? {}
    : {
        port: 2003,
        compress: true,
        noInfo: true,
        stats: 'errors-only',
        inline: true,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        historyApiFallback: {
          verbose: true,
          disableDotRule: false
        },
        before() {
          if (process.env.START_HOT) {
            console.log('Starting main process');
            spawn('npm', ['run', 'start-main-dev'], {
              shell: true,
              env: process.env,
              stdio: 'inherit'
            })
              .on('close', code => process.exit(code))
              .on('error', spawnError => console.error(spawnError));
          }
        }
      };
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode: mode,
  resolve: resolve,
  devServer: devServer,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  devtool: 'source-map',
  plugins: [],
  target: 'electron-renderer',
  entry: {
    app: ['@babel/polyfill', './src/index.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            ['@babel/preset-env', { targets: { browsers: 'last 2 versions ' } }],
            '@babel/preset-typescript',
            '@babel/preset-react'
          ],
          plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]]
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true
            }
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      reportFiles: ['src/**/*']
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
};
