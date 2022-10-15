import React from 'react'
import { Card, CardHeader, CardBody , CardTitle, CardText, Button, CardFooter, Table } from 'reactstrap'
const Person = () => {
  return (
    <>
      <Card
  className="my-2"
  style={{
    width: '100%'
  }}
>
  <CardHeader>
  <h2>User Dashboard</h2>

  </CardHeader>
  <CardBody>
    <CardTitle tag="h5">
    <h4>Welcome Mohammad Bilal!</h4>
    <Button color='success' style={{'float':'right'}}>
      Add Plastic
    </Button>
    </CardTitle>
    <CardText className='my-4'>
      <h5>Your Transactions</h5>
    </CardText>
    <div className='trans-table'>
    <Table dark>
  <thead>
    <tr>
      <th>
        Sr.
      </th>
      <th>
        Weight (kg)
      </th>
      <th>
        Muncipal Area
      </th>
      <th>
        Transaction Status
      </th>
      <th>
        Coupons
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        2.5
      </td>
      <td>
        Trimurti Chowk Muncipal
      </td>
      <td>
        Pending
      </td>
      <td>
        <Button disabled>View Coupon</Button>
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        3
      </td>
      <td>
        Katraj Muncipal
      </td>
      <td>
        Pending
      </td>
      <td>
        <Button disabled>View Coupon</Button>
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        2.1
      </td>
      <td>
        Balaji Nagar Muncipal
      </td>
      <td>
        Pending
      </td>
      <td>
        <Button disabled>View Coupon</Button>
      </td>
    </tr>
    <tr>
      <th scope="row">
        4
      </th>
      <td>
        1.5
      </td>
      <td>
        Dhankawdai Muncipal
      </td>
      <td>
        Recieved on 13/10/22
      </td>
      <td>
        <Button >View Coupon</Button>
      </td>
    </tr>
    <tr>
      <th scope="row">
        5
      </th>
      <td>
        2
      </td>
      <td>
        Katraj Muncipal
      </td>
      <td>
        Recieved on 3/9/22
      </td>
      <td>
        <Button >View Coupon</Button>
      </td>
    </tr>
    <tr>
      <th scope="row">
        6
      </th>
      <td>
        3.2
      </td>
      <td>
        Kondhwa Muncipal
      </td>
      <td>
        Recieved on 1/8/22
      </td>
      <td>
        <Button >View Coupon</Button>
      </td>
    </tr>
  </tbody>
</Table>
    </div>
    {/* <Button>
      Go somewhere
    </Button> */}
  </CardBody>
  <CardFooter>
  <Button color='success'>
      My Coupons
    </Button>
  </CardFooter>
</Card>
    </>
  )
}

export default Person