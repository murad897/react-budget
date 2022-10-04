import Ballance from "../Ballance/Ballance"
import { Segment, Grid } from "semantic-ui-react"

const Ballances = () => {
  return (
    <Segment textAlign="center">
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <Ballance
            size="tiny"
            colorType="green"
            labelTitleType="Incoming"
            valueType={1900.54}
          />
        </Grid.Column>
        <Grid.Column>
          <Ballance
            size="tiny"
            colorType="red"
            labelTitleType="Expenses"
            valueType={1900.54}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  )
}

export default Ballances