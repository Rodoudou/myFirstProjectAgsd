import React, { useState } from "react";
import { Tabs } from "antd";
import HorairesBoxeKids from "../../components/Horaires/boxe/HorairesBoxeKids";
import HorairesLadyBoxe from "../../components/Horaires/boxe/HorairesLadyBoxe";
import HorairesBoxeMixte from "../../components/Horaires/boxe/HorairesBoxeMixte";
import HorairesJudoAdultes from "../../components/Horaires/judo/HorairesJudoAdultes";
import HorairesJjbAdultes from "../../components/Horaires/jjb/HorairesJjbAdultes";

const { TabPane } = Tabs;

const Horaires = () => {
  const [title, setTitle] = useState();
  const callback = (e) => {
    const title = e.target;
    setTitle(title);
  };
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Adultes" key="1">
        <HorairesBoxeMixte />
        <HorairesJudoAdultes/>
        <HorairesJjbAdultes/>
      </TabPane>
      <TabPane tab="Lady Boxing" key="2">
        <HorairesLadyBoxe />
      </TabPane>
      <TabPane tab="Enfants" key="3">
        <HorairesBoxeKids />
      </TabPane>
    </Tabs>
  );
};

export default Horaires;
