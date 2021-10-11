const BookList = {
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
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        
    created() {
        this.fetchBooksData();
    }
  
  }
  
  Vue.createApp(BookList).mount('#booklist');