import app from './app'

let PORT = process.env.PORT
if (!PORT) {
    PORT = '3005'
    console.log('.env file not found!!!')
}
app.listen(PORT, () => {
    console.log(`Base express project running on port ${PORT}`)
})
