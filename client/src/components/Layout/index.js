import React from "react";
import { Layout, Image } from "antd";
import banner from "../../assets/img/banner-agsd.jpg";
// import FacebookPage from "../../components/FacebookPage";
import SocialMedias from "../SocialMedias";
import Menu from '../../components/Menu';
import HelpContact from '../../components/HelpContact';
import Footer from '../../components/Footer';
const {Content } = Layout;

const AMRLayout = ({ token, user, Dark, children, isLog,setIsLog,onLogout, isDarkMode}) => {

  return (
    <Layout className={isDarkMode?"darkMode":"lightMode"}>
    
        <Menu onLogout={onLogout} token={token} user={user} isLog={isLog} setIsLog={setIsLog} Dark={Dark}/>
  
      <Image className="banner" src={banner} fluid="true" />

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
