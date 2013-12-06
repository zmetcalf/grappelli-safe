mezzanine.jQuery(document).ready(function(){

    // TICKET #11447: td containing a.add-another need.nowrap
    mezzanine.jQuery('table').find('a.add-another').parent('td')
        .addClass('nowrap');

    mezzanine.jQuery('.filterset h3').click(function() {
        $(this).parent().toggleClass('collapse-closed');
        $(this).parent().toggleClass('collapse-open');
        $(this).next().next().toggle();
    });
    mezzanine.jQuery('input.search-fields-verbose').click(function() {
        $(this).val("");
        $(this).removeClass("search-fields-verbose");
    });

    // SUBMIT FORM WITHOUT "RUN"-BUTTON
    mezzanine.jQuery('div.actions select').change(function(){
        if ($(this).val()) {
            $('div.changelist-content form').submit();
        }
    });

});
