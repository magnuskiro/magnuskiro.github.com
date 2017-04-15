
var templates = {
    'standard.html': 'Standard',
    'studentmediene.html': 'Studentmediene'
};

var populateDropdown = function () {
    var options = '';
    for (var demo in templates) {
        options += '<option value="' + demo + '">' + templates[demo] + '</option>';
    }
    $('#template').html(options).on('change', loadSelectedFile);
};

var loadSelectedFile = function() {
    if ($('#template').val() == 'user-input.js') {
        $('.controls .checkbox').hide();
        $('.controls .alert').show();
        jsPDFEditor.update(true);
    } else {
        $('.controls .checkbox').show();
        $('.controls .alert').hide();
    }

    $.get('modules/attest/templates/' + $('#template').val(), function(response) {
        var htmlFile = 'modules/attest/templates/' + $('#template').val();
        $('.editor-pane').attr('src', htmlFile);

        // If autorefresh isn't on, then force it when we change examples
        if (! $('#auto-refresh').is(':checked')) {
            jsPDFEditor.update();
        }

    }, 'text').error(function() {

        $('.template-picker').html('<p class="source">More examples in <b>examples/js/</b>. We can\'t load them in automatically because of local filesystem security precautions.</p>');

        $('.editor-pane').attr('src', source);
        //editor.setValue(source);
    });
};

// init stuff.
populateDropdown();
loadSelectedFile();

    //setTimeout(function() {
        var doc = $('#editor');
        console.info(doc);
        if (typeof doc !== 'undefined') {
            var string = doc.output('datauristring');
            $('.preview-pane').attr('src', string);
        }
   // }, 0);