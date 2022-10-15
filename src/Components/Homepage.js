import React from 'react'
import img1 from '../assets/abc.jpg';
import taximg from '../assets/tax.svg';
import bus from '../assets/busj.svg';
import ticket from '../assets/ticket.svg';
import style from './style.module.css';

import { Card, CardImg, CardImgOverlay, CardText, CardTitle, Col, Row, CardBody, CardSubtitle, Button } from 'reactstrap'
const Homepage = () => {
  return (
    <div>

      <div>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src={img1}
            style={{
              objectFit: "cover",
              height: 380
            }}
            width="100%"
          />
          <CardImgOverlay>
            <CardTitle tag="h1">
              Recycle Conduct
            </CardTitle>
            <div style={{ maxWidth: "570px" }}>
              <CardText >
                Plastics are everywhere- it is one of the biggest threats looming over the world's environmental well-being. Global plastic waste generation has more than doubled from 2000 to 2019 to 359 million tonnes. India has been a consistent contributor to adding plastic waste to these numbers. According to Union Cabinet Minister for Environment, Forest & Climate Change Bhupender Yadav, India generates 3.5 million tonnes of plastic waste annually.

              </CardText>

            </div>
          </CardImgOverlay>
        </Card>
      </div>

            <h3 style={{marginTop:"3rem", marginBottom:"2rem"}}> Rewards and Coupons </h3>
      <Row>
        <Col style={{border:"none"}}>
          <Card className={style.stat_card}>
            <img
              alt="Sample"
              src={taximg}
              className={style.stat_img}
            />  
            <CardBody>
              <CardTitle tag="h5">
            TAX & BILL CONCESSIONS
              </CardTitle>
            </CardBody>
          </Card>
          <Card>
          </Card>
        </Col>


        <Col>
        <Card className={style.stat_card}>
            <img
              alt="Sample"
              src={ticket}
              className={style.stat_img}
            />  
            <CardBody>
              <CardTitle tag="h5">
              FREE PASS & TICKETS
              </CardTitle>
            </CardBody>
          </Card>
          <Card>
          </Card>
        </Col>


        <Col>
        <Card className={style.stat_card}>
            <img
              alt="Sample"
              src={bus}
              className={style.stat_img}
            />  
            <CardBody>
              <CardTitle tag="h5">
              PUBLIC TRANSPORT CONCESSIONS
              </CardTitle>
            </CardBody>
          </Card>
          <Card>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Homepage