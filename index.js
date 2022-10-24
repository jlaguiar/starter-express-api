import SendDiscord from "./service/SendDiscord.js";
import express from 'express'
import dontEnv from 'dotenv'
import mongoose, {Schema} from "mongoose";
import project from "./model/Project.js"

const app = express()
app.use(express.json());

dontEnv.config()

mongoose.connect(process.env.URL_MONGO).then( data => {})

const sendDiscord = new SendDiscord();

//discord.create({projectName: 'CLM', urlWebHookBeta: '', urlWebHookProduction: 'teste', projectNameGit: 'clm', projectKeyJira: ''}).then()

console.log(await project.find({}));
app.all('/', (req, res) => {
    console.log("Just got a request!")
    console.log(process.env.TESTE || 1)
    res.send('Yo!')
})

app.post('/criar/integracao', (request,response) => {
    const body = request.body
    project.create(body).then(data => response.sendStatus(201).send('Criado com sucesso ' + data))
})

app.post('/integracao', async (request,response) => {
    const body = request.body
    console.log(body)

    if(body.object_kind === 'release') {

        let dataGit = {
            projectName: body.project.name,
            message: body.description,
            urlRelease: body.url,
            tag: body.tag
        }
        await sendDiscord.send(dataGit)
    }

})
app.listen(process.env.PORT || 3000)