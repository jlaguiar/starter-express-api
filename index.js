import SendDiscord from "./service/SendDiscord.js";
import express from 'express'

const sendDiscord = new SendDiscord();
const app = express()

app.use(express.json());

app.all('/', (req, res) => {
    console.log("Just got a request!")
    console.log(process.env.TESTE || 1)
    res.send('Yo!')
})

// console.log(body.project.name)
// console.log(body.message)
// console.log(body.repository.git_http_url)
// console.log(body.ref)
// object_kind == tag_push
app.post('/integracao', async (request,response) => {
    const body = request.body
    console.log(body)

    if(body.object_kind === 'tag_push' && body.checkout_sha !== null) {
        const tag =  body.ref.split('/')[2]
        let dataGit = {
            projectName: body.project.name,
            message: body.message,
            urlRepository: body.repository.git_http_url,
            tag
        }
        await sendDiscord.send(dataGit)
    }


})
app.listen(process.env.PORT || 3000)