import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import judo from "../../assets/img/judo.jpg";
import jjb from "../../assets/img/jjb.jpeg";
import mma from "../../assets/img/mma.jpg";
import LadyBoxing from "../../assets/img/ladyboxe.jpg";
import muayThai from "../../assets/img/boxe.jpeg";
import { Link } from "react-router-dom";

const { Meta } = Card;

const disciplines = [
  { src: judo, name: "Judo", route: "/judo" },
  { src: jjb, name: "JJB", route: "/jjb" },
  { src: muayThai, name: "Muay Thaï", route: "/boxe" },
  { src: LadyBoxing, name: "Lady Boxing", route: "/boxe" },
  { src: mma, name: "MMA", route: "/mma" },
];

const activity = disciplines.map((sport, i) => {
  console.log(sport);
  return (
    <div key={sport.name}>
      <Link to={sport.route}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt={sport.name} src={sport.src} />}
        >
          <Meta title={sport.name} description="Horaires" />
        </Card>
      </Link>
    </div>
  );
});

const MyCard = () => {
  return <div>{activity}</div>;
};

export default MyCard;
