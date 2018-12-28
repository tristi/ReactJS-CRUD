const defaulState = {
    books:[],
    book:{},
    loading:false,
    errors:{}
}

export default (state = defaulState, action={}) => {
    switch(action.type){
        case'FETCH_BOOKS_FULFILLED':{
            return {
                ...state,
                //books:action.payload
                books:action.payload.data.data || action.payload.data,
                errors:{},
                loading:false
            }
        }
        case 'NEW_BOOK':{
            return{
                ...state,
                book:{}
            }
        }
        case 'SAVE_BOOK_PENDING':{
            return{
                ...state,
                loading:true
            }
        }
        case 'SAVE_BOOK_FULFILLED':{
            return{
                ...state,
                books:[...state.books,action.payload.data],
                error:{},
                loading:false
            }
        }
        case 'SAVE_CONTACT_REJECTED':{
            const data = action.payload.response.data;
            const {"title":title,"description":description,author,published}=data.errors;
            const errors={global:data.message,name:{title,description},author,published};
            return{
                ...state,
                errors:errors,
                loading:false
            }
        }
        case 'FETCH_BOOK_PENDING':{
            return{
                ...state,
                loading:true,
                book:{}
            }
        }
        case 'UPDATE_BOOK_PENDING':{
            return {
                ...state,
                loading:true
            }
        }
        case 'UPDATE_BOOK_FULFILLED':{
            const book = action.payload.data;
            return{
                ...state,
                books:state.books.map(item=>item.id===book.id?book:item),
                errors:{},
                loading:false
            }
        }
        case 'UPDATE_BOOK_REJECTED':{
            const data = action.payload.response.data;
            const {"title":title,"description":description,author,published}=data.errors;
            const errors={global:data.message,name:{title,description},author,published};
            return{
                ...state,
                errors:errors,
                loading:false
            }
        }
        case'FETCH_BOOK_FULFILLED':{
            return {
                ...state,
                //books:action.payload
                book:action.payload.data.data || action.payload.data,
                errors:{},
                loading:false
            }
        }
        case 'DELETE_BOOK_FULFILLED':{
            const _id = action.payload.data;
            return {
                ...state,
                books:state.books.filter(item => {return item.id !== _id})
            }
        }
        default:
        return state;
        
    }
}