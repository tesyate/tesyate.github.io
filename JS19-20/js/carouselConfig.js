$(function() {
    $('.jcarousel').jcarousel({
        list: '.jcarousel-list',
        items: '.jcarousel-item',
        animation: 'slow',
        center: true
    });

    $('.jcarousel-pagination').jcarouselPagination({
        'item': function(page, carouselItems) {
            return '<div class="jcarousel-pagination__basic"><div class="jcarousel-pagination__checked"></div></div>';
        }
    });
}(jQuery));

(function () {
    'use strict';

    fetch('/js/data.json')
        .then(function (responce) {
                return responce.json();
        })
        .then(function (data) {
            getData(data);
        });

    function getData(info) {
        getskills(info);
        getFriends(info);
        getAllFriends(info);
    }

    function getskills(item) {
        let filterObj = _.map(item, 'skills');
        let localArr =[];
        _.forEach(filterObj, function (value) {
            localArr = _.concat(localArr, value);
        });
        localArr.sort(function(a,b) {
            return a.localeCompare(b);
        });
        let unicArray = _.union(localArr);
        console.log('1) Sorted array: ' + unicArray);
    }
    
    function getFriends(item) {
        let filterObj = [];
        _.forEach(item, function (value) {
            filterObj = _.concat(filterObj, {name: value.name, friends: value.friends});
        });
        filterObj.sort(function (a, b) {
            return a.friends.length - b.friends.length;
        });
        console.log(filterObj);
    }
    
    function getAllFriends(item) {
        let filterObj = _.map(item, 'friends');
        let list = [];
        _.forEach(filterObj, function (value) {
            let name = _.map(value, 'name');
            list = _.concat(list, name);
        });
        list.sort();
        let finalList = _.sortedUniq(list);
        console.log(finalList);
    }
})();