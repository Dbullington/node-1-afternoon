const express = require("express");
const bodyParser = require("body-parser");
const messages_controller = require("./controller/messages_controller");
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + `/../public/build`));

const messageBaseUrl = "/api/messages";
app.post(messageBaseUrl, messages_controller.create);
app.get(messageBaseUrl, messages_controller.read);
app.put(`${messageBaseUrl}/:id`, messages_controller.update);
app.delete(`${messageBaseUrl}/:id`, messages_controller.delete);

const port = 3001;
app.listen(port, () => {console.log(`Server listening on port ${port}`);
});