import { tabsForLetters } from '../../constants/tabs';
import { useTabs } from '../../hooks/useTabs';
import { StyledList, StyledTab, StyledTabContainer } from './styles';

const TabsA = () => {
	const { tabActive, handleTabActive } = useTabs();
	return (
		<>
			<StyledTabContainer>
				<StyledList>
					{tabsForLetters.tabsA.map((tab, index) => {
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
			<p>{tabsForLetters.tabsInfoA[tabActive]}</p>
		</>
	);
};

export default TabsA;
