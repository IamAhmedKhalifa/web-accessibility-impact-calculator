(function() {
    // Create an iframe element
    var iframe = document.createElement('iframe');
    
    // Set the source to the calculator HTML file
    iframe.src = 'https://www.purplebyte.io/hubfs/Web%20Accessibility%20Impact%20Calculator/index.html';
    
    // Set some attributes for the iframe
    iframe.style.width = '100%';
    iframe.style.height = '700px'; // Adjust as needed
    iframe.style.border = 'none';
    
    // Find the embed container and append the iframe
    var container = document.getElementById('calculator-embed');
    if (container) {
        container.appendChild(iframe);
    }
})();