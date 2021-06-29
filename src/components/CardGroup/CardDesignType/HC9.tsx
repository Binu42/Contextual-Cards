import styled from "styled-components"
import { CardType } from 'types/cardGroups'

type HC9Props = {
  bgColor?: string
}

const HC9Wrapper = styled.div<HC9Props>`
  display: flex;
  height: 150px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const HC9 = ({card}: {card: CardType}) => {
  const {name, bg_image, icon, bg_color} = card;
  const imageSrc = bg_image?.image_url || icon?.image_url;
  return (
    <HC9Wrapper bgColor={bg_color}>
      <Image src={imageSrc} alt={name}/>
    </HC9Wrapper>
  )
}

export default HC9
