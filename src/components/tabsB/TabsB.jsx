import { tabsForNumber } from '../../constants/tabs';
import { useTabs } from '../../hooks/useTabs';
import { StyledList, StyledTab, StyledTabContainer } from './styles';

const TabsB = () => {
	const { tabActive, handleTabActive } = useTabs(1);
	return (
		<>
			<StyledTabContainer>
				<StyledList>
					{tabsForNumber.tabs1.map((tab, index) => {
						return (
							<StyledTab
								key={tab.id}
								onClick={() => handleTabActive(index)}
								$active={index === tabActive}
							>
								{tab.name}
							</StyledTab>
						);
					})}
				</StyledList>
			</StyledTabContainer>
			<p>{tabsForNumber.tabsInfo1[tabActive]}</p>
		</>
	);
};

export default TabsB;
