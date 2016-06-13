export default Ember.Component.extend({
  filter: null,
  filterList: null,
  actions: {
    autoComplete() {
      this.get('autoComplete')(this.get('filter'));
    },
    search() {
      this.get('search')(this.get('filter'));
    },
    choose(title)  {
      this.set('filter', title);
    }
  }
});
