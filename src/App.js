import './App.css';
import Card from "./components/Card/Card";
import CardHeader from "./components/Card/CardHeader";
import CardBody from "./components/Card/CardBody";
import CardFooter from "./components/Card/CardFooter";

function App() {
  return (
    <div className="App">
      <Card>
        <CardHeader title="learn react"/>
        <CardBody body="This is some body"/>
        <CardFooter content="Some footer content"/>
      </Card>
    </div>
  );
}

export default App;
