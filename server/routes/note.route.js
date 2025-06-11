const NoteController= require("../controller/note.controller")
const Router = require("express").Router()


Router.get('/notes',NoteController.getRoute)
Router.post('/notes',NoteController.createNote)
Router.delete('/notes/:id',NoteController.deleteNotes)

module.exports = Router