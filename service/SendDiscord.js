import axios from "axios";

const webhookDiscordUrl = 'https://discord.com/api/webhooks/1033186207372414998/rtmnjiazLmJHs-zJ69aYh0hJ4YFuuqZIAtfWQYGG5GvvUhCKhgdUlCutCydC_K2ZbY0p'

export default class SendDiscord {

    async send(dataGit) {
        console.log('chamou')
        const msgDicord = {
            content: `${dataGit.projectName} 
            Versão liberada: ${dataGit.tag} 
            \n ${dataGit.message} 
            \n\n Link do projeto: ${dataGit.urlRepository}`
        }
        await axios.post(webhookDiscordUrl, msgDicord)
    }
}