import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
 res.send('Server is Ready');
 return;
});

app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
            id:1,
            title: 'A joke',
            content: "Joke 1"
        },
        {
            id:2,
            title: 'Another joke',
            content: "Joke 21"
        },
        {
            id:1,
            title: 'The joke',
            content: "Joke 12"
        },
    ]
    res.send(jokes)
})

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
})