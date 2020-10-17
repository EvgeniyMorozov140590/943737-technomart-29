var serviceTabs = (function() {
	let activeTabIndex = 0;

	return {
		create: function (config) {
			init(config);
		}
	}

	function init(config) {
		const tabs = document.querySelectorAll(config.tabsSelector);
		const tabsContent = document.querySelectorAll(config.tabsContentSelector);
		const tabActiveClass = 'tab-service-active';
		const tabHiddenClass = 'visibility-hidden';

		tabs.forEach((tab, index) => {
			tab.addEventListener('click', (event) => {
				event.preventDefault();
				activateTab(index);
			});
		})

		function activateTab(index) {
			if (activeTabIndex === index) {
				return;
			}
			
			tabs[activeTabIndex].classList.remove(tabActiveClass);
			tabs[index].classList.add(tabActiveClass);

			tabsContent[activeTabIndex].classList.add(tabHiddenClass);
			tabsContent[index].classList.remove(tabHiddenClass);

			activeTabIndex = index;
		}
	}
})();