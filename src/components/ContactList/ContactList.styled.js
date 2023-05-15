import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #039be5;
  /* outline: 1px solid gray; */
  border-radius: 12px;
`;

export const Btn = styled.button`
  height: 40px;
  padding: 5px 10px;
  background-color: yellow;
  border-radius: 12px;
`;

export const ContactName = styled.p`
  color: white;
  font-weight: 500;
`;

export const ContactPhone = styled.p`
  color: white;
  font-weight: 500;
`;
