import styled from 'styled-components';

export const StyledTabContainer = styled.div`
	width: 300px;
`;
export const StyledList = styled.ul`
	display: flex;
	list-style: none;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
`;

export const StyledTab = styled.li`
	width: 100%;
	padding: 1rem;
	border: 1px solid black;
	background-color: pink;
	cursor: pointer;
	color: blue;
	background-color: ${({ $active }) => ($active ? 'red' : 'grey')};
`;
