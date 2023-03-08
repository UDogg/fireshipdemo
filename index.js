const express = require('express');
const app = express();
const PORT =  8080;

app.use( express.json() )

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'hj',
        size: 'large'
    })
});

app.post('/tshirt/:id',(req, res)=>{
    const {id} = req.params;
    const {logo} = req.body;
    if(!logo){
        res.status(418).send({
            message:"We need a logo!"
        })
    }
    res.send({
        tshirt: `jh with your ${logo}`,

    });


});
app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
);