import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      More than one way of doing this
      <div>
        <a href="http://howtocenterincss.com">How to Centre in CSS</a>
        <br/>
        <a href="https://www.youtube.com/watch?v=XEt09iK8IXs">Code interview that asks how to do it (solution about 14 mins in)</a>
      </div>
      <ul>
      <li><Link to='/option1'>Option1. Oh so close</Link></li>
      <li><Link to='/option2'>Option2. From the code interview link above, takes up whole screen</Link></li>
      <li><Link to='/option3'>Option3. Seems spot on</Link></li>
      </ul>
    </div>
  );
}

export default App;
