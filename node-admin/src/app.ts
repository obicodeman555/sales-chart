import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { createConnection } from 'typeorm';



createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "0bic0deMan",
    database: "sales_chart",
    entities: [
        "src/entity/**/*.ts",
    ],
    logging: false,
    synchronize: true,


}).then(connection => {
    const app = express();

    //handle request as json
    app.use(express.json());

    app.use(cors({
        origin: ['http://localhost:3000']
    }));

    routes(app);


    app.listen(7000, () => {
        console.log('Server started on port 7000');
    });

});

