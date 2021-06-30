import styled from "styled-components";
import { useContext } from "react";
import { CardGroupsContext } from "context/cardGroups/context";
import Spinner from "components/Spinner";
import Alert from "components/Alert";
import CardGroup from "components/CardGroup";
import {CardGroupType} from 'types/cardGroups'

const HomeWrapper = styled.div`
  background-color: #f7f6f3;
  padding: 24px 10px;
`;

const Home = () => {
  const { cardGroups, pending, failure } = useContext(CardGroupsContext);

  if (pending) return <Spinner />;

  if (failure) return <Alert msg="Mock API Response went wrong" type="error" />;

  return (
    <HomeWrapper>
      {cardGroups.map((cardGroup : CardGroupType) => (
        <CardGroup key={cardGroup.id} cardGroup={cardGroup} />
      ))}
    </HomeWrapper>
  );
};

export default Home;
