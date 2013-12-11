var formatRating = Ember.Handlebars.makeBoundHelper(function(rating) {
    var html = '<div>';
    for (var i = 0; i < rating; i++){
        html += '<span class="glyphicon glyphicon-star-empty"></span>';
    }
    html += '</div>';
    return new Ember.Handlebars.SafeString(html);
});

export default formatRating;
