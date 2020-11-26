import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Modal, Image } from "antd";
import MyCard from "../MyCard";
import Tarifs from "../../containers/tarifs";
import banner from "../../assets/img/banner.jpg";
import FacebookPage from "../../components/FacebookPage";
import SocialMedias from "../SocialMedias";
import DarkModeToggle from "react-dark-mode-toggle";



const { Header, Content, Footer } = Layout;

const contentStyle = {
  display: "flex",
  flexWrap: "wrap",
  padding: " 3rem 3rem",
  justifyContent: "center",
  // backgroundColor: "#6AC7FF",
  footer: {
    backgroundColor: "#001529",
    color: "#FFFFFFA6",
    display: "flex",
    flexWrap: "wrap",
    padding: " 3rem 3rem",
    justifyContent: "center",
  },
};
// Toglle Button for Dark Mode

const AMRLayout = ({ children }) => {
  // STATES
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [planingShow, setPlaningShow] = useState(false);
  const [tarifShow, setTarifShow] = useState(false);

  const fermerModaleHoraires = () => {
    setPlaningShow(true);
  };

  const fermerModaleTarifs = () => {
    setTarifShow(true);
  };

  // The toggle Dark Mode component
  const Dark = () => {
    return (
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
    );
  };

  return (
    <Layout 
    // className={isDarkMode ? "dark-mode" : "light-mode"}
    >
      <Header 
      // className={isDarkMode ? "dark-mode" : "light-mode"}
      style={{backgroundColor:"#001529"}}
      >
        <Menu
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          theme={"dark"}
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">
            <Link to="/">Accueil</Link>
          </Menu.Item>
          <Menu.Item onClick={fermerModaleHoraires} key="2">
            Horaires
          </Menu.Item>
          <Menu.Item onClick={fermerModaleTarifs} key="3">
            Tarifs
          </Menu.Item>

          <Menu.Item key="4">
            <Link to="/inscription">Inscription</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/contact">Contact</Link>
          </Menu.Item>

          <Menu.Item>
            <SocialMedias />
          </Menu.Item>
          <Dark />
        </Menu>

        {/* Modal pour afficher les horraires */}
        <Modal
          title="Horaires des cours"
          centered
          visible={planingShow}
          onOk={() => setPlaningShow(false)}
          onCancel={() => setPlaningShow(false)}
          width={300}
        >
          <MyCard />
        </Modal>

        {/* Modal pour afficher les Tarifs */}
        <Modal
          title="tarifs des cours"
          centered
          visible={tarifShow}
          onOk={() => setTarifShow(false)}
          onCancel={() => setTarifShow(false)}
          width={500}
        >
          <Tarifs />
        </Modal>
      </Header>
      <Image src={banner} fluid />
      <Content style={contentStyle} children={children} />
      <Footer style={contentStyle.footer}>
        &#169;Create by Redouane Amrani with React 2020
        <SocialMedias />
        <FacebookPage/>
      </Footer>
    </Layout>
  );
};

export default AMRLayout;
