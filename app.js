import express from 'express';

const servidor = express();
servidor.use(express.json())

//Primeiros endpoints
servidor.get('/helloword' , (req , resp) =>{
    resp.send('Hello Word !!')
})

//Endpoints de calculos
servidor.get('/calculadora/somar/:n1/:n2' , (req , resp) =>{
      if (isNaN(req.params.n1) || isNaN(req.params.n2)){
        resp.status(401).send({
            error:'Erro: os dois valores precisam ser numéricos'
        })
        return
    }
    
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2)
    let soma = n1+n2;

    resp.send({ 
        entradas:{
            num1:n1,
            num2:n2
        },
       resultado: soma
    })

})

servidor.get('/calculadora/subtrair/:n1/:n2' , (req , resp) =>{
   let n1 = Number(req.params.n1);
   let n2 = Number(req.params.n2);
   let soma = n1 - n2
   resp.send('A soma é ' + soma)
})


//Endpoints da Média
servidor.get('/Media/:n1/:n2/:n3' , (req , resp) =>{
   let n1 = Number(req.params.n1);
   let n2 = Number(req.params.n2);
   let soma = n1 - n2
   resp.send('A soma é ' + soma)
})




//Endpoints com body // Validação
servidor.post('/loja/pedido/completo' ,(req , resp)=>{
  try{
   if(!req.body.parcelas || isNaN(req.body.parcelas))
      {
throw new Error("O parâmetro parcelas está invalido")
   }
   if(!req.body.itens)
      {
throw new Error("O parâmetro itens está invalido")
   }

   let parcelas = req.body.parcelas
   let itens = req.body.itens
   let cupom = req.query.cupom

   let total = 0
   for(let produtos of itens){
      total += produtos.preco
   }

   if(parcelas > 1){
      let juros = total * 0.05;
      total += juros
   }

   if(cupom == 'QUERO100'){
      total -= 100
   }
   let valorfinal = total / parcelas
   resp.send({
      total: total,
      qtdParcelas: parcelas,
      valorParcelas: valorfinal
   })
  }
  catch(err){
resp.status(401).send({
   error: err.message
})
  }
  
})

servidor.listen(5010 , () => console.log('API subiu com sucesso!!')  )