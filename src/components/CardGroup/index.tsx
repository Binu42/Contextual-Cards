import styled from 'styled-components';
import { HC1, HC6, HC3, HC5, HC9 } from './CardDesignType';
import { CardGroupType, CardType } from 'types/cardGroups';

const getWidth = (design_type: string): string => {
  console.log(design_type);
  switch (design_type) {
    case 'HC3':
    case 'HC5':
    case 'HC6':
      return '100%';
    case 'HC1':
      return '50%';
    default:
      return 'unset';
  }
};

const getFlex = (isScrollable: boolean, designType: string): string => {
  if (designType === 'HC9') return '0 0 40%';
  else if (designType === 'HC5') return '0 0 100%';
  else if (isScrollable) return '0 0 70%';
  else return '0 1 auto';
};

const CardGroupWrapper = styled.div<{ cardGroup: CardGroupType }>`
  display: flex;
  gap: 8px;
  overflow-x: ${({ cardGroup }) =>
    cardGroup.is_scrollable ? 'auto' : 'hidden'};
  padding: 8px;
  > div {
    flex: ${({ cardGroup }) =>
      getFlex(cardGroup.is_scrollable, cardGroup.design_type)};
    width: ${({ cardGroup }) => getWidth(cardGroup.design_type)};
  }
  /* remove scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const CardGroup = ({ cardGroup }: { cardGroup: CardGroupType }) => {
  const { cards } = cardGroup;
  return (
    <CardGroupWrapper cardGroup={cardGroup}>
      {cards.map((card: CardType, index: number) => {
        switch (cardGroup.design_type) {
          case 'HC1':
            return <HC1 key={index} card={card} />;
          case 'HC3':
            return <HC3 key={index} card={card} />;
          case 'HC5':
            return <HC5 key={index} card={card} />;
          case 'HC6':
            return <HC6 key={index} card={card} />;
          case 'HC9':
            return <HC9 key={index} card={card} />;
          default:
            return "Invalid Design Type";
        }
      })}
    </CardGroupWrapper>
  );
};

export default CardGroup;
