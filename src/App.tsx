import { Container } from "semantic-ui-react";
import Ballance from "./components/Ballance/Ballance";
import Ballances from "./components/Ballances/Ballances";
import EntryLine from "./components/EntryLine/EntryLine";
import MainHeader from "./components/MainHeader/MainHeader";
import NewEntryForm from "./components/NewEntryForm/NewEntryForm";

const App = () => {
  return (
    <div>
      <Container>
        <MainHeader title="Budget" type="h1" />
        <Ballance
          size="small"
          labelTitleType="Your Balance:"
          valueType={5550}
        />
        <Ballances />
        <MainHeader title="History" type="h3" />
        <EntryLine desc="title" value={10} isExpense={true}/>
        <EntryLine desc="title" value={10} isExpense={false}/>
        <MainHeader title="Add new transaction" type="h3" />
        <NewEntryForm />
      </Container>
    </div>
  );
};

export default App;
