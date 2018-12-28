import React from 'react';
import {Card,Button,Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

export default function BookCard({book,deleteBook}){
    return(
        <Card>
            <Card.Content>
                <Card.Header>
                    <Icon name='user outline' />{book.title}{book.description}
                </Card.Header>
                <Card.Description>
                    <p><Icon name='phone'/>{book.author} </p>
                    <p><Icon name='mail' />{book.published}</p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="ui two buttons">
                    <Link to={`/book/edit/${book.id}`} className="ui basic button green">Edit</Link>
                    <Button basic color="red" onClick={()=>deleteBook(book.id)}>Delete</Button>
                </div>
            </Card.Content>
        </Card>
    )
}
