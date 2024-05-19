// TODO: в конфиге вебпака поддержка ts уже есть
// Необходимо дописать в бабель

const plugins = [];
if (process.env.NODE_ENV === 'development') {
  plugins.push('react-refresh/babel');
} // React hot reloading необходим только в режиме разработки

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins,
};