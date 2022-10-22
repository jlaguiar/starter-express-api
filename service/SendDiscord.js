import axios from "axios";

const webhookDiscordUrlBeta = process.env.TOKEN_DISCORD_DADOS_TECNICOS
const webhookDiscordUrlWork = process.env.TOKEN_DISCORD_WORK

export default class SendDiscord {

    async send(dataGit) {
        const msgDicord = {
            content: `${dataGit.projectName} \nVersão liberada: ${dataGit.tag} 
            \n ${dataGit.message} 
            \n\n Link do projeto: ${dataGit.urlRepository}`
        }

        if (dataGit.tag.includes('-')) {
            await axios.post(webhookDiscordUrlBeta, msgDicord)
        } else{
            await axios.post(webhookDiscordUrlWork, msgDicord)
        }
    }
}