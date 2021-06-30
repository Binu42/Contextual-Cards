import { useContext } from 'react';
import styled from 'styled-components';
import { HC1, HC6, HC3, HC5, HC9 } from './CardDesignType';
import { CardGroupType, CardType } from 'types/cardGroups';
import { CardGroupsContext } from 'context/cardGroups/context';

const getWidth = (design_type: string): string => {
  switch (design_type) {
    case 'HC3':
    case 'HC5':
    case 'HC6':
      return '100%';
    case 'HC1':
      return '50%';
    default:
      return 'auto';
  }
};

const getFlex = (isScrollable: boolean, designType: string): string => {
  if (designType === 'HC5' || designType === 'HC3' || designType === 'HC6')
    return '0 0 100%';
  else if (isScrollable && designType !== 'HC9') return '0 0 70%';
  else return '0 1 auto';
};

const CardGroupWrapper = styled.div<{ cardGroup: CardGroupType }>`
  display: flex;
  gap: 8px;
  overflow-x: ${({ cardGroup }) =>
    cardGroup.design_type !== 'HC9' && cardGroup.is_scrollable
      ? 'auto'
      : 'visible'};
  padding: 8px;
  > div {
    flex: ${({ cardGroup }) =>
      getFlex(cardGroup.is_scrollable, cardGroup.design_type)};
    width: ${({ cardGroup }) => getWidth(cardGroup.design_type)};
    height: ${({ cardGroup }) =>
      cardGroup.design_type === 'HC9' && `${cardGroup.height}px`};
  }
  /* remove scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const CardGroup = ({ cardGroup }: { cardGroup: CardGroupType }) => {
  const { remindLater, remindNever } = useContext(CardGroupsContext);
  const { cards } = cardGroup;
  return (
    <CardGroupWrapper cardGroup={cardGroup}>
      {cards.map((card: CardType) => {
        const index = Math.random();
        switch (cardGroup.design_type) {
          case 'HC1':
            return <HC1 key={index} card={card} />;
          case 'HC3':
            return (
              <HC3
                remindLater={remindLater}
                remindNever={remindNever}
                key={index}
                card={card}
              />
            );
          case 'HC5':
            return <HC5 key={index} card={card} />;
          case 'HC6':
            return <HC6 key={index} card={card} />;
          case 'HC9':
            return <HC9 key={index} card={card} />;
          default:
            return 'Invalid Design Type';
        }
      })}
    </CardGroupWrapper>
  );
};

export default CardGroup;
