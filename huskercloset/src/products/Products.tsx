import * as React from "react";
import { ProductsState } from "./ProductState";
import { IProduct } from './IProduct';
import { Button, Card, CardText, CardTitle, Container, Row, Col } from 'reactstrap';

export interface IProductsProps {
  productList: IProduct[];
}
// A stateful counter can be a React.PureComponent
export class Products extends React.PureComponent<IProductsProps, ProductsState>
{
  public readonly state = new ProductsState();

  public readonly handleIncrement = () => {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
  }

  public render(): React.ReactNode {
    return (
      <Container>
        <Row>
          {this.props.productList.map((value: IProduct, index: number) => {
            return (
            <Col key={value.id} xs={"12"} sm={"6"} lg={"3"} style={{ marginTop: '1rem' }}>
              <Card key={value.id} body={true}>
                <CardTitle>{value.name}</CardTitle>
                <CardText>This is the best fucking Husker gear.</CardText>
                <Button>Purchase</Button>
              </Card>
            </Col>
            )
          })}
        </Row>
      </Container>
    );
  }
}