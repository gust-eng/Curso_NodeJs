import express from 'express';

const servidor = express();

servidor.get('/helloword' , (req , resp) =>{
    resp.send('Hello Word !!')
})


servidor.get('/calculadora/somar/:n1/:n2' , (req , resp) =>{
   let n1 = Number(req.params.n1);
   let n2 = Number(req.params.n2);
   let soma = n1 + n2
   resp.send('A soma é ' + soma)
})

servidor.get('/calculadora/subtrair/:n1/:n2' , (req , resp) =>{
   let n1 = Number(req.params.n1);
   let n2 = Number(req.params.n2);
   let soma = n1 - n2
   resp.send('A soma é ' + soma)
})

servidor.get('/calculadora/dividir/:n1/:n2' , (req , resp) =>{
   let n1 = Number(req.params.n1);
   let n2 = Number(req.params.n2);
   let soma = n1 / n2
   resp.send('A soma é ' + soma)
})

servidor.get('/calculadora/multiplicar/:n1/:n2' , (req , resp) =>{
   let n1 = Number(req.params.n1);
   let n2 = Number(req.params.n2);
   let soma = n1 * n2
   resp.send('A soma é ' + soma)
})



servidor.listen(5010 , () => console.log('API subiu com sucesso!!')  )