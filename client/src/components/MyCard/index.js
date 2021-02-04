import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import judo from "../../assets/img/judo.jpg";
import judoKids from "../../assets/img/judokids.png";
import jjb from "../../assets/img/jjb.jpeg";
import jjbKids from "../../assets/img/judo-jjb-kids.png";
import mma from "../../assets/img/mma.jpg";
import mmaKids from "../../assets/img/mma-kids.jpg";
import LadyBoxing from "../../assets/img/ladyboxe.jpg";
import muayThai from "../../assets/img/boxe.jpeg";
import muayThaiKids from "../../assets/img/boxekids.jpg";
import { Link } from "react-router-dom";

const { Meta } = Card;

const disciplines = [
  { src: judo, name: "Judo Adultes", route: "/horaires/judo/adultes" },
  { src: judoKids, name: "Judo Enfants", route: "/horaires/judo/kids" },
  { src: jjb, name: "JJB Adultes", route: "/horaires/jjb/adultes" },
  { src: jjbKids, name: "JJB Enfants", route: "/horaires/jjb/kids" },
  { src: muayThai, name: "Muay Thaï Mixte", route: "/horaires/boxe/mixt" },
  { src: muayThaiKids, name: "Muay Thaï Enfants", route: "/horaires/boxe/kids" },
  { src: LadyBoxing, name: "Lady Boxing", route: "/horaires/boxe/lady" },
  { src: mma, name: "MMA Adultes", route: "/horaires/mma/adultes" },
  { src: mmaKids, name: "MMA kids", route: "/horaires/mma/kids" },
];

const activity = disciplines.map((sport, i) => {
  // console.log(sport);
  return (
    <div key={sport.name}>
      <Link to={sport.route}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt={sport.name} src={sport.src} />}
        >
          <Meta title={sport.name} 
          // description="Horaires" 
          />
        </Card>
      </Link>
    </div>
  );
});

const MyCard = () => {
  return <div>{activity}</div>;
};

export default MyCard;
