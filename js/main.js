$(document).ready(function () {
    //Dashboard Area
    $('#dashboard').click(function () {
        $('.dashboard').prop('checked', this.checked);
    });
    $('.dashboard').change(function () {
        var check = ($('.dashboard').filter(":checked").length == $('.dashboard').length);
        $('#dashboard').prop("checked", check);
    });

    //Administration Area
    $('#administration').click(function () {
        $('.administration').prop('checked', this.checked);
    });
    $('.administration').change(function () {
        var check = ($('.administration').filter(":checked").length == $('.administration').length);
        $('#administration').prop("checked", check);
    });
    
    //Group-Permission Area
    $('#group-permission').click(function () {
        $('.group-permission').prop('checked', this.checked);
    });
    $('.group-permission').change(function () {
        var check = ($('.group-permission').filter(":checked").length == $('.group-permission').length);
        $('#group-permission').prop("checked", check);
    });
});
