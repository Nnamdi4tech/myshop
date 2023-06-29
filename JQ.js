$("document").ready(function(){
    // THis document above, is refer to all document in this JQ. Make use of the ready in your javascript and Jquery.


    // Dialog box, that is the message you receive you you send a messg or click a button
//  $("#button").click(function(){
//     $("#dialog").dialog("open");
//    })
  
//    $("#dialog").dialog({
//     title: "Thank you for contacting",
//     closeOnEscape: false,
//     modal: true,
//     autoOpen: false
//    })


   // toaste
   $.toast({
      text : "08137159867",
      // hideAfter : "false",
      hideAfter : "30000",              
      heading : "Hello!! <br> Can I Be Of Services?",
      icon : "info",
      showHideTransition : "slide",
      allowToastClose : false,
      position : "bottom-right",                     
  
  
  //   bgColor : 'blue',               Background color for toast
  //   textColor : '#eee',             text color
  //   allowToastClose : false,        Show the close button or not
  //   hideAfter : 5000,               `false` to make it sticky or time in miliseconds to hide after
  //   stack : 5,                      `fakse` to show one stack at a time count showing the number of toasts that can be shown at once
  //   textAlign : 'left',             Alignment of text i.e. left, right, center
  //   position : 'bottom-left'       bottom-left or bottom-right or bottom-center or top-left or 
  });



  
  
  































































})
