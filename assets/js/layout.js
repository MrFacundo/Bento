// ┬  ┌─┐┬ ┬┌─┐┬ ┬┌┬┐
// │  ├─┤└┬┘│ ││ │ │
// ┴─┘┴ ┴ ┴ └─┘└─┘ ┴
// Generate Layout.

const generateLayout = () => {
	let firstButtonsContainer = `
    <div class="buttonsContainer" id="buttons_1"></div>
  `;
	let firstListsContainer = `
    <div class="listsContainer" id="lists_1"></div>
  `;


	const position = 'beforeend';

	switch (CONFIG.bentoLayout) {
		case 'bento':
			linksBlockLeft.insertAdjacentHTML(position, firstButtonsContainer);
			linksBlock.classList.remove('reduceGap');
			linksBlock.classList.remove('removeGap');
			break;
		case 'lists':
			linksBlockLeft.insertAdjacentHTML(position, firstListsContainer);
			linksBlock.classList.add('reduceGap');
			break;
		case 'buttons':
			linksBlockLeft.insertAdjacentHTML(position, firstButtonsContainer);
			linksBlock.classList.add('removeGap');
			break;
		default:
			break;
	}
};

generateLayout();
