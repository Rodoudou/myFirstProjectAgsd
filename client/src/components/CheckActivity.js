import React, { useState } from "react";
import { Checkbox, Row, Col } from "antd";

const CheckActivity = () => {
  const [activities, setActivities] = useState([]);
  console.log("staive =>",activities);

  const handleChangeActivity = (checkedValues) => {
    const activityChecked = checkedValues;
    setActivities(activityChecked);
    console.log("activityChecked = ", activityChecked);
  };

  return (

      <Checkbox.Group
        style={{ width: "100%" }}
        onChange={handleChangeActivity}
        activities={activities}

      >
        <Row>
          <Col span={8}>
            <Checkbox value="Judo">Judo</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="JJB">JJB</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="MMA">MMA</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Muay Thaï">Muay Thaï</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Lady Boxing">Lady Boxing</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>

  );
};

export default CheckActivity;
