/* STUDENTS IGNORE THIS FUNCTION
 * All this does is create an initial
 * attendance record if one is not found
 * within localStorage.
 */

var studentTableModel =
{
students:[],

init: function() {
    // debugger;
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
                student.daysAttendance.push(attendance[name][i])
            }
        });
        console.log(this.students)
        localStorage.attendance = JSON.stringify(attendance);
    }
    else{
        let attendance = JSON.parse(localStorage.getItem("attendance"));
        var data_obj = {}
     $.each(attendance, function (elemName, valueOfElement) { 
        studentTableModel.students.push({'name': elemName, 'daysAttendance':valueOfElement, 'daysMissed':0})
         
        });
    }
}
    
}




var studentController =
{
    init: function(){
        studentTableModel.init()
        tableView.init()
    },

    getAllStudents: function(){
        return studentTableModel.students
    }


}



var tableView ={
    
    init: function(){
        this.studentsWrapper = $("#students-wrapper")
        this.render()
    },
    
    render: function() {
        var students = studentController.getAllStudents()
        
        for(let j = 0; j < students.length; j++) {
            debugger
           this.table = $(`<tr class="student"></tr>`)
           this.name = $(`<td class="name-col">${students[j].name}</td>`)
           this.daysMissed = $(`<td class="missed-col">${students[j].daysMissed}</td>`)
           console.log(students[j].daysAttendance.length)
            for (let i = 0; i < students[j].daysAttendance.length; i++) {
                this.tr = $(`<td class="attend-col"></td>`)
                this.input = $(`<input type="checkbox" />`)
                this.input.prop('checked', students[j].daysAttendance[i])
                
                this.tr.append(this.input)
                this.table.append(this.tr)
                console.log(this.table)
            }
            this.table.prepend(this.name)
            this.table.append(this.daysMissed)
            this.studentsWrapper.append(this.table)
            
        }
    }
}

$(document).ready(function () {
    studentController.init()
});
    
    // /* STUDENT APPLICATION */
    // $(function() {
    //     var attendance = JSON.parse(localStorage.attendance),
    //         $allMissed = $('tbody .missed-col'),
    //         $allCheckboxes = $('tbody input');
    
    //     // Count a student's missed days
    //     function countMissing() {
    //         $allMissed.each(function() {
    //             var studentRow = $(this).parent('tr'),
    //                 dayChecks = $(studentRow).children('td').children('input'),
    //                 numMissed = 0;
    
    //             dayChecks.each(function() {
    //                 if (!$(this).prop('checked')) {
    //                     numMissed++;
    //                 }
    //             });
    
    //             console.log($(this))
    //             $(this).text(numMissed);
    //         });
    //     }
    
    //     // Check boxes, based on attendace records
    //     $.each(attendance, function(name, days) {
    //         var studentRow = $('tbody .name-col:contains("' + name + '")').parent('tr'),
    //             dayChecks = $(studentRow).children('.attend-col').children('input');
    
    //         dayChecks.each(function(i) {
    //             $(this).prop('checked', days[i]);
    //         });
    //     });
    
    //     // When a checkbox is clicked, update localStorage
    //     $allCheckboxes.on('click', function() {
    //         var studentRows = $('tbody .student'),
    //             newAttendance = {};
    
    //         studentRows.each(function() {
    //             var name = $(this).children('.name-col').text(),
    //                 $allCheckboxes = $(this).children('td').children('input');
    
    //             newAttendance[name] = [];
    
    //             $allCheckboxes.each(function() {
    //                 newAttendance[name].push($(this).prop('checked'));
    //             });
    //         });
    
    //         countMissing();
    //         localStorage.attendance = JSON.stringify(newAttendance);
    //     });
    
    //     countMissing();
    // }());

    
