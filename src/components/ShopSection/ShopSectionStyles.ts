import styled from "styled-components";

export const ShopSectionContainer = styled.div`
  width: 100%; /* Allow it to shrink with the screen */
  max-width: 1500px; /* Set the maximum width */

  margin: 0 auto;
  padding: 0 15px;
  color: white;
  background-color: rgb(27, 27, 27);
`;

// Container
export const ShopFlexBoxCard = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows wrapping to a new row if necessary */
  gap: 3px; /* Spacing between cards */
  justify-content: space-around; /* Aligns items horizontally (optional) */
`;

// Cards
export const Card = styled.div`
  flex: 1 1 calc(25% - 16px); /* Makes cards responsive */
  color: black;
  background-color: #f8f9fa;

  padding: 16px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  min-width: 250px;
  max-width: 300px;

  text-align: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
`;
