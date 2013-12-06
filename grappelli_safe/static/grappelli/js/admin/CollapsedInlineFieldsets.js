mezzanine.jQuery(document).ready(function(){
    
    /// INLINE ELEMENTS
    /// collapsible elements for stacked inlines
    mezzanine.jQuery('div.inline-stacked div.inline-related').each(function(i) {
        mezzanine.jQuery(this).addClass("collapsed");
        mezzanine.jQuery(this).find('h3:first').attr("class", "collapse-toggle");
    });
    mezzanine.jQuery('div.inline-stacked div.inline-related h3.collapse-toggle').bind("click", function(){
        mezzanine.jQuery(this).parent().toggleClass('collapsed');
        mezzanine.jQuery(this).parent().toggleClass('collapse-closed');
        mezzanine.jQuery(this).parent().toggleClass('collapse-open');
    });
    
    /// INLINEGROUPS (STACKED & TABULAR)
    mezzanine.jQuery('div.inline-group.collapse-closed').each(function() {
        mezzanine.jQuery(this).addClass("collapsed");
        mezzanine.jQuery(this).find('h2:first').attr("class", "collapse-toggle");
    });
    mezzanine.jQuery('div.inline-group.collapse-open').each(function() {
        mezzanine.jQuery(this).find('h2:first').attr("class", "collapse-toggle");
    });
    
    /// OPEN STACKEDINLINE WITH ERRORS (onload)
    mezzanine.jQuery('div.inline-stacked div.inline-related').find('div[class*="errors"]:first').each(function(){
        mezzanine.jQuery(this).parents('div.inline-related').removeClass("collapse-closed");
        mezzanine.jQuery(this).parents('div.inline-related').removeClass("collapsed");
        mezzanine.jQuery(this).parents('div.inline-related').addClass("collapse-open");
        mezzanine.jQuery(this).parents('div.inline-stacked').removeClass("collapse-closed");
        mezzanine.jQuery(this).parents('div.inline-stacked').removeClass("collapsed");
        mezzanine.jQuery(this).parents('div.inline-stacked').addClass("collapse-open");
    });
    
    /// OPEN TABULARINLINE WITH ERRORS (onload)
    mezzanine.jQuery('div.inline-tabular').find('div[class*="error"]:first').each(function(i) {
        mezzanine.jQuery(this).parents('div.inline-tabular').removeClass("collapse-closed");
        mezzanine.jQuery(this).parents('div.inline-tabular').removeClass("collapsed");
        mezzanine.jQuery(this).parents('div.inline-tabular').addClass("collapse-open");
    });
    
    /// FIELDSETS WITHIN STACKED INLINES
    mezzanine.jQuery('div.inline-related').find('fieldset[class*="collapse-closed"]').each(function() {
        mezzanine.jQuery(this).addClass("collapsed");
        mezzanine.jQuery(this).find('h4:first').addClass("collapse-toggle");
    });
    mezzanine.jQuery('div.inline-related').find('fieldset[class*="collapse-open"]').each(function() {
        mezzanine.jQuery(this).find('h4:first').addClass("collapse-toggle");
    });
    mezzanine.jQuery('h4.collapse-toggle').bind("click", function(e){
        mezzanine.jQuery(this).parent().toggleClass('collapsed');
        mezzanine.jQuery(this).parent().toggleClass('collapse-closed');
        mezzanine.jQuery(this).parent().toggleClass('collapse-open');
    });
    
});
