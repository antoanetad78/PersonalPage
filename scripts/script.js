const showContent = function(id) {
    let elToShow = document.getElementById(id);
    elToShow.classList.remove('hidden');
    elToShow.classList.add('visible');
}
 const hideContent = function() {
     let elsToHide = document.getElementsByClassName('content');
     for(let i=0; i<elsToHide.length; i++) {
         elsToHide[i].classList.remove('visible');
         elsToHide[i].classList.add('hidden');
     }
 }
const clickListener = function() {
    let els = document.getElementsByTagName('a'); //get all <a> elements. Returns and array-like object?


    // forEach doesn't work for this 'array-like' object, so normal for-loop is used.
    // It adds an Event listener to each <a> Element, that listens for a click and 
    // when such accurs the hideContent function is triggered to make sure
    // that all elements of the content are hidden.
    
    for (let i=0; i<els.length; i++) {
        els[i].addEventListener('click', function(event) {
            hideContent();
            let id = event.target.innerHTML; //extract the text of the link
            id = id.toLowerCase(); //turn it into a lowercase to be used as id. This requires a naming convention - the ids of the  content sections MUST be the same as the link text, in lowercase.
            showContent(id); //shows the content of the selected id;

        })
    }
}
window.onload = function() {
    clickListener();
}

