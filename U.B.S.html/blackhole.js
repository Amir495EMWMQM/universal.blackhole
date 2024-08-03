
function showTooltip() {
document.querySelector('.tooltip').style.display = 'block';
}

function hideTooltip() {
 
   document.querySelector('.tooltip').style.display = 'none';
} 
document.getElementById('tokenImage').addEventListener('mouseover', function() {
   var infoBox = document.getElementById('infoBox');
   infoBox.style.display = 'block';
   this.style.transform = 'translateX(-150px)';
   infoBox.style.right = '120px';
   });
   
// document.getElementById('tokenImage').addEventListener('mouseleave', function() {
//    var infoBox = document.getElementById('infoBox');
//    infoBox.style.display = 'none';
//    this.style.transform = 'translateX(0)';
//    infoBox.style.right = '-350px';
//    });

// document.addEventListener('DOMContentLoaded', function() {
//    const tokenImage = document.getElementById('tokenImage');
//    const infoBox = document.getElementById('infoBox');
   
//    tokenImage.addEventListener('mouseover', function() {
//    tokenImage.style.transform = 'translateX(-150px)';
//    infoBox.style.maxWidth = '500px';
//    });
   
//    tokenImage.addEventListener('mouseout', function() {
//    tokenImage.style.transform = 'translateX(0)';
//    infoBox.style.maxWidth = '0';
//    });
//    });
