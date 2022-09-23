module.exports = function (app) {
    app.use(function (req, res, next) {
        // making the development server cross-origin isolated
        // https://github.com/ffmpegwasm/ffmpeg.wasm#installation
        res.setHeader("Cross-Origin-Opener-Policy", "same-origin")
        res.setHeader("Cross-Origin-Embedder-Policy", "require-corp")
        next()
    })
}