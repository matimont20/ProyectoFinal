import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const url = "http://localhost:8080/api/product";
class Products extends Component {

  state = {
    data: [],
    modalInsertar: false,
    modalEliminar: false,
    form: {
      id: '',
      item: '',
      use: '',
      condition: '',
      url: '',
      price: '',
      tipoModal: ''
    }
  }


  peticionGet = () => {
    axios.get(url + "/getAllProducts").then(response => {
      this.setState({ data: response.data });
    }).catch(error => {
      console.log(error.message);
    })
  }

  peticionPost = async () => {
    delete this.state.form.id;
    await axios.post(url, this.state.form).then(response => {
      this.modalInsertar();
      this.peticionGet();
    }).catch(error => {
      console.log(error.message);
    })
  }

  peticionPut = () => {
    axios.put(url + "/" + this.state.form.id, this.state.form).then(response => {
      this.modalInsertar();
      this.peticionGet();
    })
  }

  peticionDelete = () => {
    axios.delete(url + "/" + this.state.form.id).then(response => {
      this.setState({ modalEliminar: false });
      this.peticionGet();
    })
  }

  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  }

  seleccionarProducto = (producto) => {
    this.setState({
      tipoModal: 'actualizar',
      form: {
        id: producto.id,
        item: producto.item,
        use: producto.use,
        url: producto.url,
        price: producto.price,
        condition: producto.condition
      }
    })
  }

  handleChange = async e => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  }

  componentDidMount() {
    this.peticionGet();
  }


  render() {
    const { form } = this.state;
    return (
      <div className="App">
        <Container>
          <h2> Registo de Productos</h2>

          <button style={{ marginLeft: "auto" }} className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}>Agregar</button>
          <br />
          <table className="table ">
            <thead>
              <tr>
                <th>Nro</th>
                <th width="20%">Imagen</th>
                <th>Producto</th>
                <th>Uso</th>
                <th>condition</th>
                <th>Precio</th>
                <th coldspan="2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(producto => {
                return (
                  <tr key={producto.id}>
                    <td>{producto.id}</td>
                    <td >
                      <Col>
                        <Image src={producto.url} thumbnail />
                      </Col>
                    </td>
                    <td>{producto.item}</td>
                    <td>{producto.use}</td>
                    <td>{producto.condition}</td>
                    <td>{new Intl.NumberFormat("en-EN").format(producto.price)}$</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => { this.seleccionarProducto(producto); this.modalInsertar() }}><FontAwesomeIcon icon={faEdit} /></button>
                      {"   "}
                      <button className="btn btn-danger" onClick={() => { this.seleccionarProducto(producto); this.setState({ modalEliminar: true }) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>



          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader style={{ display: 'block' }}>
              <span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
              {this.state.tipoModal == 'insertar' ?
                <h2>Registro de productos</h2>
                :
                <h2>Actualizar productos</h2>
              }
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                {this.state.tipoModal == 'insertar' ?
                  <></>
                  :
                  <>
                    <label htmlFor="id">Id</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form ? form.id : this.state.data.length + 1} />
                    <br />
                  </>
                }
                <label htmlFor="item">Producto</label>
                <input className="form-control" type="text" name="item" id="item" onChange={this.handleChange} value={form ? form.item : ''} />
                <br />
                <label htmlFor="use">Uso</label>
                <input className="form-control" type="text" name="use" id="use" onChange={this.handleChange} value={form ? form.use : ''} />
                <br />
                <label htmlFor="condition">Condición</label>
                {/* <input className="form-control" type="text" name="condition" id="condition" onChange={this.handleChange} value={form?form.condition: ''}/> */}
                <select className="form-control"
                  name="condition"
                  id="condition"
                  onChange={this.handleChange}
                  value={form ? form.condition : ''}>
                  <option></option>
                  <option>Disponible</option>
                  <option>Reservado</option>
                </select>
                <br />
                <label htmlFor="price">Precio</label>
                <input className="form-control" type="number" name="price" id="price" onChange={this.handleChange} value={form ? form.price : ''} />
                <br />
                <label htmlFor="url">Url</label>
                <input className="form-control" type="text" name="url" id="url" onChange={this.handleChange} value={form ? form.url : ''} />
              </div>
            </ModalBody>

            <ModalFooter>
              {this.state.tipoModal == 'insertar' ?
                <button className="btn btn-success" onClick={() => this.peticionPost()}>
                  Insertar
                </button> : <button className="btn btn-primary" onClick={() => this.peticionPut()}>
                  Actualizar
                </button>
              }
              <button className="btn btn-danger" onClick={() => this.modalInsertar()}>Cancelar</button>
            </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
              Estás seguro que deseas eliminar el producto {form && form.item}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={() => this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
            </ModalFooter>
          </Modal>
        </Container>
      </div>
    );
  }
}
export default Products;