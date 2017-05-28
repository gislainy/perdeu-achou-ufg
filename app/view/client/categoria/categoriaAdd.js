Template.categoriaAdd.events({
  'click .adicionar': function (event) {
    debugger
    var nome = qs('#categoriaNome').value;
    var descricao = qs('#categoriaDescricao').value;
    if (nome && descricao) {
      Meteor.call('categoria.adicionar', { nome, descricao }, function (err) {
        if (err) {
          swal('Oops...', 'Ocorreu um erro ao adicionar categoria, tente novamente!', 'error');
        } else {
          swal('Ebaa...', 'Categoria foi adicionada com sucesso!', 'success');
          appRoute('/categoria');
        }
      })
    }
  },
  'click .cancelar': function (event) {
    appRoute('/categoria');
  }
})