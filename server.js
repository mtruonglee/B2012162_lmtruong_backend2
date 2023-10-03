const app = require('./app.js');
const config = require('./app/config');
const MongoDB = require('./app/utils/mongodb.utils.js');

//start server
async function startServer() {
    try {
        await MongoDB.connect('mongodb://localhost:27017/contactbook');
        console.log('Connected to the database!');

        const port = config.app.port;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log('Cannot connect to the database!', error);
        process.exit();
    }
}

startServer();