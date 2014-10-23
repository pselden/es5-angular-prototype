Date.prototype.getWeekNumber = function(){
    var d = new Date(+this);
    d.setHours(0,0,0);
    d.setDate(d.getDate()+4-(d.getDay()||7));
    return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
};

function groupByWeek(){
    return function(input){
        console.log('group by week', input);
        if(!input) { return []; }

        var pageNum = -1;
        var prevWeek = 0;
        var pages = [];
        for(var i = 0; i < input.length; ++i){
            var event = input[i];
            var week = event.date.getWeekNumber();
            if(prevWeek != week){
                prevWeek = week;
                pageNum++;
            }
            pages[pageNum] = pages[pageNum] || [];
            pages[pageNum].push(event);
        }

        return pages;
    };
}

module.exports = groupByWeek;
