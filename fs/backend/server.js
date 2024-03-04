import express from 'express';

const app= express();

// app.get( "/", (req, res) =>{
//     res.send('Server is ready')
// });
//get a list of 5 jokes

app.get("/api/jokes", (req,res)=>{
   const jokes=[
    {
        id:1,
        title:"this is a joke",
        joke: "Why did the scarecrow win an award? Because he was outstanding in his field."
    },
    {
        id:2,
        title:"this is 2nd joke",
        joke: "hehe."
    },
    {
        id:3,
        title:"this is 3rd joke",
        joke: "haha."
    },
    {
        id:4,
        title:"this is 4th joke",
        joke: "huhu."
    },
    {
        id:5,
        title:"this is 5th joke",
        joke: "hehahu."
    }
   ];
   res.send(jokes); 
})
const port= process.env.PORT || 3001;

app.listen(port , ()=> {
    console.log(`Listening on ${port}`)
});