import "./App.css";
import { EmojiList } from "./components/EmojiList";
import { useDispatch } from "react-redux";
import { getEmojis } from "./store";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmojis());
  }, [dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <EmojiList />
      </header>
    </div>
  );
}

export default App;
