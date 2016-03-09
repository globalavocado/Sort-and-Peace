var the_pierres =  document.getElementById("pierre");
var the_natashas =  document.getElementById("natasha");
var the_andreis =  document.getElementById("andrei");

Sortable.create(
	pierre, {
		group: 'the_pierres'
	});

Sortable.create(
	natasha, {
		group: 'the_natashas'
	});

Sortable.create(
	andrei, {
		group: 'the_andreis'
	});

Sortable.create(
	droppierre, {
		group: {
			put: ['the_pierres']
		}
	});

Sortable.create(
	dropnatasha, {
		group: {
			put: ['the_natashas']
		}
	});

Sortable.create(
	dropandrei, {
		group: {
			put: ['the_andreis']
		}
	});