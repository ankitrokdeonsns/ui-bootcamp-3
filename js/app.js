$("#newPresentation").submit(function() {
    $("#presentationContainer").append(_.template($("#presentationTemplate").html(), {
        title :$("#name").val(),
        description: $("#description").val()
    }));
    $("#name").val("");
    $("#description").val("");
    $("#addPresentationDialog").modal('hide');
    return false;
})