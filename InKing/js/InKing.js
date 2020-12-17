function toggle(){
  var x = document.getElementById("open-hours");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else{
    x.style.display = "none";
  }
}

function upDate(previewPic){
    document.getElementById('image').style.backgroundColor = "#ffffff00";
    document.getElementById('image').style.backgroundImage = "url('"+ previewPic.src +"')";

    document.getElementById('image').innerHTML = previewPic.alt;
  
  }

function unDo(){
   document.getElementById('image').style.backgroundColor = "#ffffff00";
     document.getElementById('image').style.backgroundImage = "url('')";
     
     document.getElementById('image').innerHTML = "Hover over, or tab to an image in the gallery to enlarge here.";  

  }
function caption(){
    $("input[title], select[title]").focus(function(event){
    $(this).after("<button id=tooltip></div>");
    var $title = $(this).attr('title');
    $(this).next().append($title);
    });
    $("input[title], select[title]").blur(function(){
    $('#tooltip').remove();
    });
}