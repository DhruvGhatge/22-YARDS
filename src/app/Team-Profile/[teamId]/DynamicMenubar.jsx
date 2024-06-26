
import dynamicType from './dynamicType';
import Cards from './cards'
import styled from '@emotion/styled';
import MatchCards from './MatchCards';
import Profile from './Profile';
import Members from './Members';





const MenubarComponent = ({
  ComponentName,
  SessionalStats,
  ConslidatedStats,
  ScoreCard,
  membersData

}) => {

  const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  justify-items: center;
`;

  if (ComponentName) {
    switch (ComponentName) {
      case dynamicType.info:
        return (
          <Cards SessionalData={SessionalStats} ConslidatedStats={ConslidatedStats} ScoreCard={ScoreCard} />
        );

      case dynamicType.matches:

        return (
          < MatchCards matchData={ScoreCard} teamMatchCard={true} />
        );

      case dynamicType.profile:
        return (

          <Profile />

        );

      case dynamicType.members:
        return (
          <Members membersData={membersData} />
        );


      default:
        return null;
    }
  }

  return null;
};

export default MenubarComponent;
