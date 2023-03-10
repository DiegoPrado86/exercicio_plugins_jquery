$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    })
    $('#cpf').mask('000.000.000-00',{
        placeholder: '000.000.000-00'
    }); 
    $('#cep').mask('00000-000',{
        placeholder: '00000-000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true 
            },
            email: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            } 
        },
        messages: {
            nome: 'Por favor, digite seu nome',
            telefone: 'Por favor, digite seu telefone',
            email: 'Por favor, digite seu e-mail',
            cpf: 'Por favor, digite seu cpf',
            endereco: 'Por favor, digite seu endereço',
            cep: 'Por favor, digite seu cep'
        }
    })
});