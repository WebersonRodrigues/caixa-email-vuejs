
var lista = [
    {
        id:1,
        cabecalho : {
            assunto: "Assunto Teste 01",
            para: "matheus@gmail.com",
            de: "weberson.r.a@gmail.com",
            dataHora: "03/07/2020 20:12"
        },
        corpo :{
            mensagem: `<h1> teste 1 </h1>`,
            resumo:` teste 1 ...`,
            anexos: [
                {
                    nome: "Nome do anexo",
                    tipo: "imagem.png"
                }
            ],

        },
        respostas: [
            {
                id:2,
                cabecalho : {
                    assunto: "Assunto Teste 02",
                    para: "matheus@gmail.com",
                    de: "weberson.r.a@gmail.com",
                    dataHora: "03/07/2020 21:12"
                },
                corpo :{
                    mensagem: `<h1> teste 2 </h1>`,
                    resumo:` teste 2 ...`,
                    anexos: [
                        {
                            nome: "Nome do anexo",
                            tipo: "imagem.png"
                        }
                    ]
                }  
            }
        ]      
    },
    {
        id:2,
        cabecalho : {
            assunto: "Assunto Teste 02",
            para: "matheus@gmail.com",
            de: "weberson.r.a@gmail.com",
            dataHora: "03/07/2020 21:12"
        },
        corpo :{
            mensagem: `<h1> teste 2 </h1>`,
            resumo:` teste 2 ...`,
            anexos: [
                {
                    nome: "Nome do anexo",
                    tipo: "imagem.png"
                }
            ]
        }        
    }
];

function obterTodosEmails(){
    return new Promise((resolve) => {
        resolve(lista);
    });
}

function enviarEmail(email){

    console.log('enviando email para  a api-  email: ' + email);

    email.id = lista.length + 1;
    return new Promise((resolve) => {
        resolve(email);
    });
  
}


export default {
    obterTodosEmails,
    enviarEmail
}