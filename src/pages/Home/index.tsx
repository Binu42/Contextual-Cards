import styled from 'styled-components'
import { CardGroupsContext } from 'context/cardGroups/context'
import { useContext } from 'react'
import Spinner from "components/Spinner"
import Alert from "components/Alert"

const HomeWrapper = styled.div`
  background-color: #F7F6F3;
  height: 100%;
  padding: 24px 20px;
`

const Home = () => {
  const {cardGroups, pending, failure} = useContext(CardGroupsContext);

  if(pending) return <Spinner/>

  if(failure) return <Alert msg="Mock API Response went wrong" type="error" />

  return (
    <HomeWrapper>
      {
        cardGroups.map(cardGroup=>{
          const {cards, id}=cardGroup;
          return <div key={id}>
            {
              cards.map((card:any, index: number) => {
                const {name}=card;
                return <div key={index}>{name}</div>
              })
            }
          </div>
        })
      }
    </HomeWrapper>
  )
}

export default Home
