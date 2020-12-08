import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import AboutPage from './components/AboutPage';
import TopMenu from './components/Layout/TopMenu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import People from './components/People';
import axios from 'axios';
import Search from './components/Search';
import PersonDetail from './components/PersonDetail';



class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state=
    {
      people:[],
      personDetail:{}
    }
  }
  
  async componentDidMount(){
    const res = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=d7d088f15372c77cc06ee82b4a5f0a06`);
    this.setState({people:res.data.results})
    console.log(res.data.results);
  }

  searchPeople= async (personText) => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=d7d088f15372c77cc06ee82b4a5f0a06&query=${personText}`)
    this.setState({people:res.data.results});
    console.log(res.data.results)
  }

  getPerson= async (id)  => {
    const res = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=d7d088f15372c77cc06ee82b4a5f0a06`)
    console.log(res.data);
    this.setState({personDetail:res.data}); 

  }

  render()
  {
    return(
      <Router>
       <div>
         <TopMenu/>
         <Container>
           <Switch>
             <Route exact path = "/" render={()=>(
                  <React.Fragment>
                    <Search searchPeople={this.searchPeople}/>
                    <People people={this.state.people}/>
                  </React.Fragment>
              )} />
             <Route exact path = "/About" component={AboutPage}/>
             <Route exact path = "/PersonDetail/:id" render={props =>(
               <PersonDetail {... props} getPerson = {this.getPerson} personDetail = {this.state.personDetail} />
             )}/>
           </Switch>
         </Container>
       </div>
      </Router>
    )
  }
}

export default App;
