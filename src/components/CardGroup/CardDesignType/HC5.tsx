import styled from "styled-components"
import { CardType } from 'types/cardGroups'
import { handleRouteChange } from "utils/handleRouteChange"

type HC5Props = {
  bgColor?: string
}

const HC5Wrapper = styled.div<HC5Props>`
  display: flex;
  background-color: ${({bgColor})=> (bgColor? bgColor: "#FBAF03")};
  height: 180px;
  border-radius: 12px;
`

const Image = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 100%;
`

const HC5 = ({card}: {card: CardType}) => {
  const {name, bg_image, icon, bg_color, url} = card;
  const imageSrc = bg_image?.image_url || icon?.image_url;
  return (
    <HC5Wrapper bgColor={bg_color} onClick={e => handleRouteChange(url)}>
      <Image src={imageSrc} alt={name}/>
    </HC5Wrapper>
  )
}

export default HC5
