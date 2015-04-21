$(document).ready(function(event) {

  var halfCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-half shadow",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var row = $('.row')[1];
      $(row).append(this.$el);
    }
  });

  var QuarterCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-quarter shadow",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var row = $('.row')[2];
      $(row).append(this.$el);
    }
  });


  var thirdCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-third shadow",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var row = $('.row')[3];
      $(row).append(this.$el);
    }
  });



  var data = { title: "Half Card 1 Title", content: "Half Card 1 Content"}
  var halfCardOne = new halfCardView(data);

  var data = { title: "Half Card 2 Title", content: "Half Card 2 Content"};
  var halfCardTwo = new halfCardView(data);

  var data = { title: "Third Card 1 Title", content: "Third Card 1 Content"}
  var thirdCardOne = new thirdCardView(data);

  var data = { title: "Third Card 2 Title", content: "Third Card 2 Content"};
  var thirdCardTwo = new thirdCardView(data);

  var data = { title: "Third Card 3 Title", content: "Third Card 3 Content"}
  var thirdCardThree = new thirdCardView(data);

  var data = { title: "Quarter Card 1 Title", content: "Quarter Card 1 Content"}
  var quarterCardOne = new QuarterCardView(data);

  var data = { title: "Quarter Card 2 Title", content: "Quarter Card 2 Content"};
  var quarterCardTwo = new QuarterCardView(data);

  var data = { title: "Quarter Card 3 Title", content: "Quarter Card 3 Content"}
  var quarterCardThree = new QuarterCardView(data);

  var data = { title: "Quarter Card 4 Title", content: "Quarter Card 4 Content"}
  var quarterCardFour = new QuarterCardView(data);



});
