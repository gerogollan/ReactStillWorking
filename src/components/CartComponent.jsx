import NavBar from "./NavBar";
import '../styles/CartComponent.css';

export default function CartComponent(props) {
  return (
    <>
      <main className="CartTextContainer">
      <NavBar />
       <h1>{props.text} </h1>
       <h2>Still working on it! Sorry!</h2>
       </main>
    </>
  );
}