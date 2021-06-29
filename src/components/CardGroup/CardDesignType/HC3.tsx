import { useEffect } from "react"
import styled from "styled-components"
import { CardType } from 'types/cardGroups'

type HC3Props = {
  bgColor?: string,
  bgImage?: string
}

type ButtonProps = {
  bgColor?: string,
  textColor?: string
}

const HC3Wrapper = styled.div<HC3Props>`
  position: relative;
  padding: 8px;
  background-image: ${({bgImage})=> `url(${bgImage})`};
  background-size: cover;
  height: 400px;
  border-radius: 12px;
`

const DetailsWrapper = styled.div`
  flex: 1 1 auto;
  position: absolute;
  padding: 30px;
  top: 40%;
`

const Title = styled.div`
  font-weight: 500;
  font-size: 30px;
`

const SubHeader = styled(Title)`
  padding-top: 10px;
  font-size: 16px;
  color: #fff;
`

const CTA = styled.div`
  display: flex;
`

const Button = styled.a<ButtonProps>`
  margin-top: 20px;
  border-radius: 5px;
  text-decoration: none;
  padding: 10px 20px;
  background-color: ${(props)=> props.bgColor};
  color: ${(props)=> props.textColor}
`

const HC3 = ({card}: {card: CardType}) => {
  console.log(card)
  const {title, description, bg_image, icon, bg_color, cta} = card;
  const imageSrc = bg_image?.image_url || icon?.image_url;

  useEffect(()=> {
    let timeId:NodeJS.Timeout;
    const HC3Component = document.querySelector("#HC3-component");
    HC3Component?.addEventListener("mouseup", ()=> {
      clearTimeout(timeId);
    })
    HC3Component?.addEventListener("mousedown", ()=> {
      timeId = setTimeout(()=> {
        console.log("timer")
      },1000);
    })
  }, [])

  return (
    <HC3Wrapper bgImage={imageSrc} bgColor={bg_color} id="HC3-component">
      <DetailsWrapper>
        <Title>{title}</Title>
        <SubHeader>{description}</SubHeader>
        <CTA>
          {
            cta?.map(action=> {
              const {url, text, bg_color, text_color}=action;
              return <Button bgColor={bg_color} textColor={text_color} target="_blank" href={url}>{text}</Button>
            })
          }
        </CTA>
      </DetailsWrapper>
    </HC3Wrapper>
  )
}

export default HC3
