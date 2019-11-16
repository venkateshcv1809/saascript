import app from "./App";

const port = process.env.PORT || 8080;

app.listen(port, (err: any) => {
    if (err) {
        return err;
    }

    return `server is listening on ${port}`;
});
