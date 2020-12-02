module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/accionadashboard/dashboard'
    : '/',
    outputDir: 'dashboard'
};