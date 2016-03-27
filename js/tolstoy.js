var the_pierres =  document.getElementById("pierre");
var the_natashas =  document.getElementById("natasha");
var the_andreis =  document.getElementById("andrei");

var placeholder1 =  document.getElementById("placeholderpierre");
var placeholder2 =  document.getElementById("placeholdernatasha");
var placeholder3 =  document.getElementById("placeholderandrei");

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
		},
		onAdd: function (evt){
			placeholder1.remove();
    	}
	});

Sortable.create(
	dropnatasha, {
		group: {
			name: 'dropnatasha',
			put: ['the_natashas']
		},
		onAdd: function (evt){
			placeholder2.remove();
    	}
	});

Sortable.create(
	dropandrei, {
		group: {
			name: 'dropandrei',
			put: ['the_andreis']
		},
		onAdd: function (evt){
			placeholder3.remove();
    	}
	});
