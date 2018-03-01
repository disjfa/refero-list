var Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('css/')
  .setPublicPath('/css')
  .cleanupOutputBeforeBuild()
  .addEntry('refero-list', './scss/refero-list.scss')
  .enableSassLoader()
  .enableSourceMaps(!Encore.isProduction());

if (Encore.isProduction()) {
  Encore.enablePostCssLoader();
}

module.exports = Encore.getWebpackConfig();