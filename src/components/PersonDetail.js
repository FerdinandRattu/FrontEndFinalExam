import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


class PersonDetail extends React.Component{
    componentDidMount(){
        this.props.getPerson(this.props.match.params.id);
    }
    render(){
        const{
            name,
            birthday,
            gender,
            popularity,
            profile_path
        }=this.props.personDetail;

    
return(
    
            <Container>
                <div className="mt-4">
                <Image src ={`https://image.tmdb.org/t/p/original/${profile_path}`} style={{width : '150px'}}/>
                <p>Name : {name}</p>
                <p>Birthday : {birthday}</p>
                <p>Gender : {gender}</p>
                <p>Popularity : {popularity}</p>
                </div>
               
            </Container>
            
        )

    }
}

export default PersonDetail;