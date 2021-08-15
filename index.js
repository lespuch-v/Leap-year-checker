var my_check_bnt = document.getElementById("myBtn")
var my_input_field = document.getElementById("myInputField")
var my_heading = document.getElementById("heading")



function isALeapYear(){
    num = my_input_field.value
    
    

    if(num % 4 == 0){
        if(num % 100 == 0){
            if(num % 400 ==0){
                my_heading.innerText = (num + " - " + " IS A LEAP YEAR " )
            }else{
                my_heading.innerText = (num + " - " + " IS NOT A LEAP YEAR ")
            }
        }else{
            my_heading.innerText = (num + " - " + " IS A LEAP YEAR ")
        }
    }else{
        my_heading.innerText = (num + " - " + " IS NOT A LEAP YEAR ")
    }


}

