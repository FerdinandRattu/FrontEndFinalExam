import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class Search extends React.Component{
    constructor(props){
        super(props);

        this.state={
            personText :''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchPeople(this.state.personText);

        this.setState({personText:''});
    }
onChange = (e) => {
        this.setState({personText: e.target.value})
    }

    render(){
        return(
            <Form className="my-4   " onSubmit={this.onSubmit}>
                <Form.Control type="text" name="personText" placeholder="Search Actor/Actrees" value={this.state.personText} 
                onChange={this.onChange} autoFocus/>
                <Button className="mt-1" variant="danger" type="submit" block>Search</Button>
            </Form>
        );
    }


}
Search.propTypes={
    searchMovies: PropTypes.func.isRequired
}

export default Search;