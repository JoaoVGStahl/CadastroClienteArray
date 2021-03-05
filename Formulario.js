let ObjCadastro = {}
let ArrayCadastro = []

function SalvarDadosObjeto(){
    ObjCadastro = {
        "Nome" : document.getElementById('txtNome').value,
        "Email" : document.getElementById('txtEmail').value,
        "Endereco" : document.getElementById('txtEndereco').value,
        "Endereco2" : document.getElementById('txtEndereco2').value,
        "Telefone" : document.getElementById('txtTelefone').value,
        "Celular" : document.getElementById('txtCelular').value
    }
    InserirObjetoNoArray()
}
function InserirObjetoNoArray(){
    ArrayCadastro.push(ObjCadastro)
}