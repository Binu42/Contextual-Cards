import styled from 'styled-components'

const IconWrapper = styled.div`
  background: #F7F6F3;
  cursor: pointer;
  text-align: center;
  padding: 12px;
  border-radius: 12px;
`

const Icon = ({icon, text, handleClick}) => {
  return (
    <IconWrapper onClick={handleClick}>
      <div>{icon}</div>
      <div>{text}</div>
    </IconWrapper>
  )
}

export default Icon
