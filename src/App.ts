import express from "express";

class App {
    public express: express.Express;

    constructor() {
        this.express = express();
        this.attachMiddleWares();
        this.mountRoutes();
    }

    private attachMiddleWares(): void {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
    }

    private mountRoutes(): void {
        const router = express.Router();

        router.get("/", (req, res) => {
            res.json({
                message: "Welcome!",
            });
        });

        this.express.use("/", router);
    }
}

export default new App().express;
