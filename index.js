//importer express
const express=require('express')
//creer un serveur
const app=express()
app.use(express.json())
let Joueurs=[
    {
        id:1,
        nom:'Zayech Hakim',
        position:'Millieu',
        numero:7
    },
    {
        id:2,
        nom:'Yassine Bono',
        position:'Gardien',
        numero:1
    },
]
app.get('/joueurs',(req,res)=>{
   res.json(Joueurs)
})
app.get('/joueurs/:id',(req,res)=>{
    let code=req.params.id
const joueur=Joueurs.filter(e=>e.id==code)
if(joueur.length>0)
res.json(joueur)
else
res.json("joueurs not found")
})
app.post('/joueurs/add',(req,res)=>{
   
    let id=req.body.id
    const joueur=Joueurs.find(e=>e.id==id)
    if(joueur)
        res.json("joueurs deja existe")
    else{
        Joueurs.push(req.body)
        res.json('joueus bien ajoute')
    }
})
app.put("/joueurs/edit/:id",(req,res)=>{
    let id=req.params.id
    const joueur=Joueurs.find(e=>e.id==id)
    if(!joueur)
        res.json('joueurs not found')
    else
    {
        joueur.nom=req.body.nom
        joueur.position=req.body.position
        joueur.numero=req.body.numero
        res.json('bien modifie')
    }
})
app.delete('/joueurs/del/:id',(req,res)=>{
    //let id=req.params.id
    let {id}=req.params
     Joueurs=Joueurs.filter(e=>e.id!=id)
     res.json('bien supprimer')
})
app.listen(3000,console.log('serveur est lance'))
