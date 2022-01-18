import react, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Header from "../../Header";

export default class Landing extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      message: this.props.state ? this.props.state.message : "",
    };
  }

  save = () => {
    const url = "http://localhost:8080/leads";
    let data = {
      email: this.email,
      nome: this.name,
      descricao: this.observation,
    };
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };
    fetch(url, requestInfo)
      .then((response) => {
        console.log(this.email, this.name, this.observation);
        return response;
      })
      .catch((e) => {
        this.setState({ message: e.message });
        console.log(this.email, this.nome, this.observacoes);
      });
  };

  render() {
    return (
      <div>
        <Header title="Landing Page" />
        <hr />
        <Form>
          <FormGroup>
            <Label for="name"> Nome: </Label>
            <Input
              type="text"
              id="name"
              onChange={(e) => (this.name = e.target.value)}
              placeholder="Informe o seu nome"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email"> Email: </Label>
            <Input
              type="text"
              id="email"
              onChange={(e) => (this.email = e.target.value)}
              placeholder="Informe o seu email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="observation"> Observações: </Label>
            <Input
              type="text"
              id="observation"
              onChange={(e) => (this.observation = e.target.value)}
              placeholder="Digite alguma observação"
            />
          </FormGroup>
          <Button color="danger" block onClick={this.save}>
            ENVIAR
          </Button>
        </Form>
      </div>
    );
  }
}
