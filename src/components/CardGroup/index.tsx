import styled from "styled-components";
import {HC1, HC6} from "./CardDesignType"
import { CardGroupType, CardType } from "types/cardGroups";

const getWidth = (design_type: string): string => {
  switch (design_type) {
    case "HC6":
      return "100%";
    case "HC1":
      return "50%"
    default:
      return "unset";
  }
};

// const getHeight = (cardGroupProps: CardGroupType): string => {
//   const { design_type, height } = cardGroupProps;
//   switch (design_type) {
//     case "HC3":
//       return "100%";
//     case "HC9":
//       return `${height}px`;
//     default:
//       return "unset";
//   }
// };

const CardGroupWrapper = styled.div<{cardGroup: CardGroupType}>`
  display: flex;
  gap: 8px;
  overflow-x: ${({cardGroup}) => (cardGroup.is_scrollable ? "auto" : "hidden")};
  padding: 4px;
  >div {
    flex: ${({cardGroup}) => (cardGroup.is_scrollable && "0 0 70%")};
    width: ${({cardGroup}) => getWidth(cardGroup.design_type)};
  }
  /* remove scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const CardGroup = ({ cardGroup }: { cardGroup: CardGroupType }) => {
  const { cards } = cardGroup;
  return (
    <CardGroupWrapper cardGroup={cardGroup}>
      {cards.map((card: CardType, index: number) => {
        switch(cardGroup.design_type){
          case "HC1":
            return <HC1 key={index} card={card} />
          case "HC6": 
            return <HC6 key={index} card={card} />
          default:
            return "hi"
        }
      })}
    </CardGroupWrapper>
  );
};

export default CardGroup;
