$(document).ready(function () {
   for (i = 0; i < 3; i++) {
    $(".list li").clone().appendTo(".list");
  }
  $('.glow-on-hover').click(function () {
    $('.window').css({
      right: "0"  
    })
    $('.list li').css({
      border: '4px solid transparent'
    })
    function selfRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var x = selfRandom(50, 100);
    $('.list li:eq('+x+')').css({
      border:'4px solid #00ba00'
    })
    $('.window').animate({
      right: ((x*130)+(x*8-12)-119)
    }, 9000, function() {
      var audio = new Audio('C:\\Users\\111\\Desktop\\игра\\sound\\gambling.mp3');
      audio.play();
      
      for (var i = 0; i < 400; i++) {
        var left = selfRandom(0, $(window).width());
        var top = selfRandom(0, $(window).height());
        $('<div class="firework"></div>')
          .css({
            left: left,
            top: top,
            background: 'hsl(' + selfRandom(0, 360) + ', 100%, 50%)',
            borderRadius: '50%',
            width: selfRandom(2, 5),
            height: selfRandom(2, 5),
            position: 'absolute'
          })
          .appendTo('body')
          .animate({
            top: top - selfRandom(50, 100),
            left: left + selfRandom(-50, 50),
            opacity: 1
          }, selfRandom(6000, 7000), function() {
            $(this).remove();
          });
      }
        });
       });
    });

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}
function openSettingsModal() {
  document.getElementById("settings-modal").style.display = "block";
}

function closeSettingsModal() {
  document.getElementById("settings-modal").style.display = "none";
}
  
const settingsContent = document.getElementById('settings-content');


function openInventoryModal() {
  document.getElementById("inventory-modal").style.display = "block";
}

function closeInventoryModal() {
  document.getElementById("inventory-modal").style.display = "none";
}
  
const inventoryContent = document.getElementById('inventory-modal');




