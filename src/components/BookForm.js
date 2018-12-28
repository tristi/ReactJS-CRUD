import React ,{Component} from 'react';
import {Form,Grid,Button} from 'semantic-ui-react';
import {Field,reduxForm} from 'redux-form';
import classnames from 'classnames';

class BookForm extends Component{

    renderField = ({input,label,type,meta:{touched,error}})=>(
        <Form.Field className={classnames({error:touched && error})}>
            <label>{label}</label>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span className="error">{error.message}</span>}
        </Form.Field>
    )

    componentWillReceiveProps = (nextProps) => {
        const {book}= nextProps;
        if(book.id !== this.props.book.id){
            this.props.initialize(book)
        }
    }
    

    render(){
        const {handleSubmit,pristine,submitting,loading} = this.props;
        return(
            <Grid centered columns={2}>
                <Grid.Column>
                    <h1 style={{marginTop:"1em"}}>{this.props.book.id? 'Edit Book':'Add New Book'} </h1>
                    <Form onSubmit={handleSubmit} loading={loading}>
                        <Form.Group widths='equal'>
                            <Field name="title" type="text" component={this.renderField} label="Title" />
                            <Field name="description" type="text" component={this.renderField} label="Description" />
                        </Form.Group>
                        <Field name="author" type="text" component={this.renderField} label="Author" />
                        <Field name="published" type="text" component={this.renderField} label="Published" />
                        <Button primary type='submit' disabled={pristine || submitting}>Simpan</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

export default reduxForm({form:'book'})(BookForm);