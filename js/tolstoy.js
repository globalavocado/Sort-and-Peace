var the_pierres =  document.getElementById("pierre");
var the_natashas =  document.getElementById("natasha");
var the_andreis =  document.getElementById("andrei");

var placeholder1 =  document.getElementById("placeholderpierre");
var placeholder2 =  document.getElementById("placeholdernatasha");
var placeholder3 =  document.getElementById("placeholderandrei");

var myNodeList = document.querySelectorAll('.img-circle'); 
var myArray = [];

var pierresMedianAge = 24;
var natashasMedianAge = 16;
var andreisMedianAge = 29.5;

var PierresStandardDeviation = math.std(31, pierresMedianAge);
var NatashasStandardDeviation = math.std(31, natashasMedianAge);
var AndreisStandardDeviation = math.std(31, andreisMedianAge);

Sortable.create(pierre, {
		group: {
			name:'the_pierres',
			put: ['droppierre'],
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

						for (var i = 0; i < myNodeList.length; i++) {
			    var self = myNodeList[i];
			    myArray.push(self);
				}

			var alts = [].slice.call(document.querySelectorAll('.img-circle'));

			pierreActor = alts[0].alt;

			placeholder1.remove();
			document.getElementById("PierresDeviation").innerHTML = (pierreActor + "</br>standard deviation from Pierre's age: " + math.format(PierresStandardDeviation, {precision: 4}));
    	}
	});

Sortable.create(
	dropnatasha, {
		group: {
			name: 'dropnatasha',
			put: ['the_natashas']
		},
		onAdd: function (evt){

			for (var i = 0; i < myNodeList.length; i++) {
			    var self = myNodeList[i];
			    myArray.push(self);
				}

			var alts = [].slice.call(document.querySelectorAll('.img-circle'));

			var natashaActress = alts[5].alt;

			placeholder2.remove();
			document.getElementById("NatashasDeviation").innerHTML = (natashaActress + "</br>standard deviation from Natasha's age: " + math.format(NatashasStandardDeviation, {precision: 4}));
    	}
	});

Sortable.create(
	dropandrei, {
		group: {
			name: 'dropandrei',
			put: ['the_andreis']
		},
		onAdd: function (evt){

			for (var i = 0; i < myNodeList.length; i++) {
			    var self = myNodeList[i];
			    myArray.push(self);
				}

			var alts = [].slice.call(document.querySelectorAll('.img-circle'));

			var andreiActor = alts[10].alt;

			placeholder3.remove();			
			document.getElementById("AndreisDeviation").innerHTML = (andreiActor + "</br>standard deviation from Andrei's age: " + math.format(AndreisStandardDeviation, {precision: 4}));
    	}
	});
