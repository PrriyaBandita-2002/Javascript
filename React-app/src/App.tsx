import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setalertvisibility] = useState(false);
  let items = ["a", "b", "c", "d", "e", "f"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <div>
        <ListGroup
          items={items}
          heading="cities"
          onSelectItem={handleSelectItem}
        />
        <Alert onClose={() => setalertvisibility(false)}>
          Hello <span>world</span>
        </Alert>
      </div>
      <div>
        {alertVisible && (
          <Alert onClose={() => setalertvisibility(false)}>My ALert</Alert>
        )}
        <button
          onClick={() => setalertvisibility(true)}
          className="btn btn-primary"
        >
          My button
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => console.log("clicked")}
          className="btn btn-secondary"
        >
          Secondary
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => console.log("clicked")}
        >
          Success
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => console.log("clicked")}
        >
          Danger
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => console.log("clicked")}
        >
          Warning
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => console.log("clicked")}
        >
          Info
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => console.log("clicked")}
        >
          Light
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => console.log("clicked")}
        >
          Dark
        </button>

        <button
          type="button"
          className="btn btn-link"
          onClick={() => console.log("clicked")}
        >
          Link
        </button>
      </div>
    </div>
  );
}

export default App;
