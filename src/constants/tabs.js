import { v4 } from 'uuid';

const tabsA = [
	{ id: v4(), name: 'A' },
	{ id: v4(), name: 'B' },
	{ id: v4(), name: 'C' },
	{ id: v4(), name: 'D' },
	{ id: v4(), name: 'E' }
];

const tabsInfoA = [
	'AAAAAAAAAA',
	'BBBBBBBB',
	'CCCCC',
	'DDDDDDDDD',
	'EEEEEEEEEE'
];

const tabs1 = [
	{ id: v4(), name: '1' },
	{ id: v4(), name: '2' },
	{ id: v4(), name: '3' }
];

const tabsInfo1 = ['11111111111', '2222222222', '333333333333'];

export const tabsForLetters = {
	tabsA,
	tabsInfoA
};

export const tabsForNumber = {
	tabs1,
	tabsInfo1
};
