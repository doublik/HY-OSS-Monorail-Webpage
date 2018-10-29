$("#before").click(function() {
    var active_id = $(".active_title").attr("id");
    $(".active_title").removeClass("active_title").addClass("topic_title");
    $(".active_label").removeClass("active_label").addClass("label");
    $("#contents").load((Number(active_id)-1) + ".html");
    $("#" + (Number(active_id)-1)).removeClass("topic_title").addClass("active_title");
    $(".label:has(.active_title)").removeClass("label").addClass("active_label");
});

$("#next").click(function() {
    var active_id = $(".active_title").attr("id");
    $(".active_title").removeClass("active_title").addClass("topic_title");
    $(".active_label").removeClass("active_label").addClass("label");
    $("#contents").load((Number(active_id)+1) + ".html");
    $("#" + (Number(active_id)+1)).removeClass("topic_title").addClass("active_title");
    $(".label:has(.active_title)").removeClass("label").addClass("active_label");
});