const BundleTracker = require("webpack-bundle-tracker");
const CompressionPlugin = require('compression-webpack-plugin');
const zopfli = require('@gfx/zopfli');

const pages = {
    'index': {
        entry: './src/index.js',
        chunks: ['vue','vuetify']
    },
    'vuetify_demo': {
        entry: './src/vuetify_demo.js',
        chunks: ['vue','vuetify']
    },
}

module.exports = {
    configureWebpack: {
		plugins: [
            process.env.NODE_ENV === 'production' ? new CompressionPlugin({
              compressionOptions: {
                numiterations: 15,
              },
              algorithm(input, compressionOptions, callback) {
                return zopfli.gzip(input, compressionOptions, callback);
              },
            }) : false ,
            process.env.NODE_ENV === 'production' ? new CompressionPlugin({
              filename: '[path].br[query]',
              algorithm: 'brotliCompress',
              test: /\.(js|css|html|svg)$/,
              compressionOptions: { level: 11 },
              threshold: 10240,
              minRatio: 0.8,
              deleteOriginalAssets: false,
            }) : false ,


		].filter(Boolean),
    },
    pages: pages,
    filenameHashing: false,
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? ''
        : 'http://localhost:8080/',
    outputDir: '../static/bundle/',

    chainWebpack: config => {

        config.optimization
            .splitChunks({
                cacheGroups: {
                    vue: {
                        test: /[\\/]node_modules[\\/](vue|axios)[\\/]/,
                        name: "vue",
                        chunks: "all",
                        priority: 1
                    },
                    vuetify: {
                        test: /[\\/]node_modules[\\/](vuetify)[\\/]/,
                        name: "vuetify",
                        chunks: "all",
                        priority: 1
                    },
                },
            });

        Object.keys(pages).forEach(page => {
            config.plugins.delete(`html-${page}`);
            config.plugins.delete(`preload-${page}`);
            config.plugins.delete(`prefetch-${page}`);
        })

        config
            .plugin('BundleTracker')
            .use(BundleTracker, [{filename: './webpack-stats.json'}]);

        config.resolve.alias
            .set('__STATIC__', 'static')

        config.devServer
            .public('http://localhost:8080')
            .host('0.0.0.0')
            .port(8080)
            .disableHostCheck(true)
            .hotOnly(true)
            .watchOptions({poll: 200})
            .https(false)
            .headers({"Access-Control-Allow-Origin": ["*"]})

    }
};
