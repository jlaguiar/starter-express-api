import axios from "axios";

const webhookDiscordUrlBeta = 'https://discord.com/api/webhooks/1033186207372414998/rtmnjiazLmJHs-zJ69aYh0hJ4YFuuqZIAtfWQYGG5GvvUhCKhgdUlCutCydC_K2ZbY0p'
const webhookDiscordUrlWork = 'https://discord.com/api/webhooks/1033195603540320266/wxBa_u2UXCu1tRKj2BcCpxkbFzMMYMBy22_QH5OgjE8JVtIkdqLNH7zMs2y6JNsdqi3A'

export default class SendDiscord {

    async send(dataGit) {
        const msgDicord = {
            content: `${dataGit.projectName} \n Versão liberada: ${dataGit.tag} 
            \n ${dataGit.message} 
            \n\n Link do projeto: ${dataGit.urlRepository}`
        }

        if (dataGit.tag.contains('-')) {
            await axios.post(webhookDiscordUrlBeta, msgDicord)
        } else{
            await axios.post(webhookDiscordUrlWork, msgDicord)
        }


    }
}