import React, { Component } from "react";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import "./styles.css";

export default class Home extends Component {
  state = {
    newBox: ""
  };

  handleSubmit = async evento => {
    evento.preventDefault();

    const response = await api.post("box", {
      title: this.state.newBox
    });

    this.props.history.push(`/box/${response.data._id}`);
  };

  handleInputChange = evento => {
    this.setState({ newBox: evento.target.value });
  };

  render() {
    return (
      <div id="home-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="Logo da Rocketbox" />
          <input
            placeholder="Criar um box"
            value={this.state.newBox}
            onChange={this.handleInputChange}
          />
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}
