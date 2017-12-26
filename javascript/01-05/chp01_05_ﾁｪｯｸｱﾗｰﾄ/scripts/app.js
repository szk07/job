function AppModel(attrs) {								alert("001:function AppModel 引数attrs="+attrs);
  this.val = "";
  this.attrs = {
    required: attrs.required || false,
    maxlength: attrs.maxlength || 8,
    minlength: attrs.minlength || 4
  };
  this.listeners = {
    valid: [],
    invalid: []
  };
}

AppModel.prototype.set = function(val) {				alert("014:AppModel.prototype.set 引数val=" + val);
  if (this.val === val) return;
  this.val = val;
  this.validate();
};

AppModel.prototype.validate = function() {				alert("020:AppModel.prototype.validate");
  var val;
  this.errors = [];

  for (var key in this.attrs) {
    val = this.attrs[key];
    if (val && !this[key](val)) this.errors.push(key);
  }

  this.trigger(!this.errors.length ? "valid" : "invalid");
};

AppModel.prototype.on = function(event, func) {			alert("032:AppModel.prototype.on 引数event="+event+"  引数func="+func);
  this.listeners[event].push(func);
};

AppModel.prototype.trigger = function(event) {			alert("036:AppModel.prototype.trigger 引数event="+event);
  $.each(this.listeners[event], function() {
    this();
  });
};

AppModel.prototype.required = function() {				alert("042:AppModel.prototype.required");
  return this.val !== "";
};

AppModel.prototype.maxlength = function(num) {			alert("046:AppModel.prototype.maxlength 引数num="+num);
  return num >= this.val.length;
};

AppModel.prototype.minlength = function(num) {			alert("050:AppModel.prototype.minlength 引数num="+num);
  return num <= this.val.length;
};

function AppView(el) {									alert("054:function AppView 引数el="+el);
  this.initialize(el);
  this.handleEvents();
}

AppView.prototype.initialize = function(el) {			alert("059:AppView.prototype.initialize 引数el="+el);
  this.$el = $(el);
  this.$list = this.$el.next().children();

  var obj = this.$el.data();

  if (this.$el.prop("required")) { 
    obj["required"] = true;
  }

  this.model = new AppModel(obj);
};

AppView.prototype.handleEvents = function() {			alert("072:AppView.prototype.handleEvents");
  var self = this;

  this.$el.on("keyup", function(e) {					alert("075:AppView.prototype.handleEvents keyup");
    self.onKeyup(e);
  });

  this.model.on("valid", function() {
    self.onValid();
  });

  this.model.on("invalid", function() {
    self.onInvalid();
  });

};

AppView.prototype.onKeyup = function(e) {
  var $target = $(e.currentTarget);
  this.model.set($target.val());
};

AppView.prototype.onValid = function() {				alert("94:AppView.prototype.onValid");
  this.$el.removeClass("error");
  this.$list.hide();
};

AppView.prototype.onInvalid = function() {				alert("99:AppView.prototype.onInvalid");
  var self = this;
  this.$el.addClass("error");
  this.$list.hide();

  $.each(this.model.errors, function(index, val) {
    self.$list.filter("[data-error=\"" + val + "\"]").show();
  });
};

$("input").each(function() {							alert("109:new AppView");
  new AppView(this);
});
