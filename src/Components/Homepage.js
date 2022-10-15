import React from 'react'
import img1 from '../assets/abc.jpg';

import {Card, CardImg, CardImgOverlay, CardText, CardTitle, Col} from 'reactstrap'
const Homepage = () => {
  return (
    <div>

      <div>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src={img1}
            style={{
              objectFit:"cover",
              height: 380
            }}
            width="100%"
          />
          <CardImgOverlay>
            <CardTitle tag="h1">
              Recycle Conduct
            </CardTitle>
            <div style={{maxWidth:"570px"}}>
              <CardText >
              Plastics are everywhere- it is one of the biggest threats looming over the world's environmental well-being. Global plastic waste generation has more than doubled from 2000 to 2019 to 359 million tonnes. India has been a consistent contributor to adding plastic waste to these numbers. According to Union Cabinet Minister for Environment, Forest & Climate Change Bhupender Yadav, India generates 3.5 million tonnes of plastic waste annually. 

              </CardText>

            </div>
          </CardImgOverlay>
        </Card>
      </div>
    </div>
  )
}

export default Homepage