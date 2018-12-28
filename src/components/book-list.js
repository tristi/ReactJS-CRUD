import React from 'react';
import {Card} from 'semantic-ui-react';
import BookCard from './book-card';

export default  function BookList({books,deleteBook}){

    const list = () => {
        return books.map(book=>{
            //return <li key={book.id}>{book.title}{book.description}</li>
            return <BookCard key={book.id} book={book} deleteBook={deleteBook}/>
        })
    }
    return (
      /*   <div>
           <ul>{list()}</ul>
        </div> */
        <Card.Group>
            {list()}
        </Card.Group>
    )
}