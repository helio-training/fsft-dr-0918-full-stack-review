const { send } = require('micro')
const { router, get, post, patch, del } = require('microrouter')

const hello = async (req, res) =>
    send(res, 200, await Promise.resolve(`Hello ${req.params.who}`))

// Get all the Logs
const allLogs = async (req, res) => { 
    send(res, 200, await Promise.resolve(`All Logs`))
}
//  Get a specific Log entry
const logByID = async (req, res) => {
    send(res, 200, await Promise.resolve(`Logs by ID: ${req.params.id}`))
}
// Get all the Logs with a specific tag
const logsByTag = async (req, res) => {
    send(res, 200, await Promise.resolve(`Specific Tagged Logs: ${req.params.tag}`))
}
//  Get all the Tags
const allTags = async (req, res) => { 
    send(res, 200, await Promise.resolve(`All Tags`))
}
//  Create a new Log { desc: String!, start: Time! }
const startLog = async (req, res) => { 
    send(res, 200, await Promise.resolve(`Create a Log`))
}
// Create a Tag { name: String, color: String, created: Time }
const createTag = async (req, res) => { 
    send(res, 200, await Promise.resolve(`Create a Tag`))
}
//  Update a Log entry end time { end: Time! }
const stopLog = async (req, res) => { 
    send(res, 200, await Promise.resolve(`Stop a Log: ${req.params.id}`))
}
//  Add a tag to a Log entry { tag: ID }
const addTag = async (req, res) => { 
    send(res, 200, await Promise.resolve(`Add a Tag to a Log: ${req.params.id}`))
}
//  Delete a specific Log entry
const deleteLog = async (req, res) => { 
    send(res, 200, await Promise.resolve(`Delete a Log: ${req.params.id}`))
}

module.exports = router(
    get('/hello/:who', hello),
    get('/logs', allLogs), // [GET] /logs 200[] Get all the Logs
    get('/logs/id/:id', logByID),// [GET] /logs/id/:id 200{} Get a specific Log entry
    get('/logs/:tag', logsByTag),// [GET] /logs/:tag 200[] Get all the Logs with a specific tag
    get('/tags', allTags),// [GET] /tags 200[] Get all the Tags
    post('/logs', startLog),// [POST] /logs 200{} Create a new Log { desc: String!, start: Time! } 
    post('/tags', createTag),// [POST] /tags 200{} Create a Tag { name: String, color: String, created: Time }
    patch('/logs/end/:id', stopLog),// [PATCH] /logs/:id 200{} Update a Log entry end time { end: Time! }
    patch('/logs/tag/:id', addTag),// [PATCH] /logs/:id 200{} Add a tag to a Log entry { tag: ID }
    del('/logs/:id', deleteLog),// [DELETE] /logs/:id 200{} Delete a specific Log entry
)


