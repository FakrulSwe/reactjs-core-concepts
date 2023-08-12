import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>

    </div>
  );
}

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  // useEffect( ()=>{}, [])
  useEffect( ()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name = {user.name} email = {user.name}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div style={{border:'2px solid red', margin:'20px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

/*const products = [
    {name: 'Laptop', price: '210000'},
    {name: 'iPhone', price: '120000'},
    {name: 'Watch', price: '20000'},
    {name: 'Tablet', price: '30000'},
  ]
*/ 


/* <div className="App">
      {
        products.map(product => <Products name= {product.name} price=       {product.price}></Products>)
}
    <Products name="Laptop" price= '210000'></Products>
    <Products name="iPhone" price='120000'></Products>
    <Products name="Watch" price='20000'></Products>
    </div>
    );
*/

function Counter(){
  const [count, setCount] = useState(33);
  
  // Multi line arrow function
  const increaseCount = () =>{
    const newCount = count + 1;
    setCount(newCount);
  }
  
  // one line arrow function
  const decreaseCount = () => setCount(count - 1);


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}


function Products(props){
  console.log(props);
  return (<div className="product">
    <h3>Name: {props.name}</h3>
    <p>Price: {props.price}</p>
  </div>
  )
}

export default App;
