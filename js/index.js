function main() {
    $("#most-recent-lecture").load("html/lectures.html table tr:last td:eq(3) a", function() {
        let lecture_link = $("#most-recent-lecture a").attr("href");
        // console.log(lecture_link);
        lecture_link = lecture_link.replace(/lectures\//, "html/lectures/");
        // console.log(lecture_link);
        $("#most-recent-lecture a").attr("href", lecture_link);
    });

    $("#most-recent-assignment").load("html/assignments.html table tr:last td:eq(2) a", function() {
        let assignment_link = $("#most-recent-assignment a").attr("href");
        // console.log(assignment_link);
        assignment_link = assignment_link.replace(/assignments\//, "html/assignments/");
        // console.log(assignment_link);
        $("#most-recent-assignment a").attr("href", assignment_link);
    });
}

main();