import { ChevronRight } from 'react-feather';
import Avatar from 'components/Avatar';
import styled from 'styled-components';
import { CardType, BgGradient } from 'types/cardGroups';
import { handleRouteChange } from 'utils/handleRouteChange';
import { formatAttribute } from 'utils/formatAttribute';
import { getGradient } from 'utils/getGradient';

type HC6Props = {
  bgColor?: string;
  bgGradient?: BgGradient;
};

const HC6Wrapper = styled.div<HC6Props>`
  display: flex;
  padding: 8px 5px;
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

const IconWrapper = styled.div`
  flex: 0 0 auto;
`;

type TitleProps = {
  align?: string;
};

const Title = styled.div<TitleProps>`
  font-weight: 500;
  font-size: 14px;
`;

const SubHeader = styled(Title)<TitleProps>`
  color: #1b1b1ec4;
`;

const HC6 = ({ card }: { card: CardType }) => {
  const {
    name,
    description,
    title,
    formatted_title,
    formatted_description,
    icon,
    bg_color,
    bg_gradient,
    url,
  } = card;
  const imageSrc = icon?.image_url;
  const formattedTitle = formatAttribute(formatted_title);
  const finalTitle = formattedTitle || title;
  const formattedDescription = formatAttribute(formatted_description);
  const finalDescription = formattedDescription || description;

  return (
    <HC6Wrapper
      bgColor={bg_color}
      bgGradient={bg_gradient}
      onClick={() => handleRouteChange(url)}
    >
      <AvatarWrapper>
        <Avatar src={imageSrc} alt={name} />
      </AvatarWrapper>
      <DetailsWrapper>
        <Title align={formatted_title?.align}>{finalTitle}</Title>
        <SubHeader align={formatted_title?.align}>{finalDescription}</SubHeader>
      </DetailsWrapper>
      <IconWrapper>
        <ChevronRight />
      </IconWrapper>
    </HC6Wrapper>
  );
};

export default HC6;
