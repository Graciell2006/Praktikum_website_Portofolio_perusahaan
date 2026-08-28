// Top nav background on scroll
  var topnav = document.getElementById('topnav');
  window.addEventListener('scroll', function(){
    if(window.scrollY > 60){ topnav.classList.add('scrolled'); }
    else{ topnav.classList.remove('scrolled'); }
  });

  // Typed tagline effect (respects reduced motion)
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var taglineText = 'Merancang & membangun produk digital yang teruji, dari ide hingga rilis.';
  var taglineEl = document.getElementById('typedTagline');
  if(reduceMotion){
    taglineEl.textContent = taglineText;
  } else {
    var i = 0;
    function typeChar(){
      if(i <= taglineText.length){
        taglineEl.innerHTML = taglineText.slice(0,i) + '<span class="cursor"></span>';
        i++;
        setTimeout(typeChar, 26);
      }
    }
    setTimeout(typeChar, 500);
  }

  // Scrollspy for side rail
  var railItems = document.querySelectorAll('.rail-item');
  var sections = Array.prototype.map.call(railItems, function(item){
    return document.getElementById(item.getAttribute('data-target'));
  });
  railItems.forEach(function(item){
    item.addEventListener('click', function(){
      var target = document.getElementById(item.getAttribute('data-target'));
      if(target){ target.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth'}); }
    });
  });
  function updateRail(){
    var pos = window.scrollY + window.innerHeight * 0.4;
    var activeIdx = 0;
    sections.forEach(function(sec, idx){
      if(sec && sec.offsetTop <= pos){ activeIdx = idx; }
    });
    railItems.forEach(function(item, idx){
      item.classList.toggle('active', idx === activeIdx);
    });
  }
  window.addEventListener('scroll', updateRail);
  updateRail();