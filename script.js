const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});

darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.setI
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}
document.addEventListener("DOMContentLoaded", function() {
  // Show the printed poster content by default
  showPrintedContent();
});

function showPrintedContent() {
  // Hide digital file content
  document.querySelector('.digital-file-content').style.display = 'none';
  // Show printed poster content
  document.querySelector('.printed-poster-content').style.display = 'block';
}

function showDigitalContent() {
  // Hide printed poster content
  document.querySelector('.printed-poster-content').style.display = 'none';
  // Show digital file content
  document.querySelector('.digital-file-content').style.display = 'block';
}



mapboxgl.accessToken = 'pk.eyJ1IjoicGVyc29uYWxpc2Vwcm8iLCJhIjoiY2x2ZTNwcTM3MDNyYzJqbzV5eGdlcnJxbSJ9.lTE5n7HPK3I0EZDKuIemFQ'; // Your Mapbox access token
var canvas = document.getElementById('custom-canvas');
var ctx = canvas.getContext('2d');
var currentStyle = 'mapbox://styles/personalisepro/clve3xehy011x01qrbafc47pi'; // Default style
var currentCanvasColor = '#FFFFFF'; // Default color

var shape = 'square'; // Default shape is square
var txtcolor = '#000000'; // Text color
var currenttheme = 'black';
var currentIcon = 'icon3';
var currentIconColor = '##d91e18';
var iconcolor2 = '#33363d'; // Text color
var iconcolor1 = '#d91e18'; // Text color

var lngLat = [11.5820, 48.1351];//

var lineHeight = 1.7; // Line height between text lines
var paddingY = 0; // Padding in y-directi
var textInputs = document.querySelectorAll('#textinput');
const legend = textInputs[4];
const address =textInputs[3];

var svgPath='<?xml version="1.0" encoding="utf-8"?>\n<svg viewBox="0 0 30.4 30.4" xmlns="http://www.w3.org/2000/svg"><path fill="#d91e18" d="m22 16.9c-1.3-5.3-7.7-3.7-9.1 0.8-2.5-5-10.4-4-10.4 1.9 0.5 3.8 4.4 5.5 7.3 7.3 1.5 0.9 2.9 1.8 4.3 2.8 0.5 0.4 1.6 0.9 1.7-0.1 0.5-4.9 7-7.4 6.2-12.7zm-16 5.3v0.4c-0.4-0.3-0.7-0.6-1-1 0.4-0.4 0.7-0.9 1.1-1.3-0.2 0.3-0.4 0.6-0.5 1-0.2 0.5 0.3 1 0.7 0.5-0.1 0.1-0.2 0.3-0.3 0.4zm-1.6-1.4c-0.1-0.2-0.2-0.4-0.3-0.7 0.7-0.6 1.5-1.2 2.2-1.8-0.6 0.8-1.3 1.6-1.9 2.5zm-0.3-2.2c0.3-1.2 1.3-2 2.3-2.4-0.7 0.8-1.6 1.5-2.3 2.4zm12.4-3.5c0.3-0.1 0.6-0.2 0.8-0.2-0.2 0.2-0.5 0.4-0.7 0.5h-0.1c-0.1-0.1-0.2-0.1-0.4-0.1 0.2-0.1 0.3-0.1 0.4-0.2zm-2.7 3.4v-0.1c0.2-0.1 0.4-0.2 0.6-0.4-0.2 0.2-0.4 0.5-0.6 0.7v-0.2zm-1.3 0v0c0 0.1-0.1 0.2-0.1 0.2 0-0.1 0.1-0.1 0.1-0.2zm-0.8-1v0c0 0.1-0.1 0.2-0.2 0.2 0-0.1 0.1-0.2 0.2-0.2zm-4-1.6v0c0.1-0.1 0.2-0.1 0.3-0.1-0.2 0.1-0.3 0.3-0.5 0.4 0.1-0.1 0.2-0.2 0.2-0.3zm2.1 0.5c0.1-0.1 0.1-0.2 0.1-0.3 0.2 0.1 0.3 0.1 0.4 0.2-1 1.1-1.9 2.2-2.7 3.4h-0.1c0.8-1.1 1.6-2.1 2.3-3.3zm-2.8 7c-0.1-0.1-0.2-0.1-0.3-0.2l3.6-3.3c-0.9 1.3-2.4 2.2-3.3 3.5zm1.6 0.6c-0.1 0.1-0.1 0.2-0.1 0.3l-0.6-0.3c1.3-1 2-2.4 3.4-3.3-0.8 1.1-1.7 2.2-2.7 3.3zm2.6 1.8-0.6-0.3c1.6-1.4 3.3-2.7 4.9-4.1-1.5 1.4-3.2 2.6-4.3 4.4zm1.3 0.8c-0.2-0.1-0.4-0.2-0.6-0.4 1.3-1.6 3-2.9 4.6-4.3-1.3 1.6-2.8 3-4 4.7zm3.2-0.5c0-0.1 0.1-0.2 0.1-0.2 0 0.1 0 0.1-0.1 0.2zm-2.1 1.2c-0.1-0.1-0.2-0.1-0.2-0.2 1.1-1.5 2.3-2.8 3.8-3.8-1.3 1.3-2.6 2.5-3.6 4zm3.3-10.1-1.5 1.2c1.1-1.2 2.3-2.2 3.3-3.4 0.3 0.1 0.5 0.2 0.8 0.3-0.9 0.4-1.7 1.4-2.6 1.9zm2.9-1.1c0.1-0.1 0.1-0.3 0.1-0.4 0.2 0.2 0.3 0.4 0.4 0.6-0.8-0.2-1.1 1-1.7 1.3 0.4-0.6 0.8-1 1.2-1.5zm-0.2 4.5c0 0.1-0.1 0.1-0.1 0.2-0.3-0.1-0.6 0.3-0.9 0.4 0.5-0.5 1-1.1 1.5-1.6-0.1 0.3-0.3 0.7-0.5 1zm1-2.9c-0.5 0.4-0.9 0.7-1.4 1.1 0.5-0.6 1.2-1.2 1.3-2 0.1 0.2 0.1 0.5 0.1 0.9z"/></svg>';
var l=0;




