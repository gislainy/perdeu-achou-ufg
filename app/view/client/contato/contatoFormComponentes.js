
Template.contatoFormComponentesTelefone.helpers({
  add() {
    return this.add ? 'add' : 'delete';
  },
});

Template.contatoFormComponentesEmail.helpers({
  add() {
    return this.add ? 'add' : 'delete';
  },
});
