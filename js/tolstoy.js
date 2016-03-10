var the_pierres =  document.getElementById("pierre");
var the_natashas =  document.getElementById("natasha");
var the_andreis =  document.getElementById("andrei");

Sortable.create(pierre, {
		group: {
			name:'the_pierres',
			put: ['droppierre']
		}
	});

Sortable.create(natasha, {
		group: {
			name:'the_natashas',
			put: ['dropnatasha']
		}
	});

Sortable.create(andrei, {
		group: {
			name:'the_andreis',
			put: ['dropandrei']
		}
	});

Sortable.create(
	droppierre, {
		group: {
			name: 'droppierre',
			put: ['the_pierres']
		}
	});

Sortable.create(
	dropnatasha, {
		group: {
			name: 'dropnatasha',
			put: ['the_natashas']
		}
	});

Sortable.create(
	dropandrei, {
		group: {
			name: 'dropandrei',
			put: ['the_andreis']
		}
	});