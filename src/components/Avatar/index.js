import styled from "styled-components";

const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  height: auto;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid #ddd;
  width: 48px;
  height: 48px;
  background-color: white;
`;

const Avatar = ({src, alt, ...rest}) => {
  return (
    <Wrapper>
      <Image src={src} alt={alt} {...rest}/>
    </Wrapper>
  )
}

export default Avatar
