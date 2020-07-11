class EmailModel {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.cabecalho = new CabecalhoModel(obj.cabecalho);
        this.corpo = new CorpoModel(obj.corpo);
        this.respostas = obj.respostas && obj.respostas.map(e => new EmailModel(e)) || [];
    }
}

class CabecalhoModel {
    constructor(obj){
        obj = obj || {};
        this.assunto = obj.assunto;
        this.para = obj.para;
        this.de = obj.de;
        this.dataHora = obj.dataHora
    }
}

class CorpoModel {
    constructor(obj){
        obj = obj || {};
        this.mensagem = obj.mensagem;
        this.resumo = obj.resumo;
        // Depois colocar anexos ... 
    }
}

export default  EmailModel
