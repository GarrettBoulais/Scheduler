// SCHEDULE CONTROLLER
var scheduleController = (function() {
    
    var Shift = function(id,start,end, name) {
        this.id = id;
        this.start = start;
        this.end = end;
        this.name = name;
    }

    var Worker = function(id,availability) {
        this.id = id;
        this.availability = availability;
    }

    var data = {
        shifts: [],
        workers: [],
        schedule: {

        }
    }

    return {
        addShift: function(start,end,name) {
            var ID,newShift;
           
            if(data.shifts.length > 0) ID = data.shifts[data.shifts.length - 1].id + 1;
            else ID = 0;
            newShift = new Shift(ID,start,end,name);
            data.shifts.push(newShift);
        },

        getData: function() {
            return data;
        }
    } 

})();

// UI CONTROLLER
var UIController = (function(){

})();


// GLOBAL CONTROLLER
var controller = (function(schedCtrl,UICtrl) {
    return {
        init: function() {
            console.log('Application has started');
        }
    }
})(scheduleController,UIController);

controller.init();