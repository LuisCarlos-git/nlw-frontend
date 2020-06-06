import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { Map, TileLayer, Marker } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";
import axios from "axios";

import api from "../../services/api";
import Finished from "../Finished";

import {
  Container,
  FormContainer,
  Fieldset,
  FieldName,
  Label,
  Input,
  BoxInput,
  Select,
  ListGrid,
  ListItem,
  Button,
} from "./styles";

interface Items {
  id: number;
  title: string;
  image: string;
}

interface IBGEResponse {
  sigla: string;
}

interface IBGECity {
  nome: string;
}

const Form: React.FC = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [items, setItems] = useState<Items[]>([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const history = useHistory();

  useEffect(() => {
    async function handleItems() {
      const response = await api.get("/items");
      setItems(response.data);
    }
    handleItems();
  }, []);

  useEffect(() => {
    axios
      .get<IBGEResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      )
      .then((response) => {
        const ufInitials = response.data.map((item) => item.sigla);
        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    axios
      .get<IBGECity[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const namecities = response.data.map((item) => item.nome);
        setCities(namecities);
      });
  }, [selectedUf]);

  function handleUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }
  function handleCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  function handleMouseClick(event: LeafletMouseEvent) {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSelectedItem(id: number) {
    const alredySelected = selected.findIndex((item) => item === id);

    if (alredySelected >= 0) {
      const filteredItems = selected.filter((item) => item !== id);
      setSelected(filteredItems);
    } else {
      setSelected([...selected, id]);
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { name, email, whatsapp } = formData;
    const [latitude, longitude] = selectedPosition;
    const uf = selectedUf;
    const city = selectedCity;
    const items = selected;

    const data = {
      name,
      email,
      whatsapp,
      uf,
      city,
      items,
      latitude,
      longitude,
    };

    await api.post("/register", data);
    alert("cadastro realizado com sucesso");
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Fieldset>
          <FieldName>Dados</FieldName>
          <Label htmlFor="name">Nome da entidade</Label>
          <Input
            name="name"
            placeholder="Nome da entidade..."
            type="text"
            onChange={handleInputChange}
          />
          <BoxInput>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                name="email"
                placeholder="seu email..."
                type="email"
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Label htmlFor="whatsapp">Whatsapp</Label>
              <Input
                name="whatsapp"
                placeholder="numero do whatsapp."
                type="text"
                onChange={handleInputChange}
              />
            </div>
          </BoxInput>
        </Fieldset>

        <Fieldset>
          <FieldName>Endereço</FieldName>

          <Map
            center={[-11.7921209, -49.5178194]}
            onClick={handleMouseClick}
            zoom={15}
            style={{
              height: 300,
              borderRadius: 8,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={selectedPosition} />
          </Map>

          <BoxInput>
            <div>
              <Label htmlFor="email">UF</Label>
              <Select id="uf" name="uf" value={selectedUf} onChange={handleUf}>
                <option value="0">Selecione um estado</option>

                {ufs.map((uf) => (
                  <option key={uf} value={`${uf}`}>
                    {uf}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <Label htmlFor="city">Cidadde</Label>
              <Select
                id="city"
                name="city"
                value={selectedCity}
                onChange={handleCity}
              >
                <option value="0">Selecione uma cidade</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </Select>
            </div>
          </BoxInput>
        </Fieldset>

        <Fieldset>
          <FieldName>Ìtems para coleta</FieldName>
          <ListGrid>
            {items.map((item) => (
              <ListItem
                selected={selected.includes(item.id)}
                key={item.id}
                onClick={() => handleSelectedItem(item.id)}
              >
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
              </ListItem>
            ))}
          </ListGrid>
        </Fieldset>

        <Button type="submit">Cadastrar ponto de coleta</Button>
      </FormContainer>
    </Container>
  );
};

export default Form;
