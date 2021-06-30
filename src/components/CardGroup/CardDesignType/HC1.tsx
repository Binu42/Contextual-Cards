import Avatar from 'components/Avatar';
import styled from 'styled-components';
import { BgGradient, CardType } from 'types/cardGroups';
import { formatAttribute } from 'utils/formatAttribute';
import { getGradient } from 'utils/getGradient';
import { handleRouteChange } from 'utils/handleRouteChange';

type HC1Props = {
  bgColor?: string;
  bgGradient?: BgGradient;
};

const HC1Wrapper = styled.div<HC1Props>`
  display: flex;
  padding: 8px;
  align-items: center;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#FBAF03')};
  background-image: ${({ bgGradient }) =>
    bgGradient?.colors.length &&
    getGradient(bgGradient.angle, bgGradient.colors)};
  border-radius: 12px;
`;

const AvatarWrapper = styled.div`
  flex: 0 0 auto;
  margin-right: 8px;
`;

const DetailsWrapper = styled.div`
  flex: 1 1 auto;
`;

type TitleProps = {
  align?: string;
};

const Title = styled.div<TitleProps>`
  font-weight: 500;
  font-size: 14px;
  text-align: ${({ align }) => (align ? align : 'left')};
`;

const HC1 = ({ card }: { card: CardType }) => {
  const { name, title, formatted_title, icon, bg_color, bg_gradient, url } =
    card;
  const imageSrc = icon?.image_url;
  const formattedTitle = formatAttribute(formatted_title);
  const finalTitle = formattedTitle || title;

  return (
    <HC1Wrapper
      bgColor={bg_color}
      bgGradient={bg_gradient}
      onClick={() => handleRouteChange(url)}
    >
      <AvatarWrapper>
        <Avatar src={imageSrc} alt={name} />
      </AvatarWrapper>
      <DetailsWrapper>
        <Title align={formatted_title?.align}>{finalTitle}</Title>
      </DetailsWrapper>
    </HC1Wrapper>
  );
};

export default HC1;
