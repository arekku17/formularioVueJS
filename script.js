const app = new Vue({
  el: "#app",
  data() {
    return {
      errors: [],
      name: null,
      age: null,
      movie: null,
      showModal: false
    };
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.age && this.movie) {
        this.showModal = true
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("El nombre es obligatorio.");
      }
      if (!this.age) {
        this.errors.push("La edad es obligatoria.");
      }
      if (!this.movie) {
        this.errors.push("Elige una pelicula");
      }

      e.preventDefault();
    },
    closeModal: function(){
      this.showModal = false
    }
  }
});

Vue.component("modal", {
  template: "#modal-template",
  props: {
    name: {
      type: String
    },
    age: {
      type: String
    },
    movie: {
      type: String
    }
  }
});
