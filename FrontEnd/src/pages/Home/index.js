import React, {useState, useEffect} from 'react'
// import './styles.css';
import { Container, Col, Card } from 'react-bootstrap';

import './Card.css'
import Image from 'react-bootstrap/Image';
const Home = () => {
  const [ products, setProducts ] = useState([])
  const [ search, setSearch ] = useState("")

  const url = "http://localhost:8080/api/product/getAllProducts";

  const showData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setProducts(data)
  }   
  const searcher = (e) => {
      setSearch(e.target.value)   
  }
    
   const results = !search ? 
   products : 
   products.filter((dato)=> 
   dato.item.toLowerCase().includes(search.toLocaleLowerCase()) || dato.use.toLowerCase().includes(search.toLocaleLowerCase())
   )
  
   useEffect( ()=> {
    showData()
  }, [])
  
  return (
    <Container>
      <br />
      <h2> Busqueda de Productos</h2>
            <input value={search} onChange={searcher} type="text" placeholder='Buscar...' className='form-control campo'/>
            <br />
           <div>
                  <table >
                  <thead>
                    <tr>
                      <th>Nro</th>
                      <th colSpan="2">Producto</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map(producto => {
                      return (
                        <tr key={producto.id}>
                          <td width="10%">{producto.id}</td>
                          <td width="40%">
                            Producto: {producto.item}<br />
                            Uso: {producto.use}<br />
                            Condición: {producto.condition}<br />
                            Precio: {new Intl.NumberFormat("en-EN").format(producto.price)}$                            
                            </td>
                          <td >
                            <Col className='foto'>
                              <Image src={producto.url} thumbnail />
                            </Col>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>  
                </div>
      </Container>
  )
}
export default Home