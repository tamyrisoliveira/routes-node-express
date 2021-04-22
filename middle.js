const middle = (req, res, next) => {
    console.log('I am a Middleware')

    next()
}

module.exports = middle;