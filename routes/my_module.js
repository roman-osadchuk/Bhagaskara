module.exports = {
    
    JSClock : function() {
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth();
        var day = time.getDate();
        var hour = time.getHours();
        var minute = time.getMinutes();
        var second = time.getSeconds();
        
        if(month == 0) month = "Jan";
        else if(month == 1) month = "Feb";
        else if(month == 2) month = "Mar";
        else if(month == 3) month = "Apr";
        else if(month == 4) month = "May";
        else if(month == 5) month = "Jun";
        else if(month == 6) month = "Jul";
        else if(month == 7) month = "Aug";
        else if(month == 8) month = "Sep";
        else if(month == 9) month = "Oct";
        else if(month == 10) month = "Nov";
        else if(month == 11) month = "Dec";
        
        var temp = '' + year + '-' + month + '-' + day + '  ';
        temp += ' ' + ((hour > 12) ? hour - 12 : hour);
        if (hour == 0)
        temp = ' 12';
        temp += ((minute < 10) ? ':0' : ':') + minute;
        temp += ((second < 10) ? ':0' : ':') + second;
        temp += (hour >= 12) ? ' P.M.' : ' A.M.';
        return temp;
    }
    
};


















