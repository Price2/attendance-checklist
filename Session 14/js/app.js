/* STUDENTS IGNORE THIS FUNCTION
 * All this does is create an initial
 * attendance record if one is not found
 * within localStorage.
 */

var studentTableModel =
{
students:[

    {name: "Slappy the Frog",
    daysAttendance: [],
    daysMissed: 0
},
{name: "Lilly the Lizard",
daysAttendance: [],
daysMissed: 0
},
{name: "Paulrus the Walrus",
daysAttendance: [],
daysMissed: 0
},
{name: "Gregory the Goat",
daysAttendance: [],
daysMissed: 0
},
{name: "Adam the Anaconda",
daysAttendance: [],
daysMissed: 0
},

],

init: function() {
    debugger;
    if (!localStorage.attendance) {
        console.log('Creating attendance records...');
        function getRandom() {
            return (Math.random() >= 0.5);
        }

        // var nameColumns = $('tbody .name-col'),
            attendance = {};

        this.students.forEach(function(student) {
            console.log(student)
            var name = student.name;
            attendance[name] = [];

            for (var i = 0; i <= 11; i++) {
                attendance[name].push(getRandom());
            }
        });

        localStorage.attendance = JSON.stringify(attendance);
    }
}
    
}




var studentController =
{
    init: function(){
        studentTableModel.init()
    },

    getAllStudents: function(){
        return studentTableModel.students
    }
}



var tableView ={
    
    init: function(){
        this.render()
    },
    
    render: function() {
        var students = 
        for (let j = 0; j < array.length; j++) {
            const element = array[j];

            for (let i = 0; i < array.length; i++) {
                const element = array[i];
                
            }
            
        }
    }
}

$(document).ready(function () {
    studentController.init()
});
    
    /* STUDENT APPLICATION */
    $(function() {
        var attendance = JSON.parse(localStorage.attendance),
            $allMissed = $('tbody .missed-col'),
            $allCheckboxes = $('tbody input');
    
        // Count a student's missed days
        function countMissing() {
            $allMissed.each(function() {
                var studentRow = $(this).parent('tr'),
                    dayChecks = $(studentRow).children('td').children('input'),
                    numMissed = 0;
    
                dayChecks.each(function() {
                    if (!$(this).prop('checked')) {
                        numMissed++;
                    }
                });
    
                console.log($(this))
                $(this).text(numMissed);
            });
        }
    
        // Check boxes, based on attendace records
        $.each(attendance, function(name, days) {
            var studentRow = $('tbody .name-col:contains("' + name + '")').parent('tr'),
                dayChecks = $(studentRow).children('.attend-col').children('input');
    
            dayChecks.each(function(i) {
                $(this).prop('checked', days[i]);
            });
        });
    
        // When a checkbox is clicked, update localStorage
        $allCheckboxes.on('click', function() {
            var studentRows = $('tbody .student'),
                newAttendance = {};
    
            studentRows.each(function() {
                var name = $(this).children('.name-col').text(),
                    $allCheckboxes = $(this).children('td').children('input');
    
                newAttendance[name] = [];
    
                $allCheckboxes.each(function() {
                    newAttendance[name].push($(this).prop('checked'));
                });
            });
    
            countMissing();
            localStorage.attendance = JSON.stringify(newAttendance);
        });
    
        countMissing();
    }());
