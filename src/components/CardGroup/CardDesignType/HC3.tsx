import { useMemo, useEffect, useState } from 'react';
import { Bell, XCircle } from 'react-feather';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { BgGradient, CardType } from 'types/cardGroups';
import { handleRouteChange } from 'utils/handleRouteChange';
import { formatAttribute } from 'utils/formatAttribute';
import { getGradient } from 'utils/getGradient';

type CardProps = {
  bgColor?: string;
  bgGradient?: BgGradient;
  bgImage?: string;
  opened: boolean;
};

type ButtonProps = {
  bgColor?: string;
  textColor?: string;
};

type OptionsProps = {
  opened?: boolean;
};

const HC3Component = styled.div<OptionsProps>`
  position: relative;
  margin-right: ${(props) => (props.opened ? '130px' : '0')}; ;
`;

const Options = styled.div<OptionsProps>`
  display: ${(props) => (props.opened ? 'flex' : 'none')};
  align-items: center;
  gap: 16px;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  border-radius: ${(props) => (props.opened ? '12px 0 0 12px' : '12px')};
  bottom: 0;
  left: ${(props) => (props.opened ? 0 : '-9rem')};
  position: absolute;
  top: 0;
  transition: 0.5s ease-in-out;
  width: 8rem;
`;

const CardWrapper = styled.div<CardProps>`
  position: relative;
  left: ${(props) => (props.opened ? '8rem' : 0)};
  padding: 8px;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-color: ${({ bgColor }) => bgColor};
  background-image: ${({ bgGradient }) =>
    bgGradient?.colors.length &&
    getGradient(bgGradient.angle, bgGradient.colors)};
  transition: 0.5s ease-in-out;
  background-size: cover;
  height: 400px;
  cursor: pointer;
  overflow: hidden;
  border-radius: ${(props) => (props.opened ? '0 12px 12px 0' : '12px')};
`;

const DetailsWrapper = styled.div`
  flex: 1 1 auto;
  position: absolute;
  padding: 30px;
  top: 40%;
`;

type TitleProps = {
  align?: string;
};

const Title = styled.div<TitleProps>`
  font-weight: 500;
  font-size: 30px;
  text-align: ${({ align }) => (align ? align : 'left')};
`;

const SubHeader = styled(Title)<TitleProps>`
  padding-top: 10px;
  font-size: 16px;
  color: #fff;
  text-align: ${({ align }) => (align ? align : 'left')};
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

const HC3 = ({
  card,
  remindLater,
  remindNever,
}: {
  card: CardType;
  remindLater?: (id: string) => void;
  remindNever?: (id: string) => void;
}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const {
    name,
    title,
    description,
    formatted_title,
    formatted_description,
    bg_image,
    bg_gradient,
    bg_color,
    cta,
    url,
  } = card;
  const imageSrc = bg_image?.image_url;
  const formattedTitle = useMemo(
    () => formatAttribute(formatted_title),
    [formatted_title]
  );
  const finalTitle = formattedTitle || title;
  const formattedDescription = useMemo(
    () => formatAttribute(formatted_description),
    [formatted_description]
  );
  const finalDescription = formattedDescription || description;

  const id = `HC3_${Math.ceil(Math.random() * 100)}`;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const HC3Component = document.querySelector(`#${id}`);

    HC3Component?.addEventListener('touchstart', () => {
      timeoutId = setTimeout(() => {
        setIsOptionsOpen(true);
      }, 500);
    });

    HC3Component?.addEventListener('touchend', () => {
      if (timeoutId) clearTimeout(timeoutId);
    });
  }, [id]);

  return (
    <HC3Component opened={isOptionsOpen}>
      <Options id='options' opened={isOptionsOpen}>
        <Icon
          handleClick={() => remindLater && remindLater(name)}
          icon={<Bell color='#FBAF03' size={32} />}
          text='remind later'
        />
        <Icon
          handleClick={() => remindNever && remindNever(name)}
          icon={<XCircle color='#FBAF03' size={32} />}
          text='dismiss now'
        />
      </Options>
      <CardWrapper
        opened={isOptionsOpen}
        bgImage={imageSrc}
        onClick={() => handleRouteChange(url)}
        bgColor={bg_color}
        bgGradient={bg_gradient}
        id={`${id}`}
      >
        <DetailsWrapper>
          <Title align={formatted_title?.align}>{finalTitle}</Title>
          <SubHeader align={formatted_title?.align}>
            {finalDescription}
          </SubHeader>
          <CTA>
            {cta?.map((action) => {
              const { url, text, bg_color, text_color } = action;
              return (
                <Button
                  key={Math.random()}
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
    </HC3Component>
  );
};

export default HC3;
