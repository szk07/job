function Modal(el) {										alert("001:Modal el="+el);
  this.initialize(el);
}

Modal.prototype.initialize = function(el) {					alert("005:Modal.prototype.initialize 引数el="+el);
  this.$el = el;  
  this.$container = $("#modal");
  this.$contents = $("#modal-contents");

  // 削除
  // this.$close = $("#modal-close");
  // this.$next = $("#modal-next");
  // this.$prev = $("#modal-prev");

  this.$overlay = $("#modal-overlay");
  this.$parents = this.$el.parents("ul");
  this.$window = $(window);
  this.handleEvents();
};

Modal.prototype.handleEvents = function() {					alert("021:Modal.prototype.handleEvents");
  var self = this;
  this.$parents.on("click", "a" , function(e) {				alert("023:a 引数e="+e);
    self.show(e);
    return false;
  });

  this.$container.on("click", "#modal-next", function(e) {	alert("028:#modal-next 引数e="+e);
    self.next(e);
    return false;
  });
  this.$container.on("click", "#modal-prev", function(e) {  alert("032:#modal-prev 引数e="+e);
    self.prev(e);
    return false;
  });
  this.$container.on("click", "#modal-close", function(e) {	alert("036:#modal-close 引数e="+e);
    self.hide(e);
    return false;
  });

  this.$overlay.on("click", function(e) {					alert("041:overlay 引数e="+e);
    self.hide(e);
    return false;
  });

  this.$window.on("load resize", function(){				alert("046:load resize");
    self.resize();
  });

};

Modal.prototype.show = function(e) {						alert("054:Modal.prototype.show 引数e="+e);
  var $target = $(e.currentTarget),
      src = $target.attr("href");
  this.$contents.html("<img src=\"" + src + "\" />");
  this.$container.fadeIn();
  this.$overlay.fadeIn();

  var index = $target.data("index");
  this.countChange = this.createCounter(index, this.$el.length);
  return false;
};

Modal.prototype.hide = function(e) {						alert("064:Modal.prototype.hide 引数e="+e);   
  this.$container.fadeOut();
  this.$overlay.fadeOut();
};

Modal.prototype.slide = function(index) {					alert("069:Modal.prototype.slide index="+index); 
  this.$contents.find("img").fadeOut({
    complete: function() {
      var src = $("[data-index=\"" + index + "\"]").find("img").attr("src");
      $(this).attr("src", src).fadeIn();
    }
  });
};

Modal.prototype.createCounter = function(index, len){		alert("078:Modal.prototype.createCounter index="+index+"  len="+len); 
  return function(num) {
    return index = (index + num + len) % len;
  };
};

Modal.prototype.next = function() {							alert("084:Modal.prototype.next"); 
  this.slide(this.countChange( 1 ));
};

Modal.prototype.prev = function() {							alert("098:Modal.prototype.prev"); 
  this.slide(this.countChange( -1 ));
};

Modal.prototype.resize = function() {						alert("092:Modal.prototype.resize"); 
  var w = this.$window.width();
  if(w < 640){
    this.$container.css({"width": "320","height":"213"});
  }else{
    this.$container.css({"width": "750","height":"500"});
  }
};

var modal = new Modal($("#modal-thumb a"));					alert("101:new Modal");

$("#more-btn").on("click", function() {						alert("103:#more-btn:click");
  var html = '<li>\
    <a href="images/photo-04.JPG" data-index="3">\
      <img alt="" src="images/photo-04.JPG" width="160" class="img-thumbnail">\
    </a>\
  </li>';
  $(html).appendTo($("#modal-thumb")).hide().fadeIn();
  $(this).fadeOut();
  modal.$el = $("#modal-thumb a");
});
