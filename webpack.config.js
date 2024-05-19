// TODO: Разобраться с css modules

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
];

let mode = 'development';
let target = 'web'; // в режиме разработки browserslist не используется
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist'; // в продакшен режиме используем browserslist
}

if (process.env.SERVE) { // Используем плагин только если запускаем devServer
  plugins.push(new ReactRefreshWebpackPlugin());
}



module.exports = {
  plugins,
  target,
  mode,
  entry: './src/index.js',
  devtool: 'source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
  module: {
    rules: [
      { test: /\.(html)$/, use: ['html-loader'] },
      // {
      //   test: /\.module.css$/,
      //   use: [
      //     {
      //       loader: "css-loader",
      //       options: {
      //         modules: true,
      //       },
      //     },
      //   ],
      // },
      {
        // Обрабатываем scss и css файлы и модули
        test: /\.(s[ac]|c)ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            }
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        // Обрабатываем js, jsx файлы
        test: /\.([jt]sx?)$/, // обновляем регулярное выражение для поддержки jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        // Для работы с ресурсами в js
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]', // ресурсы будут класться в папку assets
    clean: true,
  },
};
