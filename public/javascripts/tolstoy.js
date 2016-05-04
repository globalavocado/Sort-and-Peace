var the_pierres =  document.getElementById("pierre");
var the_natashas =  document.getElementById("natasha");
var the_andreis =  document.getElementById("andrei");

var PierresInfo = document.getElementById("PierresDeviation");
var NatashasInfo = document.getElementById("NatashasDeviation");
var AndreisInfo = document.getElementById("AndreisDeviation");

var placeholder1 =  document.getElementById("placeholderpierre");
var placeholder2 =  document.getElementById("placeholdernatasha");
var placeholder3 =  document.getElementById("placeholderandrei");

var pierresMeanAge = math.mean([20,21,22,23,24,25,26,27,28]);
var natashasMeanAge = math.mean([13,14,15,16,17,18,19,20,21]);
var andreisMeanAge = math.mean([28,29,30,31,32,33,34,35]);

Sortable.create(pierre, {
    group: {
      name:'the_pierres',
      put: ['droppierre'],
    },
      onAdd: function (evt){
        while (PierresInfo.hasChildNodes()) {
          PierresInfo.removeChild(PierresInfo.firstChild);
        }
      }
  });

Sortable.create(natasha, {
    group: {
      name:'the_natashas',
      put: ['dropnatasha'],
    },
      onAdd: function (evt){
        while (NatashasInfo.hasChildNodes()) {
          NatashasInfo.removeChild(NatashasInfo.firstChild);
        }
      }
  });

Sortable.create(andrei, {
    group: {
      name:'the_andreis',
      put: ['dropandrei'],
    },
      onAdd: function (evt){
        while (AndreisInfo.hasChildNodes()) {
          AndreisInfo.removeChild(AndreisInfo.firstChild);
        }
      } 
  });

Sortable.create(
  droppierre, {
    group: {
      name: 'droppierre',
      put: ['the_pierres']
    },
    onAdd: function (evt){
      var myNodeList = document.querySelectorAll('.img-circle'); 
      var myArray = [];
      for (var i = 0; i < myNodeList.length; i++) {
          var self = myNodeList[i];
          myArray.push(self);
        }

      var alts = [].slice.call(document.querySelectorAll('.img-circle'));

      pierreActor = alts[0].alt;

      //get array of ages
      var nodeAgeList = document.querySelectorAll('data-age'); 
      var ageArray = [];
        for (var i = 0; i < nodeAgeList.length; i++) {
            var self = nodeAgeList[i];
            ageArray.push(self);
          }
      var pierreActorAge = Number(myNodeList[0].getAttribute("data-age"));
      var PierresStandardDeviation = math.std(pierreActorAge, pierresMeanAge);

      placeholder1.remove();

      document.getElementById("PierresDeviation").innerHTML = ("actor: " + pierreActor + " (" + pierreActorAge + ")" +  "</br>standard deviation from Pierre's age:  <span class='age-deviation'>" + Number(PierresStandardDeviation.toFixed(2)) + "</span>" );
      }
  });

Sortable.create(
  dropnatasha, {
    group: {
      name: 'dropnatasha',
      put: ['the_natashas']
    },
    onAdd: function (evt){
      var myNodeList = document.querySelectorAll('.img-circle'); 
      var myArray = [];
      for (var i = 0; i < myNodeList.length; i++) {
          var self = myNodeList[i];
          myArray.push(self);
        }

      var alts = [].slice.call(document.querySelectorAll('.img-circle'));

      var natashaActress = alts[5].alt;

      //get array of ages
      var nodeAgeList = document.querySelectorAll('data-age'); 
      var ageArray = [];
        for (var i = 0; i < nodeAgeList.length; i++) {
            var self = nodeAgeList[i];
            ageArray.push(self);
          }
      var natashaActressAge = Number(myNodeList[5].getAttribute("data-age"));
      var NatashasStandardDeviation = math.std(natashaActressAge, natashasMeanAge);

      placeholder2.remove();

      document.getElementById("NatashasDeviation").innerHTML = ("actress: " + natashaActress + " (" + natashaActressAge + ")" + "</br>standard deviation from Natasha's age: <span class='age-deviation'>" + Number(NatashasStandardDeviation.toFixed(2)) + "</span>" );
      }
  });

Sortable.create(
  dropandrei, {
    group: {
      name: 'dropandrei',
      put: ['the_andreis']
    },
    onAdd: function (evt){
      var myNodeList = document.querySelectorAll('.img-circle'); 
      var myArray = [];
      for (var i = 0; i < myNodeList.length; i++) {
          var self = myNodeList[i];
          myArray.push(self);
        }

      var alts = [].slice.call(document.querySelectorAll('.img-circle'));

      var andreiActor = alts[10].alt;

      //get array of ages
      var nodeAgeList = document.querySelectorAll('data-age'); 
      var ageArray = [];
        for (var i = 0; i < nodeAgeList.length; i++) {
            var self = nodeAgeList[i];
            ageArray.push(self);
          }
      var andreiActorAge = Number(myNodeList[10].getAttribute("data-age"));
      var AndreisStandardDeviation = math.std(andreiActorAge, andreisMeanAge);

      placeholder3.remove();

      document.getElementById("AndreisDeviation").innerHTML = ("actor: " + andreiActor + " (" + andreiActorAge + ")" + "</br>standard deviation from Andrei's age: <span class='age-deviation'>" + Number(AndreisStandardDeviation.toFixed(2)) + "</span>" );
      }
  });
