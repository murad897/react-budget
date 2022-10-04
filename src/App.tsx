import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";

const App = () => {
  return (
    <div>
      <Container>
        <Header as="h1">budget</Header>
        <Statistic size="small">
          <Statistic.Label>Your Balance:</Statistic.Label>
          <Statistic.Value>5,550</Statistic.Value>
        </Statistic>
        <Segment textAlign="center">
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Statistic size="tiny" color="green">
                  <Statistic.Label>Incoming</Statistic.Label>
                  <Statistic.Value>1900.54</Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic size="tiny" color="red">
                  <Statistic.Label>Expenses</Statistic.Label>
                  <Statistic.Value>1900.54</Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Header as="h3">History</Header>
        <Segment color="red">
          <Grid columns={3} textAlign="right">
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">
                title
              </Grid.Column>
              <Grid.Column width={3} textAlign="right">
                10$
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit" bordered />
                <Icon name="trash" bordered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment color="green">
          <Grid columns={3} textAlign="right">
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">
                title
              </Grid.Column>
              <Grid.Column width={3} textAlign="right">
                10$
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit" bordered />
                <Icon name="trash" bordered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Header as="h3">Add new transaction</Header>
        <Form unstackable>
          <Form.Group>
            <Form.Input
              icon="tags"
              width={12}
              label="Description"
              placeholder="New shinny thing"
            />
            <Form.Input
              icon="dollar"
              width={4}
              label="Value"
              placeholder="1000"
              iconPosition="left"
            />
          </Form.Group>
          <Button.Group stylr={{ marginTop: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary>OK</Button>
          </Button.Group>
        </Form>
      </Container>
    </div>
  );
};

export default App;
