import react from 'react';
import './App.css';
import srcImage from './1150234_10151765723117118_1011348899_n_edited.jpg';
import './style.css';
function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">Jimmy</h1>

<br />

<img src={srcImage} alt= "jimmy"/>

<br />

<img src="/1150234_10151765723117118_1011348899_n_edited.jpg" alt = "jimmy"/>

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
