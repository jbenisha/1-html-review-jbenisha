const SomeApp = {
    data() {
      return {
        books: [],
      }
    },
    
        fetchBooksData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.students = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        
    created() {
        this.fetchBooksData();
    }
  
  }
  
  Vue.createApp(SomeApp).mount('#booklist');