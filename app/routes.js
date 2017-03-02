var Todo = require('./models/model');

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    app.get('/api/get', function (req, res) {
        res.status(200).send();
    });

    app.post('/api/post', function (req, res) {

    });

    app.delete('/api/delete/:id', function (req, res) {

    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
