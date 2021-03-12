function validate(evt){
    return confirm("are you sure?");
}

// function validSex(){
//     var state = $("input[name='sex']:checked").val();
//         if(!state) return $("#message").html("<font style='color:red' font-size='5pt'>Please enter values in all fields!</font><br />");
//         $("#message").hide();
           
    
// }


$(".btn").click(function() {
    var myBtn = this;
    var main = $(".main");
    if (myBtn.id == "1") {
        main.setStyle("style1");
    }

    
})
