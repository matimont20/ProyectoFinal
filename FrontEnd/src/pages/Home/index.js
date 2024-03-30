import React, {useState, useEffect} from 'react'
import './styles.css';
import data from "./TemplateData.json";
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import './Card.css'


const Home = () => {
  //setear los hooks useState
  const [ products, setProducts ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const url = "http://localhost:8080/api/product/getAllProducts";

  const showData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    //console.log(data)
    setProducts(data)
  }   
   //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)   
  }
   //metodo de filtrado 1 
   /*  let results = []
   if(!search)
   {
       results = users
   }else{
        results = users.filter( (dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
   } */

   //metodo de filtrado 2   
   const results = !search ? products : products.filter((dato)=> dato.item.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])
  
  //renderizamos la vista
  return (
    <Container>
      <div className="templateContainer">
      <h2> Busqueda de Productos</h2>
            <div className="searchInput_Container">
            <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/>
            </div>
                 <div className="template_Container">
               { results.map( (product) => (
                  <Card className=" col-1 col-md-2 mx-auto" key={product.id}
                                               >
                   <div className='card'>
                       <div className="card_logo">
                           <img src={product.url} alt="" />
                       </div>
                       <div className="card_data">
                           <h2>{product.item}</h2> 
                           <br></br> 
                           <p><h4> {product.use}</h4></p>
                           <p>{product.price}$ | {product.date_reserva} </p>
                           <p>{product.condition} </p>                           
                       </div>                       
                   </div>      
               </Card>                
                ))}
    </div> 
    </div> 
    </Container>
  )
}
export default Home

// function Home() {
//     const [searchTerm, setSearchTerm] = useState("");
//     return (
//         <>
//             <div className="templateContainer">
//                 <div className="searchInput_Container">
//                     <input id="searchInput" type="text" placeholder="Busqueda de equipos..." onChange={(event) => {
//                         setSearchTerm(event.target.value);
//                     }} />
//                 </div>
//                 <div className="template_Container">
//                     {
//                         data.filter((data) => {
//                             if (searchTerm == "") {
//                                 return data;
//                             } else if (data.producto.toLowerCase().includes(searchTerm.toLowerCase())) {
//                                 return data;
//                             }
//                         })
//                             .map((data, idx) => {
//                                 return (
//                                     <Card
//                                         key={idx}
//                                         style={{ width: "25%" }}                                    >
//                                         <div className='card card-personalizada' key={data.id}>
//                                             <div className="card_logo">
//                                                 <img src={data.url} alt="" />
//                                             </div>
//                                             <div className="card_data">
//                                                 <h2>{data.producto}</h2> 
//                                                 <br></br> 
//                                                 <p><h4> {data.uso}</h4></p>
//                                                 <p>{data.price}$ | {data.date_reserva} </p>
//                                                 <p>{data.condicion} </p>
                                                
//                                             </div>
                                            
//                                         </div>      
//                                     </Card>
//                                 )
//                             })
//                     }
//                 </div>
                
//             </div>

//         </>
//     )
// }

// export default Home