import styled from "styled-components";
import { CardGroupsContext } from "context/cardGroups/context";
import { useContext } from "react";
import Spinner from "components/Spinner";
import Alert from "components/Alert";
import CardGroup from "components/CardGroup";
import {CardGroupType} from 'types/cardGroups'

const HomeWrapper = styled.div`
  background-color: #f7f6f3;
  padding: 24px 20px;
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
