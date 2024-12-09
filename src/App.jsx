import { Card } from "react-bootstrap";
import Price from "./components/Price";
import Name from "./components/Name";
import Image from "./components/Image";
import Description from "./components/Description";
const App = () => {
  const firstName = "Bami";
  return (
    <div className="App">
      <Card style={{ width: "18rem", margin: "auto", marginTop: "50px" }}>
        <Card.Body>
          <Image />
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>Hello, {firstName ? firstName : "there"}!</p>
        {firstName && <p>Have a nice day!</p>}
      </div>
    </div>
  );
};

export default App;
