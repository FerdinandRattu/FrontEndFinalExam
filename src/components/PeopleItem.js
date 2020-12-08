import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';

const PeopleItem = ({actor:{name, profile_path,id}})=>{
    return(
        <Card body className="text-center" >
            <Image src={`https://image.tmdb.org/t/p/original/${profile_path}`} style={{width : '150px'}}/>
            <h3>{name}</h3>
            <Link to ={`/personDetail/${id}`}>
            <Button variant = "danger">Details</Button> 
            </Link>
            
        </Card>
    )
}

export default PeopleItem;