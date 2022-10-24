import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
        trim: true
    },
    urlWebHookBeta: {
        type: String,
        required: false,
        trim: true
    },
    urlWebHookProduction: {
        type: String,
        required: true,
        trim: true
    },
    projectNameGit: {
        type: String,
        required: true,
        trim: true
    },
    projectKeyJira: {
        type: String,
        required: false,
        trim: true
    }
});

const project = mongoose.model("Project", ProjectSchema);

export default project;