import React from 'react'
import { Card, CardHeader, CardBody , CardTitle, CardText, Button, CardFooter, Table, DropdownMenu, DropdownToggle,UncontrolledDropdown, DropdownItem } from 'reactstrap'
const Muncipal = () => {
  return (
    <>
      <Card
  className="my-2"
  style={{
    width: '100%'
  }}
>
  <CardHeader>
  <h2>Muncipal Dashboard</h2>

  </CardHeader>
  <CardBody>
    <CardTitle tag="h5">
    <h4>Welcome Katraj Muncipal!</h4>
    <Button color='success' style={{'float':'right'}}>
      Request Muncipal
    </Button>
    </CardTitle>
    <CardText className='my-4'>
      <h5>Incoming Request</h5>
    </CardText>
    <div className='trans-table'>
    <Table dark>
  <thead>
    <tr>
      <th>
        Sr.
      </th>
      <th>
        From
      </th>
      <th>Weight</th>
      <th>
        Location
      </th>
      <th>
        Actions
      </th>
      <th>
        Coupon Type
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Mohammad Bilal
      </td>
      <td>
        2.5
      </td>
      <td>
        Katraj Chowk
      </td>
      <td>
        <Button className="action-btns" color='success'>Accept</Button>
        <Button className="action-btns" color='danger'>Reject</Button>

      </td>
      <td>
      <UncontrolledDropdown>
  <DropdownToggle
    caret
    color="dark"
  >
    Primary
  </DropdownToggle>
  <DropdownMenu dark>
  
    <DropdownItem />
    <DropdownItem>
      Income Tax
    </DropdownItem>
    <DropdownItem>
      Electricity Bill
    </DropdownItem>
    <DropdownItem>
      Water Bill
    </DropdownItem>
  </DropdownMenu>
</UncontrolledDropdown>
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

export default Muncipal