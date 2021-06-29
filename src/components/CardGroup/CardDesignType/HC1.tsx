import Avatar from 'components/Avatar'
import styled from "styled-components"
import { CardType } from 'types/cardGroups'

type HC1Props = {
  bgColor?: string
}

const HC1Wrapper = styled.div<HC1Props>`
  display: flex;
  padding: 8px;
  align-items: center;
  background-color: ${({bgColor})=> (bgColor? bgColor: "#FBAF03")};
  border-radius: 12px;
`

const AvatarWrapper = styled.div`
  flex: 0 0 auto;
  margin-right: 8px;
`

const DetailsWrapper = styled.div`
  flex: 1 1 auto;
`

const Title = styled.div`
  font-weight: 500;
  font-size: 14px;
`

const SubHeader = styled(Title)`
  color: #1b1b1ec4;
`

const HC1 = ({card}: {card: CardType}) => {
  const {name, title,  bg_image, icon, bg_color} = card;
  const imageSrc = bg_image?.image_url || icon?.image_url;
  return (
    <HC1Wrapper bgColor={bg_color}>
      <AvatarWrapper>
        <Avatar src={imageSrc} alt={name}/>
      </AvatarWrapper>
      <DetailsWrapper>
        <Title>{name}</Title>
        <SubHeader>{title}</SubHeader>
      </DetailsWrapper>
    </HC1Wrapper>
  )
}

export default HC1
