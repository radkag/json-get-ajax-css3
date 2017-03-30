$(document).ready(function () {
  $('#get-data').click(function () {
    var showData = $('#show-data');

    $.getJSON('https://private-1d401-myaeg.apiary-mock.com/api/%7Bmajor_api_version%7D/care_options?sync_at=', function (data) {
      console.log(data);

      var items = data.data.map(function (data) {
        return data.name;
      });

      showData.empty();

      if (items.length) {
        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }

      $('ul li').each(function(i){
      var t = $(this);
      setTimeout(function(){ t.addClass('example'); }, (i+1) * 1000);
      });
    });

    showData.text('Loading the JSON file.');
  });
});
