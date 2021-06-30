import { useEffect, useState } from 'react';
import {Bell, XCircle} from "react-feather"
import styled from 'styled-components';
import Icon from "components/Icon"
import { CardType } from 'types/cardGroups';

type CardProps = {
  bgColor?: string;
  bgImage?: string;
  opened: boolean;
};

type ButtonProps = {
  bgColor?: string;
  textColor?: string;
};

type OptionsProps = {
  opened?: boolean;
}

const Options = styled.div<OptionsProps>`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  bottom: 0;
  left: ${(props)=> props.opened ? 0 : '-8rem'};
  position: absolute;
  top: 0;
  transition: .5s ease-in-out;
  width: 8rem;
`

const CardWrapper = styled.div<CardProps>`
  position: relative;
  left: ${(props)=> props.opened ? "8rem" : 0};
  padding: 8px;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  transition: .5s ease-in-out;
  background-size: cover;
  height: 400px;
  cursor: pointer;
  border-radius: 12px;
`;

const DetailsWrapper = styled.div`
  flex: 1 1 auto;
  position: absolute;
  padding: 30px;
  top: 40%;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 30px;
`;

const SubHeader = styled(Title)`
  padding-top: 10px;
  font-size: 16px;
  color: #fff;
`;

const CTA = styled.div`
  display: flex;
`;

const Button = styled.a<ButtonProps>`
  margin-top: 20px;
  border-radius: 5px;
  text-decoration: none;
  padding: 10px 20px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
`;

const HC3 = ({ card }: { card: CardType }) => {
  console.log(card);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const { title, description, bg_image, icon, bg_color, cta } = card;
  const imageSrc = bg_image?.image_url || icon?.image_url;

  useEffect(() => {
    let timeId: NodeJS.Timeout;
    const HC3Component = document.querySelector('#HC3-component');
    HC3Component?.addEventListener('mouseup', () => {
      clearTimeout(timeId);
    });
    HC3Component?.addEventListener('mousedown', () => {
      timeId = setTimeout(() => {
        setIsOptionsOpen(isOpened => !isOpened)
      }, 800);
    });
  }, []);

  return (
    <div style={{position: 'relative'}}>
      <Options id="options" opened={isOptionsOpen}>
        <Icon icon={<Bell color="#FBAF03" size={32} />} text="remind later"/>
        <Icon icon={<XCircle color="#FBAF03" size={32} />} text="dismiss now"/>
      </Options>
      <CardWrapper opened={isOptionsOpen} bgImage={imageSrc} bgColor={bg_color} id='HC3-component'>
        <DetailsWrapper>
          <Title>{title}</Title>
          <SubHeader>{description}</SubHeader>
          <CTA>
            {cta?.map((action) => {
              const { url, text, bg_color, text_color } = action;
              return (
                <Button
                  bgColor={bg_color}
                  textColor={text_color}
                  target='_blank'
                  href={url}
                >
                  {text}
                </Button>
              );
            })}
          </CTA>
        </DetailsWrapper>
      </CardWrapper>
    </div>
  );
};

export default HC3;
