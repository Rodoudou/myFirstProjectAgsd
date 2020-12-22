import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Layout, Modal, Image } from "antd";
import MyCard from "../MyCard";
import Tarifs from "../../containers/tarifs";
import banner from "../../assets/img/banner.jpg";
// import FacebookPage from "../../components/FacebookPage";
import SocialMedias from "../SocialMedias";
import Menu from '../../components/Menu';
import HelpContact from '../../components/HelpContact';
import Footer from '../../components/Footer';
const {Content } = Layout;

const AMRLayout = ({
  children,
  isDarkMode,
  planingShow,
  setPlaningShow,
  tarifShow,
  setTarifShow,
  Dark,
  fermerModaleTarifs,
}) => {

const [isActive, setIsActive]=useState(false);

  const showMenu=()=>{
   setIsActive(true);
  };


  return (
    <Layout className={isDarkMode ? "darkMode" : null}>
    
        <Menu/>
      <Image src={banner} fluid="true" />

      <Content id="content" children={children} />
      <HelpContact/>
      <Footer>
        &#169;Create by Redouane Amrani with React 2020
        <SocialMedias />
        {/* <FacebookPage/> */}
      </Footer>
    </Layout>
 
  );
};

export default AMRLayout;
