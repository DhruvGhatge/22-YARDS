// components/ProfileCard.js

import styled from '@emotion/styled';


const Card = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 90px;
  height: 80px;
  width: 300px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
`;

const AvatarWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  border: 5px solid purple;
`;

const Avatar = styled.img`
  width: 107px;
  height: 107px;
  border-radius: 50%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Role = styled.div`
  font-size: 14px;
  color: #666;
`;

const img = '/image/teamProfilebanner.png';

const ProfileCard = ({ name, role, avatar }) => (
  <Card>
    <AvatarWrapper>
      <Avatar src= {avatar} alt={name} />
    </AvatarWrapper>
    <Info>
      <Name>{name}</Name>
      {console.log(name)}
      <Role>{role}</Role>
    </Info>
  </Card>
);

export default ProfileCard;
