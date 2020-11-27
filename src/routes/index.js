const { Router } = require("express");
const router = Router();


router.get('/api', (req, res) => {
    // res.send('Hello World') 
    res.json({"title": "Hello World"});
})

router.post('/api', (req, res) => {
    console.log(req.body);
    const respuesta = {...req.body};
    res.json(respuesta);
    // res.send('recived');
})

module.exports = router;