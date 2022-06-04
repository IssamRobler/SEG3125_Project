var num_of_parts = 2; 
var current_part = 0;
var form_parts = []

function next() {
    if (current_part >= num_of_parts-1) {
        window.location.href = '/confirm.html'
    } else {
        form_parts[current_part].style.display = 'none'
        current_part+=1
        form_parts[current_part].style.display = 'block'
    }

    update_button_states()
    
}

function prev() {
    if (current_part <= 0) {
        return 
    } else {
        form_parts[current_part].style.display = 'none'
        current_part-=1
        form_parts[current_part].style.display = 'block'

    }
    update_button_states()
    
}

function update_button_states() {
    if (current_part == (num_of_parts - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
    document.getElementById("nextBtn").innerHTML = "Next";
    }
    if (current_part == 0) {
        document.getElementById("prevBtn").className = "btn btn-disabled";
    } else {
    document.getElementById("prevBtn").className = "btn btn-primary";
    }
}


function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function init() {

    for (let i = 0; i < num_of_parts; i++) {
        let id = "form-" + String(i)
        let part = document.getElementById(id)
        part.style.display = 'none'
        form_parts.push(part)
    }
    form_parts[current_part].style.display = 'block'
    document.getElementById('nextBtn').addEventListener('click',next)
    document.getElementById('prevBtn').addEventListener('click',prev)
    update_button_states()
}

init()