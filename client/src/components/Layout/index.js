import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {Modal, Image } from "react-bootstrap";
import MyCard from "../MyCard";
import Tarifs from "../../containers/tarifs";
import banner from '../../assets/img/banner.jpg';
import SocialMedias from "../SocialMedias";

const { Header, Content, Footer } = Layout;

const contentStyle = {
  display: "flex",
  flexWrap: "wrap",
  padding: " 3rem 3rem",
  justifyContent: "center",
  footer: {
    backgroundColor: "#001529",
    color:"#FFFFFFA6",
    display: "flex",
    flexWrap: "wrap",
    padding: " 3rem 3rem",
    justifyContent: "center",
  },
};

const AMRLayout = ({ children }) => {
  const [showHoraire, setShowHoraires] = useState(false);
  const [showTarifs, setShowTarifs] = useState(false);

  const handleCloseHoraires = () => setShowHoraires(false);
  const handleCloseTarifs = () => setShowTarifs(false);
  
  const handleShowHoraires = () => setShowHoraires(true);
  const handleShowTarifs= ()=> setShowTarifs(true);

  return (
    <Layout className="layout-content">

      <Header >
        <Menu style={{marginLeft:'300px'}} theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Accueil</Link>
          </Menu.Item>
          <Menu.Item  onClick={handleShowHoraires} key="2">
           Horaires
          </Menu.Item>
          <Menu.Item  onClick={handleShowTarifs}  key="3">
            Tarifs
          </Menu.Item>

          <Menu.Item key="4">
            <Link to="/inscription">Inscription</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/contact">Contact</Link>
          </Menu.Item>

        <Menu.Item >
            <SocialMedias/>
        </Menu.Item>
        </Menu>



        {/* MODALE Horaires*/}
        <Modal show={showHoraire} onHide={handleCloseHoraires} onClick={handleCloseHoraires}>
          <Modal.Header style={{marginLeft:'20%'}} closeButton>
        <MyCard/>
          </Modal.Header>
        </Modal>

        {/* MODALE Tarifs */}
        <Modal show={showTarifs} onHide={handleCloseTarifs} onClick={handleCloseTarifs}>
          <Modal.Header style={{marginLeft:'20%'}} closeButton>
        <Tarifs/>
          </Modal.Header>
        </Modal>
        
      </Header>
      <Image src={banner} fluid />
      <Content style={contentStyle} children={children} />
      <Footer style={contentStyle.footer}>
        &#169;Create by Redouane Amrani with React 2020
        <SocialMedias/>
      </Footer>
    </Layout>
  );
};

export default AMRLayout;
