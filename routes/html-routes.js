const path = require("path");
const router = require("express").Router()

router.get("/fitness", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/exercise.html")
});

router.get("/fitness", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/exercise.html")
});
}