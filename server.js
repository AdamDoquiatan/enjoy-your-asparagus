const express = require('express')
const app = express()

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))
	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const port = process.env.PORT || 3001
app.listen(port, () => {
	console.log(`App running on port ${port}...`)
})
