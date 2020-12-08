import PeopleItem from './PeopleItem';
import PropTypes from 'prop-types';

const People = ({people}) =>{
    return(
        <div className="list-people">
            {people.map((person)=>(
                <PeopleItem  key={person.id} actor={person}/>
            ))}
        </div>
    )
}

People.propTypes = {
    people: PropTypes.array.isRequired
}

export default People;