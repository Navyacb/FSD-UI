const Joi=require('joi');
const express=require('express');
const app=express();
app.use(express.json());
let movies=[
    {id:1,name: 'Sipderman',rating:3},
    {id:2,name: 'Batman',rating:5},
    {id:3,name: 'Little Women',rating:4}
];
app.get('/api/movies', (req, res) => {
    res.send(movies);

});
//path variable(:id)
app.get('/api/movies/:id', (req, res) => {
    let id=parseInt(req.params.id);
    const movie = movies.find(c => c.id === id);
    if (!movie)
        return res.status(404).send(`The movie with the ID ${id} was not found.`);
         res.send(movie);
})
app.get('/api/movies1/:name', (req, res) => {
        let name = String(req.params.name);
        console.log(name);
        const movie1= movies.find(c => c.name === name);
    
        if (!movie1)
            return res.status(404).send(`The movie with the Name ${name} was not found.`);
        res.send(movie1);
    });

app.get('/api/movies2/:rating', (req, res) => {
        let rating=parseInt(req.params.rating);
        const movie = movies.find(c => c.rating === rating);
        if (!movie)
            return res.status(404).send(`The movie with the rating ${rating} was not found.`);
             res.send(movie);
    })
app.post('/api/movies', (req, res) => {
    const { error } = validatemovies(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const movie = {
        id: movies.length + 1,
        name: req.body.name,
        rating:req.body.rating
    };
    movies.push(movie);
    res.send(movie);
});

app.put('/api/movies/:id', (req, res) => {
    const movie = movies.find(c => c.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    const { error } = validatemovies(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    console.log(movie.name);
    movie.name = req.body.name;
    console.log(movie.name);
    res.send(movie);
});
app.delete('/api/movies/:id', (req, res) => {
    const movie = movies.find(c => c.id === parseInt(req.params.id));
    if (!movie) {
        return res.status(404).send('The movie with the given ID was not found.');
    }
    const index=movies.indexOf(movie);
    movies.splice(index, 1);
    res.send(movie);


});

let port=process.env.PORT || 3000;
app.listen(port, function(){
    console.log('server started listening on port number',port);
})

function validatemovies(movie) {
    const schema = {
        name: Joi.string().min(2).required()
    };

    return Joi.validate(movie, schema);
}
