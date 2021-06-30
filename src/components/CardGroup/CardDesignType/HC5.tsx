import styled from 'styled-components';
import { BgGradient, CardType } from 'types/cardGroups';
import { getGradient } from 'utils/getGradient';
import { handleRouteChange } from 'utils/handleRouteChange';

type HC5Props = {
  bgColor?: string;
  bgGradient?: BgGradient;
};

const HC5Wrapper = styled.div<HC5Props>`
  display: flex;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#FBAF03')};
  background-image: ${({ bgGradient }) =>
    bgGradient?.colors.length &&
    getGradient(bgGradient.angle, bgGradient.colors)};
  height: 180px;
  border-radius: 12px;
`;

const Image = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 100%;
`;

const HC5 = ({ card }: { card: CardType }) => {
  const { name, bg_image, bg_color, bg_gradient, url } = card;
  const imageSrc = bg_image?.image_url;

  return (
    <HC5Wrapper
      bgColor={bg_color}
      bgGradient={bg_gradient}
      onClick={() => handleRouteChange(url)}
    >
      <Image src={imageSrc} alt={name} />
    </HC5Wrapper>
  );
};

export default HC5;
