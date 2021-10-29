const BookList = {
    data() {
      return {
        books: [],
        bookForm:{},
        selectedBook: null
        }
    },
    methods:{
        fetchBooksData() {
            fetch('/api/books/index.php')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },


        postBook(evt) {
          console.log ("Test:", this.selectedBook);
        if (this.selectedBook) {
            this.postEditBook(evt);
        } else {
            this.postNewBook(evt);
        }
      },

//NEW ADD
postEditBook(evt) {
  this.bookForm.id = this.selectedBook.id;        
  
  console.log("Editing!", this.bookForm);

  fetch('api/books/update.php', {
      method:'POST',
      body: JSON.stringify(this.bookForm),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {
      console.log("Returned from post:", json);
      // TODO: test a result was returned!
      this.books = json;
      
      // reset the form
      this.handleResetEdit();
    });
  },
//END

        postNewBook(evt) {
                
            
            console.log("Posting!", this.bookForm);
    
            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.bookForm = {};
              });
          },



          postDeleteBook(o) {  
            if ( !confirm("Are you sure you want to delete the book") ) {
                return;
            }  
            
            console.log("Delete!", o);
      
            fetch('api/books/delete.php', {
                method:'POST',
                body: JSON.stringify(o),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.handleResetEdit();
              });
          },
      
      
      
      
          //new
          handleEditBook(book) {
            this.selectedBook = book;
            this.bookForm = Object.assign({}, this.selectedBook);
        },
        handleResetEdit() {
            this.selectedBook = null;
            this.bookForm = {};
        
           
        }
    
      
    

    },

  
//possible }

//end
    created() {
    
        this.fetchBooksData();
    }
    
}

  Vue.createApp(BookList).mount('#bookList');