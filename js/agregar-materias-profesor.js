
function anadirSelect() {
	'use strict';
	$('#select').clone().appendTo('.selects');
}

function main() {
	'use strict';
	$('.btn-mas').click(anadirSelect);

}

$(document).ready(main);