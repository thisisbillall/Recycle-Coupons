import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardFooter,
  Table,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
} from "reactstrap";
const Muncipal = () => {
  return (
    <>
      <Card
        className="my-2"
        style={{
          width: "100%",
        }}
      >
        <CardHeader>
          <h2>Muncipal Dashboard</h2>
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
            <h4>Welcome Katraj Muncipal!</h4>
            {/* <Button color='success' style={{'float':'right'}}>
      Request Muncipal
    </Button> */}
          </CardTitle>
          <CardText className="my-4">
            <h5>Incoming Request</h5>
          </CardText>
          <div className="trans-table">
            <Table dark>
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>From</th>
                  <th>Weight</th>
                  <th>Location</th>
                  <th>Requests</th>
                  <th>Coupon Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mohammad Bilal</td>
                  <td>2.5</td>
                  <td>Katraj Chowk</td>
                  <td>
                    <Button className="action-btns" color="success">
                      Accept
                    </Button>
                    <Button className="action-btns" color="danger">
                      Reject
                    </Button>
                  </td>
                  <td>
                    <UncontrolledDropdown>
                      <DropdownToggle caret color="dark">
                        Concession on
                      </DropdownToggle>
                      <DropdownMenu dark>
                        <DropdownItem />
                        <DropdownItem>Income Tax</DropdownItem>
                        <DropdownItem>Electricity Bill</DropdownItem>
                        <DropdownItem>Water Bill</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                  <td>
                    <Button color="warning">Send</Button>
                  </td>
                </tr>

                <tr>
                  <th scope="row">2</th>
                  <td>Shubham Sardar</td>
                  <td>1.5</td>
                  <td>Dhankawdi</td>
                  <td>
                    <Button className="action-btns" color="success">
                      Accept
                    </Button>
                    <Button className="action-btns" color="danger">
                      Reject
                    </Button>
                  </td>
                  <td>
                    <UncontrolledDropdown>
                      <DropdownToggle caret color="dark">
                        Concession on
                      </DropdownToggle>
                      <DropdownMenu dark>
                        <DropdownItem />
                        <DropdownItem>Income Tax</DropdownItem>
                        <DropdownItem>Electricity Bill</DropdownItem>
                        <DropdownItem>Water Bill</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                  <td>
                    <Button color="warning">Send</Button>
                  </td>
                </tr>

                <tr>
                  <th scope="row">3</th>
                  <td>Balaji Nagar</td>
                  <td>2.5</td>
                  <td>Katraj Chowk</td>
                  <td>
                    <Button className="action-btns" color="success">
                      Accept
                    </Button>
                    <Button className="action-btns" color="danger">
                      Reject
                    </Button>
                  </td>
                  <td>
                    <UncontrolledDropdown>
                      <DropdownToggle caret color="dark">
                        Concession on
                      </DropdownToggle>
                      <DropdownMenu dark>
                        <DropdownItem />
                        <DropdownItem>Income Tax</DropdownItem>
                        <DropdownItem>Electricity Bill</DropdownItem>
                        <DropdownItem>Water Bill</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                  <td>
                    <Button color="warning">Send</Button>
                  </td>
                </tr>

                <tr>
                  <th scope="row">4</th>
                  <td>Vaishnavi Gawli</td>
                  <td>2</td>
                  <td>Bharti Campus</td>
                  <td>
                    <Button className="action-btns" color="success">
                      Accept
                    </Button>
                    <Button className="action-btns" color="danger">
                      Reject
                    </Button>
                  </td>
                  <td>
                    <UncontrolledDropdown>
                      <DropdownToggle caret color="dark">
                        Concession on
                      </DropdownToggle>
                      <DropdownMenu dark>
                        <DropdownItem />
                        <DropdownItem>Income Tax</DropdownItem>
                        <DropdownItem>Electricity Bill</DropdownItem>
                        <DropdownItem>Water Bill</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                  <td>
                    <Button color="warning">Send</Button>
                  </td>
                </tr>

                <tr>
                  <th scope="row">5</th>
                  <td>Mohammad Bilal</td>
                  <td>4.5</td>
                  <td>Katraj Chowk</td>
                  <td>
                    <Button className="action-btns" color="success">
                      Accept
                    </Button>
                    <Button className="action-btns" color="danger">
                      Reject
                    </Button>
                  </td>
                  <td>
                    <UncontrolledDropdown>
                      <DropdownToggle caret color="dark">
                        Concession on
                      </DropdownToggle>
                      <DropdownMenu dark>
                        <DropdownItem />
                        <DropdownItem>Income Tax</DropdownItem>
                        <DropdownItem>Electricity Bill</DropdownItem>
                        <DropdownItem>Water Bill</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                  <td>
                    <Button color="warning">Send</Button>
                  </td>
                </tr>

                <tr>
                  <th scope="row">6</th>
                  <td>Mohammad Bilal</td>
                  <td>1.2</td>
                  <td>Katraj Chowk</td>
                  <td>
                    <Button className="action-btns" color="success">
                      Accept
                    </Button>
                    <Button className="action-btns" color="danger">
                      Reject
                    </Button>
                  </td>
                  <td>
                    <UncontrolledDropdown>
                      <DropdownToggle caret color="dark">
                        Concession on
                      </DropdownToggle>
                      <DropdownMenu dark>
                        <DropdownItem />
                        <DropdownItem>Income Tax</DropdownItem>
                        <DropdownItem>Electricity Bill</DropdownItem>
                        <DropdownItem>Water Bill</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                  <td>
                    <Button color="warning">Send</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};

export default Muncipal;
