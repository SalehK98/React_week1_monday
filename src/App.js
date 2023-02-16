import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Mother from './components/Mother/Mother';

function App() {
  return (
    <div className="App">
      <span>task 5.1 buttons</span>
      <br />
      <Button text="important" style={{ fontWeight: "bold" }} />
      <Button text="not important" />
      <hr />
      <span>task 5.2 cards</span>
      <br />
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <Card
          imgSource="./logo192.png"
          title="Title1"
          description="description1111"
          link1="https://google.com"
          link2="https://facebook.com"
          text1="google"
          text2="facebook" />

        <Card
          imgSource="./logo512.png"
          title="Title2"
          description="description2222"
          link1="https://google.com"
          link2="https://facebook.com"
          text1="google"
          text2="facebook" />
        <Card
          imgSource="./logo512.png"
          title="Title3"
          description="description3333"
          link1="https://google.com"
          link2="https://facebook.com"
          text1="google"
          text2="facebook" />
      </div>
      <hr />
      <span>task 5.3 A tale of five balloons</span>
      <br />
      <Mother />
    </div>
  );
}

export default App;
