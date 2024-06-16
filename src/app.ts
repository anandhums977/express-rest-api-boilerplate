import { myDataSource } from "./app-data-source";
import "reflect-metadata"; 
import {createExpressServer} from "routing-controllers";
import { LoggingMiddleware } from "./middlewares/sample.middleware";



async function initializeDataSource() {
    try {
        await myDataSource.initialize();
        console.log("Data Source has been initialized!");
    } catch (error) {
        console.error("Error during Data Source initialization:", error);
        process.exit(1); 
    }
}


initializeDataSource().then(() => {
    const app = createExpressServer({
        routePrefix: "/api/v1",
        controllers: [__dirname + '/controllers/*.ts'], 
        middlewares: [LoggingMiddleware],
        validation: true
    })
    
    app.listen(3000, () => {
        console.log("Server is running on port 3000 ........................");
    });
});