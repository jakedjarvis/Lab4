var Lab2 = function() {
      var self = this;

        self.lab2URL = '/lab2/weather.html';


        self.cityInput = $("#cityField");
        self.suggestionsList = $("#txtHint");
        self.allSuggestions = $$("#txtHint li");
        self.weatherButton = $("#weatherButton");
        self.cityTextArea = $("#displayCity");
        self.weatherText =$("#weather");


        self.stackSearchInput = $("#searchStack");
        self.stackSearchButton = $("#searchButton");
        self.stackSearchResults = $("#searchResults");

}

module.exports = new Lab2();
