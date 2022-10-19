const catalogo = require('./database/catalogo.json')

// listar todos os filmes que estão em cartaz (listarTodosOsFilmesEmCartaz)
const listarTodosFilmes =()=>catalogo.forEach((filme)=>console.log(filme.titulo) )

//console.log(listarTodosFilmes())

// buscar um filme específico pelo código dele (buscarFilme) -> parametro: codigo

const buscarFilme = (codigo)=> catalogo.find((filme)=>filme.codigo==codigo )

//console.log(buscarFilme(3))

// alterar o status de emCartaz (true -> false e se tiver false -> true) 
// (alterarStatusEmCartaz) -> parametro: codigo
const alterarStatusCartaz = (codigo)=>{
 let filme=catalogo.find((filme)=>filme.codigo==codigo)

 filme.emCartaz= !filme.emCartaz
 return filme
}
//console.log(alterarStatusCartaz(4))

// adicionar um novo filme no nosso catalogo (adicionarFilme) -> 
// parametro: filme: { codigo, titulo, atores, duracao, anoDeLancamento }

const adicionarFilme=(filme)=>{
const {codigo, titulo, duracao, atores, anoDeLancamento}=filme;

if(!codigo||!titulo||!duracao||!atores||!anoDeLancamento){
    console.log("Informações faltando!");
    return
}
const filmeAdd = {
    ...filme,
    emCartaz: true
}
catalogo.push(filmeAdd)
return filmeAdd
}
/*adicionarFilme({
    "codigo": 6,
    "titulo": "Matrix 4",
    "duracao": 2.1,
    "atores": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    "anoDeLancamento": 2022
     })
     listarTodosFilmes()*/

     // listar os filmes com duracao maior do que 2h (listarFilmesComLongaDuracao) -> filter;

const listarFilmesComLongaDuracao=()=>{
    catalogo.filter((filme)=>{
        if(filme.duracao>2){
            return  console.log(filme.titulo)}
        })
    }
    listarFilmesComLongaDuracao()