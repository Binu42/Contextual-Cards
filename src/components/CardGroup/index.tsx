/* eslint-disable no-mixed-operators */
import styled from "styled-components";
import { CardGroupType, CardType } from "types/cardGroups";

const getWidth = (cardGroupProps: CardGroupType): string => {
  const { design_type } = cardGroupProps;
  switch (design_type) {
    case "HC3" || "HC6" || "HC5" || "HC1":
      return "100%";
    default:
      return "unset";
  }
};

const getHeight = (cardGroupProps: CardGroupType): string => {
  const { design_type, height } = cardGroupProps;
  switch (design_type) {
    case "HC3":
      return "100%";
    case "HC9":
      return `${height}px`;
    default:
      return "unset";
  }
};

const CardGroupWrapper = styled.div<{cardGroup: CardGroupType}>`
  display: flex;
  overflow: ${({cardGroup}) => (cardGroup.is_scrollable ? "auto" : "hidden")};
`;

const CardWrapper = styled.div<{cardGroup: CardGroupType, card: CardType}>`
  width: ${({cardGroup}) => getWidth(cardGroup)};
  height: ${({cardGroup}) => getHeight(cardGroup)};
`;

const CardGroup = ({ cardGroup }: { cardGroup: CardGroupType }) => {
  const { cards } = cardGroup;
  return (
    <CardGroupWrapper cardGroup={cardGroup}>
      {cards.map((card: CardType, index: number) => {
        const { name, bg_image } = card;
        return <CardWrapper cardGroup={cardGroup} card={card}>
          <div className="title">{name}</div>
          {bg_image?.image_url && <div className="bg-image">
            <img src={bg_image.image_url} alt={name} />
          </div>}
          </CardWrapper>;
      })}
    </CardGroupWrapper>
  );
};

export default CardGroup;
