import axios from "axios";
import project from "../model/Project.js"

export default class SendDiscord {

    async send(dataGit) {
        console.log(dataGit)
        const dataProject = await project.findOne({projectNameGit: dataGit.projectName});
        console.log(dataProject)

        const msgDicord = {
            content: `${dataGit.projectName} \nVersão liberada: ${dataGit.tag} 
            \n ${dataGit.message} 
            \n\n Link do projeto: ${dataGit.urlRelease}`
        }

        if (dataGit.tag.includes('-')) {
            await axios.post(dataProject.urlWebHookBeta, msgDicord)
        } else {
            await axios.post(dataProject.urlWebHookProduction, msgDicord)
        }
    }
}