$("#todoUl").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("#todoUl").on("click", "span", function(e){
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("#todoInput").keypress(function(e){
    if(e.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("#todoUl").append("<li class='todoLi'><span class='todoDelete'> <i class='fa fa-trash'></i> </span> " + todoText + "</li>")

    }
});

$("#todoHideInput").click(function(){
    $("#todoInput").fadeToggle();
});

$("#todoDownload").click(function(){
    var tasksList = [];
    $(".todoLi").each(function(){
        tasksList.push($(this).text());
    });
    if (tasksList.length < 1) {
        alert("Appears you don't have anything to do today!");
        return;
    }
    var doc = new jsPDF();
        doc.text(20, 20, 'TODO LIST!');
        var linePos = 30;
        for (var i=0; i<tasksList.length; i++){
            var newLine = (i+1).toString() + ': ' + tasksList[i];
            doc.text(25, linePos, newLine);
            linePos += 10;
    }
    doc.save('newToDo.pdf');
});