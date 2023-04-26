// Select DOM elements to work with
const signInButton = document.getElementById('signIn');
const signOutButton = document.getElementById('signOut')
const reportDiv = document.getElementById('report-div');
const submitDiv = document.getElementById('submit-dev');

function welcomeUser() {
    
    signInButton.classList.add('d-none');
    signOutButton.classList.remove('d-none');
    reportDiv.classList.remove('d-none');
    submitDiv.classList.remove('d-none');
    var checkboxes1 = document.querySelectorAll('input.subOption1'),
    checkall1 = document.getElementById('option1');

    for(var i=0; i<checkboxes1.length; i++) {
        checkboxes1[i].onclick = function() {
            var checkedCount = document.querySelectorAll('input.subOption:checked').length;

            checkall1.checked = checkedCount > 0;
            checkall1.indeterminate = checkedCount > 0 && checkedCount < checkboxes1.length;
    }
    }

    checkall1.onclick = function() {
        for(var i=0; i<checkboxes1.length; i++) {
            checkboxes1[i].checked = this.checked;
        }
    }

    var checkboxes2 = document.querySelectorAll('input.subOption2'),
    checkall2 = document.getElementById('option2');

    for(var i=0; i<checkboxes2.length; i++) {
        checkboxes2[i].onclick = function() {
            var checkedCount = document.querySelectorAll('input.subOption:checked').length;

            checkall2.checked = checkedCount > 0;
            checkall2.indeterminate = checkedCount > 0 && checkedCount < checkboxes2.length;
    }
    }

    checkall2.onclick = function() {
        for(var i=0; i<checkboxes2.length; i++) {
            checkboxes2[i].checked = this.checked;
        }
    }

    var checkboxes3 = document.querySelectorAll('input.subOption3'),
    checkall3 = document.getElementById('option3');

    for(var i=0; i<checkboxes3.length; i++) {
        checkboxes3[i].onclick = function() {
            var checkedCount = document.querySelectorAll('input.subOption:checked').length;

            checkall3.checked = checkedCount > 0;
            checkall3.indeterminate = checkedCount > 0 && checkedCount < checkboxes3.length;
    }
    }

    checkall3.onclick = function() {
        for(var i=0; i<checkboxes3.length; i++) {
            checkboxes3[i].checked = this.checked;
        }
    }

    var checkboxes4 = document.querySelectorAll('input.subOption4'),
    checkall4 = document.getElementById('option4');

    for(var i=0; i<checkboxes4.length; i++) {
        checkboxes4[i].onclick = function() {
            var checkedCount = document.querySelectorAll('input.subOption:checked').length;

            checkall4.checked = checkedCount > 0;
            checkall4.indeterminate = checkedCount > 0 && checkedCount < checkboxes4.length;
    }
    }

    checkall4.onclick = function() {
        for(var i=0; i<checkboxes4.length; i++) {
            checkboxes4[i].checked = this.checked;
        }
    }
}
