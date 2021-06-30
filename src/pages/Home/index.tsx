import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { CardGroupsContext } from 'context/cardGroups/context';
import Spinner from 'components/Spinner';
import Alert from 'components/Alert';
import CardGroup from 'components/CardGroup';
import { CardGroupType } from 'types/cardGroups';

const HomeWrapper = styled.div`
  background-color: #f7f6f3;
  min-height: 100%;
  padding: 24px 10px;
`;

const Home = () => {
  const { cardGroups, pending, failure, fetchCardGroups } =
    useContext(CardGroupsContext);

  useEffect(() => {
    const pStart = { x: 0, y: 0 };
    const pStop = { x: 0, y: 0 };

    function swipeStart(e: any) {
      if (typeof e['targetTouches'] !== 'undefined') {
        const touch = e.targetTouches[0];
        pStart.x = touch.screenX;
        pStart.y = touch.screenY;
      } else {
        pStart.x = e.screenX;
        pStart.y = e.screenY;
      }
    }

    function swipeEnd(e: any) {
      if (typeof e['changedTouches'] !== 'undefined') {
        const touch = e.changedTouches[0];
        pStop.x = touch.screenX;
        pStop.y = touch.screenY;
      } else {
        pStop.x = e.screenX;
        pStop.y = e.screenY;
      }

      swipeCheck();
    }

    function swipeCheck() {
      const changeY = pStart.y - pStop.y;
      const changeX = pStart.x - pStop.x;
      if (isPullDown(changeY, changeX)) {
        fetchCardGroups && fetchCardGroups();
      }
    }

    function isPullDown(dY: number, dX: number) {
      // methods of checking slope, length, direction of line created by swipe action
      return (
        dY < 0 &&
        ((Math.abs(dX) <= 100 && Math.abs(dY) >= 300) ||
          (Math.abs(dX) / Math.abs(dY) <= 0.3 && dY >= 60))
      );
    }

    document.addEventListener(
      'touchstart',
      function (e) {
        swipeStart(e);
      },
      false
    );
    document.addEventListener(
      'touchend',
      function (e) {
        swipeEnd(e);
      },
      false
    );
  }, [fetchCardGroups]);

  if (failure) return <Alert msg='Mock API Response went wrong' type='error' />;

  return (
    <HomeWrapper>
      {pending && <Spinner />}
      {cardGroups.map((cardGroup: CardGroupType) => (
        <CardGroup key={cardGroup.id} cardGroup={cardGroup} />
      ))}
    </HomeWrapper>
  );
};

export default Home;
