import Container from 'react-bootstrap/Container';


const About = () =>{

    return(
        <Container className="mt=-4">
           <br></br>
            <h1>About</h1>

            <br></br>
            <h5><b>Actor and Actrist</b> - Ferdinand Bierhoff Mark Rattu (for Final Exam Front-End Web Development Class 2020 - FIK UNKLAB)</h5>
            
            <br></br>
            <h5>Ini adalah aplikasi untuk menampilkan review dari aktor dan aktrist yang diambil dari API TMBD</h5>
            <h5>Aplikasi ini memiliki fitur mencari Actor and Aktrist, melihat informasi Actor dan Aktrist, melihat detail Actor dan Aktrist di website TMBD</h5>
            <br></br>

            <h3>End-Point yang digunakan untuk Aktor dan Aktrist Review:</h3>
            <ul>
                <li>Mengambil Daftar Aktor dan Aktrist berserta detailnya dari TMBD</li>
               
                
            </ul>

        </Container>

    );

}

export default About;