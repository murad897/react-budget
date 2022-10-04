import { Header } from "semantic-ui-react";

interface Title {
  title: string;
  type: string;
}

const MainHeader = ({ title, type }: Title) => {
  return <Header as={type}>{title}</Header>;
};

export default MainHeader;
