import styled from 'styled-components';
import { BgGradient, CardType } from 'types/cardGroups';
import { getGradient } from 'utils/getGradient';
import { handleRouteChange } from 'utils/handleRouteChange';

type HC9Props = {
  bgColor?: string;
  bgGradient?: BgGradient;
};

const HC9Wrapper = styled.div<HC9Props>`
  display: flex;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'inherit')};
  background-image: ${({ bgGradient }) =>
    bgGradient?.colors.length &&
    getGradient(bgGradient.angle, bgGradient.colors)};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const HC9 = ({ card }: { card: CardType }) => {
  const { name, bg_image, bg_color, bg_gradient, url } = card;
  const imageSrc = bg_image?.image_url;
  return (
    <HC9Wrapper
      bgColor={bg_color}
      bgGradient={bg_gradient}
      onClick={() => handleRouteChange(url)}
    >
      <Image src={imageSrc} alt={name} />
    </HC9Wrapper>
  );
};

export default HC9;
