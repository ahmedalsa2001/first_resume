function print_cv(){
    window.print();
    
    }

    function CONFIRMATION() {
        let text = "Do You Want To Go To Rawabi Account?";
        if (confirm(text) == true) {
          alert("you will explore it!");
        } else {
          window.location.href = "index.html"; 
        }
 
      }