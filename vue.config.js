module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/accionadashboard/'
    : '/',
    outputDir: 'docs'
};