function resizeCanvas() {

  var dpr =  3; // For text clearing when printing
  canvas.width = 740 * dpr; // Adjust canvas width
  canvas.height = 1010 * dpr; // Adjust canvas height



  var width = canvas.width;
  var height = canvas.height;
  



  var centerX = width / 2;
  var centerY = height / 3;

  ctx.fillStyle = currentCanvasColor;
  ctx.strokeStyle = '#FFFFFF'; // Border color
  ctx.lineWidth = 5*3; // Border width
ctx.save();
drawText(height ,centerX,centerY,l);
ctx.clearRect(0, 0, canvas.width, canvas.height);

 ctx.restore();
  ctx.fillRect(0, 0, width, height);



  if (shape === 'square') {
    var sideLength = (height / 1.75 ); // Adjust the side length of the square

    ctx.beginPath();
    ctx.rect(centerX - sideLength / 2, centerY - sideLength / 2, sideLength,  sideLength+l);
    ctx.closePath();
    ctx.stroke();

    // Draw filled square
    ctx.beginPath();
    ctx.rect(centerX - sideLength / 2, centerY - sideLength / 2, sideLength, sideLength+l);
    ctx.closePath();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill();
  } else if (shape === 'circle') {


 var m =0;   
if (l<0){m=l/2;}
else {m=l;}
    var radius = (height / 3.5)+m;

    ctx.beginPath();
    ctx.arc(centerX, centerY+m, radius + 0.5, 0, 2 * Math.PI, false); // Adjust radius for border width
    ctx.closePath();
    ctx.stroke();

    // Draw filled circle
    ctx.beginPath();
    ctx.arc(centerX, centerY+m, radius, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill();
  } else if (shape === 'heart') {
    var centerX = canvas.width / 2; // Center X position of the canvas
    var centerY =(canvas.height / 2.6); // Center Y position of the canvas
    var radius = (canvas.height / 3.5)+l/2;

    ctx.fillStyle = '#currentCanvasColor';
    ctx.strokeStyle = '#FFFFFF'; // Border color
    ctx.lineWidth = 10; // Border width

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the heart shape
    var drawHeart = function(a) {
      ctx.save();

      var b = function(a, b) {
        ctx.save();
        if (b) {
          ctx.lineWidth = 5*2;
          ctx.strokeStyle = b.color;
        } else {
          ctx.globalCompositeOperation = "destination-out";
        }

        ctx.beginPath();
        ctx.arc(a.circle1.x, a.circle1.y, a.circle1.radius, 0, 2 * Math.PI);
        ctx.closePath();
        if (b) {
          ctx.stroke();
        } else {
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(a.circle2.x, a.circle2.y, a.circle2.radius, 0, 2 * Math.PI);
        ctx.closePath();
        if (b) {
          ctx.stroke();
        } else {
          ctx.fill();
        }

        var c = a.bottomShape;
        ctx.beginPath();
        ctx.moveTo(c.midAir.x, c.midAir.y);
        ctx.lineTo(c.t1.x, c.t1.y);
        ctx.lineTo(c.intersection.x, c.intersection.y);
        ctx.lineTo(c.t2.x, c.t2.y);
        if (b) {
          ctx.stroke();
        } else {
          ctx.fill();
        }

        ctx.restore();
      };

      var l = a.w / a.h;
      var j = 726 / 636 > l ? 258 * a.w / 968 : 258 * a.h / 849;

      var m = function(b) {
        var c = 7 * b / 8;
        var d = {
          circle1: {
            x: a.x + a.w / 2 - c,
            y: a.y + b,
            radius: b
          },
          circle2: {
            x: a.x + a.w / 2 + c,
            y: a.y + b,
            radius: b
          }
        };
        var e = 45 * Math.PI * 2 / 360;
        var f = {
          x: d.circle1.x + b * Math.cos(Math.PI + e),
          y: d.circle1.y - b * Math.sin(Math.PI + e)
        };
        var g = {
          x: d.circle2.x + b * Math.cos(-e),
          y: d.circle2.y - b * Math.sin(-e)
        };
        var h = d.circle1.x + c;
        var i = {
          x: h,
          y: f.y + (h - f.x) * Math.tan(Math.PI / 2 - e)
        };

        d.bottomShape = {
          t1: f,
          midAir: {
            x: h,
            y: d.circle1.y
          },
          t2: g,
          intersection: i
        };

        d.width = Math.round(2 * b + 2 * c);
        d.height = Math.round(i.y - a.y);

        return d;
      };

      var shapeData = m(j);

      // Draw the white border heart shape
      b(shapeData, {
        width: 2,
        color: '#FFFFFF'
      });

      // Draw the filled heart shape
      b(shapeData);

      ctx.restore();
    };

    var heartParams = {
      x: centerX - radius, // Adjust X position to center the heart
      y: centerY+l/2 - radius, // Adjust Y position to center the heart
      w: radius * 2, // Width of the heart
      h: radius * 2 // Height of the heart
    };

    drawHeart(heartParams);
  }
  else if (shape === 'marker') {
    var centerX = canvas.width / 2; // Center X position of the canvas
    var centerY = canvas.height / 3; // Center Y position of the canvas
    var radius = canvas.height / 3.25;

    ctx.fillStyle = '#currentCanvasColor';
    ctx.strokeStyle = '#FFFFFF'; // Border color
    ctx.lineWidth = 2; // Border width

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the marker shape
    var drawMarker = function(a) {
      ctx.save();

      var b = function(a, b) {
        ctx.save();
        if (b) {
          ctx.lineWidth = 10;
          ctx.strokeStyle = b.color;
        } else {
          ctx.globalCompositeOperation = "destination-out";
        }

        ctx.beginPath();
        ctx.arc(a.circle.x, a.circle.y, a.circle.radius, 0, 2 * Math.PI);
        ctx.closePath();
        if (b) {
          ctx.stroke();
        } else {
          ctx.fill();
        }

        var c = a.bottomShape;
        ctx.beginPath();
        ctx.moveTo(c.t1.x, c.t1.y);
        ctx.lineTo(c.intersection.x, c.intersection.y);
        ctx.lineTo(c.t2.x, c.t2.y);
        if (b) {
          ctx.stroke();
        } else {
          ctx.fill();
        }

        ctx.restore();
      };

      var h = 225 * a.h / 650;

      var i = function(b) {
        var c = {
          circle: {
            x: a.x + a.w / 2,
            y: a.y + b,
            radius: b
          }
        };
        var d = 32 * Math.PI * 2 / 360;
        var e = {
          x: c.circle.x + b * Math.cos(Math.PI + d),
          y: c.circle.y - b * Math.sin(Math.PI + d)
        };
        var f = {
          x: c.circle.x + b * Math.cos(-d),
          y: c.circle.y - b * Math.sin(-d)
        };
        var g = c.circle.x;
        var h = {
          x: g,
          y: e.y + (g - e.x) * Math.tan(Math.PI / 2 - d)
        };

        c.bottomShape = {
          t1: e,
          t2: f,
          intersection: h
        };

        c.width = Math.round(2 * b);
        c.height = Math.round(h.y - a.y);

        return c;
      };

      var shapeData = i(h);

      // Draw the white border marker shape
      b(shapeData, {
        width: 2,
        color: '#FFFFFF'
      });

      // Draw the marker shape
      b(shapeData);

      ctx.restore();
    };

    var markerParams = {
      x: centerX - radius, // Adjust X position to center the marker
      y: centerY - radius, // Adjust Y position to center the marker
      w: radius * 2, // Width of the marker
      h: (radius * 2)+l // Height of the marker
    };

    drawMarker(markerParams);


    map.resize();

  }

  // Reset globalCompositeOperation
ctx.globalCompositeOperation = 'source-over';
drawText(height ,centerX,centerY);



}



  
function adjustLHeight() {
  var l = 0;
  var spaceBetweenLines = 18*3; 

  for (let index = 0; index < textInputs.length; index++) {
    var text = textInputs[index].value || textInputs[index].placeholder;
    var fontSize = window[`fontSize${index + 1}`] || (index === 0 ? 52*3 : 16*3); // Default font sizes
    if (!text) {
      l += fontSize + spaceBetweenLines; // Add line height along with font size
    
      if (shape=="circle"||shape=="heart"){
        l=30*3;
        }
    }
  }



  return l;
}






function drawText(height, centerX, centerY) {
  l = adjustLHeight();
  var spaceBetween34 = 12*3;
  var initialY = (((height - centerY) * 1.25) + 39*3);
  var maxWidth = (canvas.width - 20*3); // Adjust 20 according to your padding or margins
  var lineHeight = 1.2  ; // Adjust as needed
  var paddingY = 10*3; // Adjust as needed
  var offsetY = 60*3; // Additional offset to move text down

  // Initialize total overflow height
  var totalOverflowHeight = 0;
  var totalTextHeight = 0;

  // First, calculate total height of all text
  for (let index = 0; index < textInputs.length; index++) {
    var text = textInputs[index].value || textInputs[index].placeholder;
    var fontSize;

    if (index === 0) {
      fontSize = window.fontSize2 || 52*3;
    } else if (index === 1) {
      fontSize = window[`fontSize${index + 1}`] || 24*3;
    } else {
      fontSize = window[`fontSize${index + 1}`] || 16*3;
    }

    if (!text) {
      totalTextHeight += 5*3;
      continue; // Skip drawing if text is empty
    }

    ctx.font = `${fontSize}px ${index === 0 ? "Great Vibes" : "Ovo"}`;
    var textWidth = ctx.measureText(text).width;

    if (textWidth > maxWidth) {
      var words = text.split(' ');
      var line = '';
      var lines = [];
      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var testWidth = ctx.measureText(testLine).width;
        if (testWidth > maxWidth) {
          lines.push(line);
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      }
      lines.push(line);
      totalTextHeight += lines.length * (fontSize * lineHeight) + (lines.length - 1) * paddingY;
    } else {
      totalTextHeight += (fontSize * lineHeight) + paddingY;
    }

    if (index === 0 || index === 1) {
      totalTextHeight += spaceBetween34;
    }
  }

  // Set the starting Y position based on total text height and add offset
  var currentY = initialY - totalTextHeight + offsetY;

  // Now draw the text from top (index 0) to bottom (last index)
  for (let index = 0; index < textInputs.length; index++) {
    var text = textInputs[index].value || textInputs[index].placeholder;
    var fontSize, fontFamily, fontWeight;

    if (index === 0 || index === 1) {
      currentY += spaceBetween34;
    }

    if (index === 0) {
      fontSize = window.fontSize2 || 52*3;
      fontFamily = "Great Vibes";
      fontWeight = "normal";
    } else if (index === 1) {
      text = text.toUpperCase();
      fontSize = window[`fontSize${index + 1}`] || 24*3;
      fontFamily = "Ovo";
      fontWeight = "normal";
    } else {
      text = text.toUpperCase();
      fontSize = window[`fontSize${index + 1}`] || 16*3;
      fontFamily = "Ovo";
      fontWeight = "normal";
    }

    if (!text) {
      currentY += 5*3;
      continue; // Skip drawing if text is empty
    }

    ctx.fillStyle = txtcolor;
    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    ctx.textAlign = 'center';

    var textWidth = ctx.measureText(text).width;

    if (textWidth > maxWidth) {
      var words = text.split(' ');
      var line = '';
      var lines = [];
      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var testWidth = ctx.measureText(testLine).width;
        if (testWidth > maxWidth) {
          lines.push(line);
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      }
      lines.push(line);

      for (var m = 0; m < lines.length; m++) {
        ctx.fillText(lines[m], centerX, currentY + paddingY); // Adjusted Y position
        currentY += (fontSize * lineHeight) + paddingY;
        if (m > 0) {
          totalOverflowHeight += (fontSize * lineHeight) + paddingY;
        }
      }
    } else {
      ctx.fillText(text, centerX, currentY + paddingY); // Adjusted Y position
      currentY += (fontSize * lineHeight) + paddingY;
    }
  }

  // Adjust l variable based on overflow text height
  l -= totalOverflowHeight;
}

 // Redraw the moon when the window regains focus
 window.addEventListener('focus', resizeCanvas);




 
function changeIcon(iconName, color) {

  currentIcon = iconName;
  currentIconColor = color;

  
  switch (iconName) {
    case 'icon1':
      svgPath = '<?xml version="1.0" encoding="utf-8"?>\n<svg viewBox="0 0 30.4 30.4" xmlns="http://www.w3.org/2000/svg"><path fill="' + color + '" d="m15.1 11.6c-1.8 0-3.5 0.7-4.7 2-1.3 1.3-1.9 3-1.9 4.8 0 2.1 1.1 4.2 2.8 5.4 0.9 0.6 1.6 1.6 2 2.6l1 3.1c0.1 0.4 0.4 0.6 0.8 0.7h0.1c0.4 0 0.7-0.2 0.9-0.6l1-3.1c0.4-1.1 1-2 2-2.7 1.9-1.3 2.9-3.3 2.9-5.6-0.1-3.7-3.1-6.6-6.9-6.6zm3.9 6.7c0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8 1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8z"/></svg>';
      break;
    case 'icon2':
      svgPath = '<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.4 30.4"><path fill="' + color + '" d="M6.7,20.9L6.7,20.9h1.9v8.5c0,0.6,0.4,0.9,0.9,0.9h11.3c0.6,0,0.9-0.4,0.9-0.9v-8.5h1.9c0.6,0,0.9-0.4,0.9-0.9c0-0.3-0.2-0.6-0.4-0.8l-8.5-5.7c-0.3-0.2-0.8-0.2-1,0l-8.5,5.7c-0.5,0.3-0.6,0.8-0.3,1.3l0,0C6.1,20.7,6.4,20.9,6.7,20.9zM13.3,23.7c0-0.6,0.4-0.9,0.9-0.9h1.9c0.6,0,0.9,0.4,0.9,0.9v4.7h-3.7L13.3,23.7z"/></svg>';
      break;
    case 'icon3':
      svgPath = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.4 30.4"><path fill="' + color + '" d="M18.9,14.8c-1.4,0-2.8,0.6-3.7,1.7c-0.9-1.1-2.3-1.7-3.7-1.7c-2.7,0-4.9,2.2-4.9,4.9c0,1.3,0.5,2.5,1.3,3.4l6.6,6.9c0.3,0.3,0.8,0.3,1.1,0c0,0,0,0,0,0l6.6-6.9l0,0c1.9-2,1.8-5-0.2-6.9C21.3,15.3,20.1,14.8,18.9,14.8z"/></svg>';
      break;
    case 'icon4':
      svgPath = '<?xml version="1.0" encoding="utf-8"?>\n<svg viewBox="0 0 30.4 30.4" xmlns="http://www.w3.org/2000/svg"><path fill="' + color + '" d="m22 16.9c-1.3-5.3-7.7-3.7-9.1 0.8-2.5-5-10.4-4-10.4 1.9 0.5 3.8 4.4 5.5 7.3 7.3 1.5 0.9 2.9 1.8 4.3 2.8 0.5 0.4 1.6 0.9 1.7-0.1 0.5-4.9 7-7.4 6.2-12.7zm-16 5.3v0.4c-0.4-0.3-0.7-0.6-1-1 0.4-0.4 0.7-0.9 1.1-1.3-0.2 0.3-0.4 0.6-0.5 1-0.2 0.5 0.3 1 0.7 0.5-0.1 0.1-0.2 0.3-0.3 0.4zm-1.6-1.4c-0.1-0.2-0.2-0.4-0.3-0.7 0.7-0.6 1.5-1.2 2.2-1.8-0.6 0.8-1.3 1.6-1.9 2.5zm-0.3-2.2c0.3-1.2 1.3-2 2.3-2.4-0.7 0.8-1.6 1.5-2.3 2.4zm12.4-3.5c0.3-0.1 0.6-0.2 0.8-0.2-0.2 0.2-0.5 0.4-0.7 0.5h-0.1c-0.1-0.1-0.2-0.1-0.4-0.1 0.2-0.1 0.3-0.1 0.4-0.2zm-2.7 3.4v-0.1c0.2-0.1 0.4-0.2 0.6-0.4-0.2 0.2-0.4 0.5-0.6 0.7v-0.2zm-1.3 0v0c0 0.1-0.1 0.2-0.1 0.2 0-0.1 0.1-0.1 0.1-0.2zm-0.8-1v0c0 0.1-0.1 0.2-0.2 0.2 0-0.1 0.1-0.2 0.2-0.2zm-4-1.6v0c0.1-0.1 0.2-0.1 0.3-0.1-0.2 0.1-0.3 0.3-0.5 0.4 0.1-0.1 0.2-0.2 0.2-0.3zm2.1 0.5c0.1-0.1 0.1-0.2 0.1-0.3 0.2 0.1 0.3 0.1 0.4 0.2-1 1.1-1.9 2.2-2.7 3.4h-0.1c0.8-1.1 1.6-2.1 2.3-3.3zm-2.8 7c-0.1-0.1-0.2-0.1-0.3-0.2l3.6-3.3c-0.9 1.3-2.4 2.2-3.3 3.5zm1.6 0.6c-0.1 0.1-0.1 0.2-0.1 0.3l-0.6-0.3c1.3-1 2-2.4 3.4-3.3-0.8 1.1-1.7 2.2-2.7 3.3zm2.6 1.8-0.6-0.3c1.6-1.4 3.3-2.7 4.9-4.1-1.5 1.4-3.2 2.6-4.3 4.4zm1.3 0.8c-0.2-0.1-0.4-0.2-0.6-0.4 1.3-1.6 3-2.9 4.6-4.3-1.3 1.6-2.8 3-4 4.7zm3.2-0.5c0-0.1 0.1-0.2 0.1-0.2 0 0.1 0 0.1-0.1 0.2zm-2.1 1.2c-0.1-0.1-0.2-0.1-0.2-0.2 1.1-1.5 2.3-2.8 3.8-3.8-1.3 1.3-2.6 2.5-3.6 4zm3.3-10.1-1.5 1.2c1.1-1.2 2.3-2.2 3.3-3.4 0.3 0.1 0.5 0.2 0.8 0.3-0.9 0.4-1.7 1.4-2.6 1.9zm2.9-1.1c0.1-0.1 0.1-0.3 0.1-0.4 0.2 0.2 0.3 0.4 0.4 0.6-0.8-0.2-1.1 1-1.7 1.3 0.4-0.6 0.8-1 1.2-1.5zm-0.2 4.5c0 0.1-0.1 0.1-0.1 0.2-0.3-0.1-0.6 0.3-0.9 0.4 0.5-0.5 1-1.1 1.5-1.6-0.1 0.3-0.3 0.7-0.5 1zm1-2.9c-0.5 0.4-0.9 0.7-1.4 1.1 0.5-0.6 1.2-1.2 1.3-2 0.1 0.2 0.1 0.5 0.1 0.9z"/></svg>';
      break;
    default:
      svgPath = '<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/></svg>';
      break;
  }
  var markerIcon = document.createElement('div');
  markerIcon.className = 'marker';
  markerIcon.innerHTML = svgPath;

  lngLat = draggableMarker.getLngLat();
  draggableMarker.remove(); 

  center = map.getCenter();

  newCenter = {
    lat: lngLat.lat,
    lng: lngLat.lng
  };

  draggableMarker = new mapboxgl.Marker(markerIcon, { draggable: true })
    .setLngLat(newCenter)
    .addTo(map);




  draggableMarker.on('dragend', function() {
    lngLat = draggableMarker.getLngLat();

    var lat = lngLat.lat;
    var lng = lngLat.lng;
    
    var roundedLat = lat.toFixed(2);
    var roundedLng = lng.toFixed(2);
    
    var latitudeDirection = lat >= 0 ? 'N' : 'S';
    var longitudeDirection = lng >= 0 ? 'E' : 'W';
    
   
    
    legend.value=`${roundedLat}°${latitudeDirection} / ${roundedLng}°${longitudeDirection}`;
    resizeCanvas();

  });
}





resizeCanvas();


const map = new mapboxgl.Map({
  container: 'map',
  style: currentStyle,
  center: lngLat,
  zoom: 12,
  attributionControl: false
});


map.once("render", () => {mapEl = map.getCanvas();});
  
 
 map.addControl(new mapboxgl.NavigationControl({
  showCompass: false 
}), 'top-left');





function changeMapStyle(style, canvasColor, textcolor) {
  currentStyle = style;
  currentCanvasColor = canvasColor;
  txtcolor = textcolor;
  resizeCanvas();
  map.setStyle('mapbox://styles/personalisepro/' + style);
  switchiconcolor(currenttheme);
}








window.addEventListener('resize', resizeCanvas);
textInputs.forEach(function(textInput) {
  textInput.addEventListener('input', resizeCanvas);
});

function switchShape(newShape) {
  shape = newShape;
  resizeCanvas();
}

var marker = document.createElement('div');
marker.className = 'marker';
marker.innerHTML = '<?xml version="1.0" encoding="utf-8"?>\n<svg viewBox="0 0 30.4 30.4" xmlns="http://www.w3.org/2000/svg"><path fill="#d91e18" d="m22 16.9c-1.3-5.3-7.7-3.7-9.1 0.8-2.5-5-10.4-4-10.4 1.9 0.5 3.8 4.4 5.5 7.3 7.3 1.5 0.9 2.9 1.8 4.3 2.8 0.5 0.4 1.6 0.9 1.7-0.1 0.5-4.9 7-7.4 6.2-12.7zm-16 5.3v0.4c-0.4-0.3-0.7-0.6-1-1 0.4-0.4 0.7-0.9 1.1-1.3-0.2 0.3-0.4 0.6-0.5 1-0.2 0.5 0.3 1 0.7 0.5-0.1 0.1-0.2 0.3-0.3 0.4zm-1.6-1.4c-0.1-0.2-0.2-0.4-0.3-0.7 0.7-0.6 1.5-1.2 2.2-1.8-0.6 0.8-1.3 1.6-1.9 2.5zm-0.3-2.2c0.3-1.2 1.3-2 2.3-2.4-0.7 0.8-1.6 1.5-2.3 2.4zm12.4-3.5c0.3-0.1 0.6-0.2 0.8-0.2-0.2 0.2-0.5 0.4-0.7 0.5h-0.1c-0.1-0.1-0.2-0.1-0.4-0.1 0.2-0.1 0.3-0.1 0.4-0.2zm-2.7 3.4v-0.1c0.2-0.1 0.4-0.2 0.6-0.4-0.2 0.2-0.4 0.5-0.6 0.7v-0.2zm-1.3 0v0c0 0.1-0.1 0.2-0.1 0.2 0-0.1 0.1-0.1 0.1-0.2zm-0.8-1v0c0 0.1-0.1 0.2-0.2 0.2 0-0.1 0.1-0.2 0.2-0.2zm-4-1.6v0c0.1-0.1 0.2-0.1 0.3-0.1-0.2 0.1-0.3 0.3-0.5 0.4 0.1-0.1 0.2-0.2 0.2-0.3zm2.1 0.5c0.1-0.1 0.1-0.2 0.1-0.3 0.2 0.1 0.3 0.1 0.4 0.2-1 1.1-1.9 2.2-2.7 3.4h-0.1c0.8-1.1 1.6-2.1 2.3-3.3zm-2.8 7c-0.1-0.1-0.2-0.1-0.3-0.2l3.6-3.3c-0.9 1.3-2.4 2.2-3.3 3.5zm1.6 0.6c-0.1 0.1-0.1 0.2-0.1 0.3l-0.6-0.3c1.3-1 2-2.4 3.4-3.3-0.8 1.1-1.7 2.2-2.7 3.3zm2.6 1.8-0.6-0.3c1.6-1.4 3.3-2.7 4.9-4.1-1.5 1.4-3.2 2.6-4.3 4.4zm1.3 0.8c-0.2-0.1-0.4-0.2-0.6-0.4 1.3-1.6 3-2.9 4.6-4.3-1.3 1.6-2.8 3-4 4.7zm3.2-0.5c0-0.1 0.1-0.2 0.1-0.2 0 0.1 0 0.1-0.1 0.2zm-2.1 1.2c-0.1-0.1-0.2-0.1-0.2-0.2 1.1-1.5 2.3-2.8 3.8-3.8-1.3 1.3-2.6 2.5-3.6 4zm3.3-10.1-1.5 1.2c1.1-1.2 2.3-2.2 3.3-3.4 0.3 0.1 0.5 0.2 0.8 0.3-0.9 0.4-1.7 1.4-2.6 1.9zm2.9-1.1c0.1-0.1 0.1-0.3 0.1-0.4 0.2 0.2 0.3 0.4 0.4 0.6-0.8-0.2-1.1 1-1.7 1.3 0.4-0.6 0.8-1 1.2-1.5zm-0.2 4.5c0 0.1-0.1 0.1-0.1 0.2-0.3-0.1-0.6 0.3-0.9 0.4 0.5-0.5 1-1.1 1.5-1.6-0.1 0.3-0.3 0.7-0.5 1zm1-2.9c-0.5 0.4-0.9 0.7-1.4 1.1 0.5-0.6 1.2-1.2 1.3-2 0.1 0.2 0.1 0.5 0.1 0.9z"/></svg>';



var offsetX = 0; 
var offsetY = 1000; 

var center = map.getCenter();

var latOffset = offsetY / 111111; 
var lngOffset = offsetX / (111111 * Math.cos(center.lat * Math.PI / 180)); 

var newCenter = {
  lat: center.lat + latOffset,
  lng: center.lng + lngOffset
};

var draggableMarker = new mapboxgl.Marker(marker, { draggable: true })
  .setLngLat(newCenter)
  .addTo(map);


draggableMarker.on('dragend', function() {
  lngLat = draggableMarker.getLngLat();

  var lat = lngLat.lat;
  var lng = lngLat.lng;
  
  var roundedLat = lat.toFixed(2);
  var roundedLng = lng.toFixed(2);
  
  var latitudeDirection = lat >= 0 ? 'N' : 'S';
  var longitudeDirection = lng >= 0 ? 'E' : 'W';
  
 
  legend.value=`${roundedLat}°${latitudeDirection} / ${roundedLng}°${longitudeDirection}`;
  resizeCanvas();

});

const inputBox = document.getElementById('searchinput1');
const suggestionsContainer = document.getElementById('suggestions-container');

function handleInput() {
  const inputValue = inputBox.value.trim();

  const suggestionsContainer = document.getElementById('suggestions-container');

  if (inputValue.length === 0) {
    suggestionsContainer.innerHTML = '';
    suggestionsContainer.style.display = 'none';
    return;
  }

  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(inputValue)}.json?&access_token=${mapboxgl.accessToken}`)
    .then(response => response.json())
    .then(data => {
      suggestionsContainer.innerHTML = '';

      data.features.forEach(feature => {
        const suggestion = document.createElement('div');
        suggestion.textContent = feature.place_name;
        suggestion.classList.add('suggestion', 'p-2', 'cursor-pointer', 'hover:bg-gray-100', 'truncate');
        suggestion.style.fontSize = '12px'; 
        suggestion.addEventListener('click', () => {
          const coordinates = feature.center;
          var mapCenter = {
            lat: coordinates[1] - latOffset,
            lng: coordinates[0] - lngOffset
          };
          map.setFilter('icons', null);
          map.setCenter(mapCenter);
          draggableMarker.setLngLat(feature.center);
          lngLat = feature.center;
          lngLat = draggableMarker.getLngLat();

          var lat = lngLat.lat;
          var lng = lngLat.lng;
          
          var roundedLat = lat.toFixed(2);
          var roundedLng = lng.toFixed(2);
          
          var latitudeDirection = lat >= 0 ? 'N' : 'S';
          var longitudeDirection = lng >= 0 ? 'E' : 'W';
        
          legend.value=`${roundedLat}°${latitudeDirection} / ${roundedLng}°${longitudeDirection}`;
          address.value= feature.place_name;
          inputBox.value= feature.place_name;
          
          resizeCanvas();
          suggestionsContainer.style.display = 'none';
        });

        suggestionsContainer.appendChild(suggestion);
      });

      suggestionsContainer.style.width = `${inputBox.offsetWidth}px`;
      suggestionsContainer.style.display = 'block';
    })
    .catch(error => {
      console.error('Error fetching suggestions:', error);
    });
}
document.addEventListener('click', function(event) {
  if (!event.target.classList.contains('suggestion') && event.target !== inputBox) {
    suggestionsContainer.style.display = 'none';
  }
});

inputBox.addEventListener('input', handleInput);


function changeColor(color) {
  var icon = document.querySelector('.marker svg path');
  icon.setAttribute('fill', color);
}






const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener('click', function() {
    const circle = square.querySelector('.circle');

    if (circle) {
      currenttheme = circle.classList[1];

      switch (currenttheme) {
        case 'black':
          changeMapStyle('clve3xehy011x01qrbafc47pi', '#FFFFFF', "#000000");
          document.querySelector('.box2').style.backgroundColor = 'black';
          changeIcon(currentIcon, iconcolor1);
          break;
        case 'custom':
          changeMapStyle('clve3ybl800nx01o09wv3236e', '#FFFFFF', "#000000");
          document.querySelector('.box2').style.backgroundColor = 'brown';
          changeIcon(currentIcon, iconcolor2);
          break;
        case 'white':
          changeMapStyle('clve3uxrw00nv01o0hgka1f82', '#2f4550', "#FFFFFF");

          document.querySelector('.box2').style.backgroundColor = '#e8b43c';
          changeIcon(currentIcon, iconcolor2);
          break;
        case 'custom2':
          changeMapStyle('clve3wsq1011001ph6i227zhg', '#25293b', "#FFFFFF");
          document.querySelector('.box2').style.backgroundColor = '#e8b43c';
          changeIcon(currentIcon, iconcolor2);
          break;
        case 'theme5':
            changeMapStyle('clw2n1qjs02hx01qv1gzphtdc', '#abbab5', "#000000");
            document.querySelector('.box2').style.backgroundColor = '#e8b43c';
            changeIcon(currentIcon, iconcolor2);
            break;  
       case 'theme6':
              changeMapStyle('clw2mvkr602lc01qua0uo6gpd', '#164b60', "#FFFFFF");
              document.querySelector('.box2').style.backgroundColor = '#e8b43c';
              changeIcon(currentIcon, iconcolor2);
              break;
        case 'theme7':
                changeMapStyle('clw2na6fu02i901qz3ynw7xd4', '#eae3d7', "#000000");
                document.querySelector('.box2').style.backgroundColor = '#e8b43c';
                changeIcon(currentIcon, iconcolor2);
                
                
        default:
         
          break;
      }
    }
  });
});




const heartImg = document.getElementById('heartShape');

heartImg.addEventListener('click', function() {
  switchShape('marker')
});




function handleMarkerClick(type) {
  switch (type) {
    case 'heart':
      changeIcon('icon3', currentIconColor);
  
 
      break;
    case 'heart3':
      changeIcon('icon4', currentIconColor);
   
     
      break;
    case 'house':
      changeIcon('icon2', currentIconColor);
    
      break;
    case 'pin3':
      changeIcon('icon1', currentIconColor)
      
    
      break;
    default:
      break;
  }
}




function handleBoxClick(boxId) {
  switch (boxId) {
    case 'box1':
      changeIcon(currentIcon, iconcolor1);



      break;
    case 'box2':
      changeIcon(currentIcon, iconcolor2);
      break;
    default:
      break;
  }
}

function switchiconcolor(theme) {
  switch (theme) {
    case 'black':
      iconcolor1 = '#d91e18';
      iconcolor2 = '#33363d';
      break;
    case 'custom':
      iconcolor1 = '#d91e18';
      iconcolor2 = '#725142';
      break;
    case 'white':
      iconcolor1 = '#d91e18';
      iconcolor2 = '#e5b33b';
      break;
    case 'custom2':
      iconcolor1 = '#d91e18';
      iconcolor2 = '#e5b33b';
      break;
    case 'theme5':
        iconcolor1 = '#d91e18';
        iconcolor2 = '#e5b33b';
     break;
    case 'theme6':
          iconcolor1 = '#d91e18';
          iconcolor2 = '#e5b33b';
    break;
    case 'theme7':
          iconcolor1 = '#d91e18';
          iconcolor2 = '#e5b33b';
          
            
    }
}


function selectBox(boxNumber) {
  const mapContainer = document.getElementById('map-container');
  const shadowImage = document.getElementById('shadow-image');

  if (boxNumber === 1) {
    // Settings for boxposter1
    mapContainer.style.width = '26.5%';
    mapContainer.style.height = '68%';
    mapContainer.style.position = 'absolute';
    mapContainer.style.top = '53%';
    mapContainer.style.left = '52.5%';
    mapContainer.style.transform = 'translate(-50%, -50%)';
    mapContainer.style.backgroundColor = 'transparent';
    mapContainer.style.zIndex = '2';
    mapContainer.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.5)';

    shadowImage.style.position = 'absolute';
    shadowImage.style.top = '52.7%';
    shadowImage.style.transform = 'translateY(-50%)';
    shadowImage.style.left = '33.35%';
    shadowImage.style.backgroundPosition = 'right bottom';
    shadowImage.style.width = '12.32%';
    shadowImage.style.height = '55.5%';
    shadowImage.style.backgroundImage = "url('shadow.png')";
    shadowImage.style.backgroundSize = 'cover';
    shadowImage.style.zIndex = '1';

 
  } else if (boxNumber === 2) {
    // Settings for boxposter2
    mapContainer.style.width = '28.27%';
    mapContainer.style.height = '70.67%';
    mapContainer.style.position = 'absolute';
    mapContainer.style.top = '53%';
    mapContainer.style.left = '53%';
    mapContainer.style.transform = 'translate(-50%, -50%)';
    mapContainer.style.backgroundColor = 'transparent';
    mapContainer.style.zIndex = '2';
    mapContainer.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.5)';

    shadowImage.style.position = 'absolute';
    shadowImage.style.top = '52.7%';
    shadowImage.style.transform = 'translateY(-50%)';
    shadowImage.style.left = '32.85%';
    shadowImage.style.backgroundPosition = 'right bottom';
    shadowImage.style.width = '13.32%';
    shadowImage.style.height = '70.5%';
    shadowImage.style.backgroundImage = "url('shadow.png')";
    shadowImage.style.backgroundSize = 'cover';
    shadowImage.style.zIndex = '1';
  
  }
  }




  function exportToImage( paperSize="A4") {
    const dpi = 300;
    const mmToInches = 25.4;

    let paperWidthMM, paperHeightMM;

    // Set dimensions based on selected paper size
    switch (paperSize) {
        case 'A2':
            paperWidthMM = 420;
            paperHeightMM = 594;
            break;
        case 'A3':
            paperWidthMM = 297;
            paperHeightMM = 420;
            break;
        case 'A4':
        default:
            paperWidthMM = 210;
            paperHeightMM = 297;
            break;
    }

    const paperWidthPX = Math.floor(paperWidthMM * dpi / mmToInches);
    const paperHeightPX = Math.floor(paperHeightMM * dpi / mmToInches);

    console.log("Calculated canvas dimensions:", paperWidthPX, "x", paperHeightPX);

    // Create a hidden container 
    const hiddenContainer = document.createElement('div');
    hiddenContainer.style.width = `${paperWidthPX}px`;
    hiddenContainer.style.height = `${paperHeightPX}px`;
    hiddenContainer.style.position = 'absolute';
    hiddenContainer.style.top = '-9999px';
    document.body.appendChild(hiddenContainer);

    // Initialize the map in the hidden container
    const hiddenMap = new mapboxgl.Map({
        container: hiddenContainer,
        style: map.getStyle(), 
        center: map.getCenter(), 
        zoom: map.getZoom(), 
        bearing: map.getBearing(),
        pitch: map.getPitch() 
    });

    hiddenMap.once('load', () => {
       
        const originalBounds = map.getBounds();
        hiddenMap.fitBounds(originalBounds, {
            animate: false,
            padding: 0
        });

        hiddenMap.resize(); 

        hiddenMap.once('render', () => {
            // Create a temporary canvas 
            const mapCanvas = hiddenMap.getCanvas();
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = paperWidthPX;
            tempCanvas.height = paperHeightPX;
            const tempCtx = tempCanvas.getContext('2d');

            // Draw the map canvas onto the temporary canvas
            tempCtx.drawImage(mapCanvas, 0, 0, tempCanvas.width, tempCanvas.height);

            // Get the overlay canvas and draw it onto the temporary canvas
            const overlayCanvas = document.getElementById('custom-canvas');
            tempCtx.drawImage(overlayCanvas, 0, 0, tempCanvas.width, tempCanvas.height);

            // Draw the draggable marker on the temporary canvas
            const markerIcon = document.createElement('div');
            markerIcon.className = 'marker';
            markerIcon.innerHTML = svgPath;

            // Create an image from the SVG marker
            const svgBlob = new Blob([svgPath], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(svgBlob);
            const markerImage = new Image();
            markerImage.src = url;

            markerImage.onload = () => {
                const lngLat = draggableMarker.getLngLat();
                const point = hiddenMap.project([lngLat.lng, lngLat.lat]);

                // Set the desired marker size
                const markerWidth = 225; 
                const markerHeight = 225; 

                tempCtx.drawImage(markerImage, point.x - markerWidth / 2, point.y - markerHeight / 2, markerWidth, markerHeight);

                const tempCanvasImageData = tempCanvas.toDataURL('image/png');

                // Download the temp canvas image (comment out if not required)
                const link = document.createElement('a');
                link.href = tempCanvasImageData;
                link.download = 'temp_canvas.png';
                link.click();

                // Generate PDF
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'mm',
                    format: [paperWidthMM, paperHeightMM]  // Use selected dimensions for the PDF
                });

                pdf.addImage(tempCanvasImageData, 'PNG', 0, 0, paperWidthMM, paperHeightMM);

                pdf.save('map_with_overlay.pdf');

                // Clean up
                hiddenMap.remove();
                document.body.removeChild(hiddenContainer);
                URL.revokeObjectURL(url); 
            };
        });
    });
}

